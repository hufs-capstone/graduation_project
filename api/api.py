# -- coding: utf-8 --
import time
import api_pb2 as pb
from flask import Flask, request
from google.protobuf.json_format import MessageToJson
import json
from mongo import mongo_api
import calculate_data
from flask_cors import CORS

app = Flask(__name__, static_folder="../build", static_url_path="/")
CORS(app)


@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/products/')
def get_product():
    product = pb.Product()
    product.name = "gana"
    product.id = 1234
    product.company = "lotte"
    product.kcal = 300
    return MessageToJson(product)
@app.route('/products/<product_name>')
def products(product_name):
    print("-----")
    print(product_name)
    product = mongo_api.get(product_name)
    if product is None:
        product = pb.Product()
    print(product.name)
    return MessageToJson(product)

@app.route('/translate', methods=['POST'])
def translate():
	if request.method == 'POST': 
		body = request.get_json()
		print('-----')
		print(body)
		product_name = body['product_name']
		age = body['age'] 
		sex = body['sex'] 
		product_info = mongo_api.get(product_name) 
		res = pb.CompareDatas() 
		res.basic.product.CopyFrom(product_info) 
		res.translated.CopyFrom(calculate_data.multi(age, sex, product_info))
		return MessageToJson(res)

@app.route('/manualtranslate', methods=['POST'])
def manualtranslate():
    if request.method == 'POST':
        body = request.get_json()
        age = body['age']
        sex = body['sex']
        product_info = pb.Product()
        product_info.kcal = int(body['kcal'])
        product_info.protein = int(body['protein'])
        product_info.fat = int(body['fat'])
        product_info.carbs = int(body['carbs'])
        product_info.sugar = int(body['sugar'])
        product_info.na = int(body['na'])
        product_info.chol = int(body['chol'])
        res = pb.CompareDatas()
        res.basic.product.CopyFrom(product_info)
        res.translated.CopyFrom(calculate_data.multi(age, sex, product_info))

        return MessageToJson(res)

@app.route('/searchproduct', methods=['POST'])
def searchproduct():
	body = request.get_json()
	query = body['query']
	print(query)
	start = int(body['num'])
	print(start)
	res = mongo_api.search(query, start)
	
	return MessageToJson(res)

@app.route('/user_info', methods=['GET'])
def get_user_info():
    user_info = pb.UserInfo()
    user_info.age = 10;
    user_info.sex = "male"
    user_info.section = pb.S9_11
    return user_info.SerializeToString()
    #return MessageToJson(user_info)


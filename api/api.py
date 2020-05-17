import time
import api_pb2 as pb
from flask import Flask, request
from google.protobuf.json_format import MessageToJson
import json
from mongo import mongo_api
import calculate_data

app = Flask(__name__, static_folder="../build", static_url_path="/")


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
        product_name = request.form['product_name']
        age = request.form['age']
        sex = request.form['sex']
        print(product_name)
        print(age)
        print(sex)
        product_info = mongo_api.get(product_name)
        res = pb.CompareDatas()
        res.basic.product.CopyFrom(product_info)
        res.translated.CopyFrom(calculate_data.multi(age, sex, product_info))
        return MessageToJson(res)

@app.route('/manualtranslate', methods=['POST'])
def manualtranslate():
    if request.method == 'POST':
        age = request.form['age']
        sex = request.form['sex']
        product_info = pb.Product()
        product_info.kcal = int(request.form['kcal'])
        product_info.protein = int(request.form['protein'])
        product_info.fat = int(request.form['fat'])
        product_info.carbs = int(request.form['carbs'])
        product_info.sugar = int(request.form['sugar'])
        product_info.na = int(request.form['na'])
        product_info.chol = int(request.form['chol'])
        res = pb.CompareDatas()
        res.basic.product.CopyFrom(product_info)
        res.translated.CopyFrom(calculate_data.multi(age, sex, product_info))

        return MessageToJson(res)

@app.route('/user_info', methods=['GET'])
def get_user_info():
    user_info = pb.UserInfo()
    user_info.age = 10;
    user_info.sex = "male"
    user_info.section = pb.S9_11
    return user_info.SerializeToString()
    #return MessageToJson(user_info)


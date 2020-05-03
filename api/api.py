import time
import api_pb2 as pb
from flask import Flask
from google.protobuf.json_format import MessageToJson
import json

app = Flask(__name__, static_folder="../build", static_url_path="/")


@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/product')
def get_product():
    product = pb.Product()
    product.name = "gana"
    product.id = 1234
    product.company = "lotte"
    product.kcal = 300
    return MessageToJson(product)

@app.route('/user_info', methods=['GET'])
def get_user_info():
    user_info = pb.UserInfo()
    user_info.age = 10;
    user_info.sex = "male"
    user_info.section = pb.S9_11
    return user_info.SerializeToString()
    #return MessageToJson(user_info)


    

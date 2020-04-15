import time
import api_pb2 as pb
from flask import Flask
from google.protobuf.json_format import MessageToJson
import json

app = Flask(__name__)

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

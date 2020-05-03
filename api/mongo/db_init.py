from pymongo import MongoClient
import csv

client = MongoClient()

db = client.main_db
products = db.products

with open('food_list.csv', encoding='utf8') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    line_count = 0
    for line in csv_reader:
        product = {}
        product["name"] = line["식품명"]
        product["company"] = line["제조사"]
        product["kcal"] = line["에너지(Kcal)"]
        product["protein"] = line["단백질"]
        product["fat"] = line["지질"]
        product["carbs"] = line["탄수화물"]
        product["sugar"] = line["총당류"]
        product["na"] = line["나트륨"]
        product["chol"] = line["콜레스테롤"]
        products.insert_one(product)
        print(product["name"])



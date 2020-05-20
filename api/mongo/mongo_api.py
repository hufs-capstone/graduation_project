from pymongo import MongoClient
from pprint import pprint
import sys
sys.path.append('..')
import api_pb2 as pb

def get(product_name):
    with MongoClient() as client:
        db = client.main_db
        products = db.products
        temp = products.find_one({"name" : product_name})
        res = pb.Product()
        print("---mongo api---")
        pprint(temp)
        print("---mongo api---")
        if temp is None:
            return None
        for key in temp.keys():
            value = temp[key]
            if(key == '_id'):
                continue
            if(key == 'col'):
                key = 'chol'
            if value == '-':
                value = 0
            if key in ['chol', 'kcal', 'protein', 'fat', 'carbs', 'sugar', 'na']:
                value = float(value)
            setattr(res, key, value)
        #FIXME
        # change col to chol
        #res.name = temp['chol']
        return res

def search(query, start):
    with MongoClient() as client:
        db = client.main_db
        products = db.products
        query = "\d*"+query+"\d*"
        cursor = products.find({"name" : {"$regex": query}})[start:start+10]
        res_products = pb.Products()
        for line in cursor:
            product = res_products.products.add()
            for key in line.keys():
                value = line[key]
                if(key == '_id'):
                    continue
                if(key == 'col'):
                    key = 'chol'
                if value == '-':
                    value = 0
                if key in ['chol', 'kcal', 'protein', 'fat', 'carbs', 'sugar', 'na']:
                    value = float(value)
                setattr(product, key, value)

        return res_products 

    


if __name__ == "__main__":
    res = get("마가렛트")

    res = search("파이", 11)

    print(res)
    print(res.products[0])
    print(res.products[1])



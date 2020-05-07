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
        pprint(temp)
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


if __name__ == "__main__":
    res = get("마가렛트")
    print (res.name)
    print (res.carbs)
    print (res.fat)
    print (res.na)


import api_pb2 as pb
from algorithm import table

def multi(age, sex, product_info):
    standard = table['male']['6']
    target = table[sex][age]
    ans = pb.TableForm()
    ans.product.CopyFrom(product_info)
    ans.age = age;
    ans.sex = sex;
    ans.product.kcal = round(target['kcal']/standard['kcal']* product_info.kcal)
    ans.product.protein = round(target['protein']/standard['protein']* product_info.protein)
    ans.product.fat = round(target['fat']/standard['fat']* product_info.fat)
    ans.product.carbs = round(target['carbs']/standard['carbs']* product_info.carbs)
    ans.product.sugar = round(target['sugar']/standard['sugar']* product_info.sugar)
    ans.product.na = round(target['na']/standard['na']* product_info.na)
    if standard['chol'] == 0:
        ans.product.chol = 0
    else:
        ans.proudct.chol = round(target['chol']/standard['chol']* product_info.chol)
    return ans



if __name__ == "__main__":
    from mongo import mongo_api
    product_info = pb.Product()
    product_info.kcal = 1000
    product_info.protein = 1000
    product_info.fat = 1000
    product_info.carbs = 1000
    product_info.sugar = 1000
    product_info.na = 1000
    product_info.chol = 1000
    ans = multi("2", "male", product_info)
    print(ans.kcal)
    print(ans.protein)
    print(ans.fat)
    print(ans.carbs)
    print(ans.sugar)
    print(ans.na)
    print(ans.chol)

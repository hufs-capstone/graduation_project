import api_pb2 as pb


def multi(age, sex, product_info):

	standard = table['male']['6']
	target = table[sex][age]
	ans = pb.TableForm()
 
	ans.kcal = target['kcal']/standard['kcal']* product_info.kcal
	ans.protein = target['protein']/standard['protein']* product_info.protein
	ans.fat = target['fat']/standard['fat']* product_info.fat
	ans.carbs = target['carbs']/standard['carbs']* product_info.carbs
	ans.sugar = target['sugar']/standard['sugar']* product_info.sugar
	ans.na = target['na']/standard['na']* product_info.na
	ans.chol = target['chol']/standard['chol']* product_info.chol

	return ans



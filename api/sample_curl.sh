#curl -X POST -H "Content-Type: application/json; charset=utf-8" -d '{"product_name":"마가렛트", "sex":"male", "age":"5"}' localhost:5000/translate

#curl -X GET -H "Content-Type: application/json; charset=utf-8"  localhost:5000/searchproduct?query=마가렛트&num=0
#curl http://localhost:5000/searchproduct?query=마가렛트&num=0
#curl http://localhost:5000/searchproduct?query=pie&num=0
curl -X POST -H "Content-Type: application/json; charset=utf-8" -d '{"query":"마가렛트", "num":"0"}' localhost:5000/searchproduct
#curl --data-urlencode "product_name=마가렛트" --data-urlencode "sex=male" --data-urlencode "age=5" localhost:5000/translate

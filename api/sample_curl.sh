curl --data-urlencode "product_name=마가렛트" --data-urlencode "sex=male" --data-urlencode "age=5" localhost:5000/translate
curl --data-urlencode "sex=male"\
    --data-urlencode "age=5" \
    --data-urlencode "kcal=100" \
    --data-urlencode "protein=100" \
    --data-urlencode "fat=100" \
    --data-urlencode "carbs=100" \
    --data-urlencode "sugar=100" \
    --data-urlencode "na=100" \
    --data-urlencode "chol=100" \
    localhost:5000/manualtranslate

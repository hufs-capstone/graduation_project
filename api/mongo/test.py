# -*- coding: utf-8 -*-
import pandas as pd
from IPython.core.display import display, HTML
display(HTML("<style>.container{width:90% !important;}</style>"))

result_line = pd.read_csv(r"food_list.csv",encoding= "utf-8")
result_line.head()
result_line_food = result_line.loc[result_line["name"].str.contains("파이")]
result_line_food.head()


print ("tariku negash ")   
#
# price = float("250")
text_age = "25"

age = int(text_age)
print(age)

firstName = input("inter your name")
print(firstName)
age = 10 
ages = 12
print(age == ages)
if age > ages:
    print("age is greater than ages")
else:
    print("age is less than ages")    

count = 5
while count > 0:
    print(count)
    count -= 1
    print("count is now", count)
for I in range (5):
    print("#"* I)
foodnames = ["pizza", "burger", "pasta", "sushi"]
for food in foodnames:
    print(f" I like {food}")

customers = [
    ("abel" , 1500),
    ("abebe" , 700),
    ("abiy" , 200),
]   
for name, balance in customers:
    if balance > 1000:
      tier = "premium"
    elif balance > 500:
      tier = "standard"
    else:
        tier = "basic"
    print(f"{name}: {tier} customer with a balance of ({balance} etb)")  
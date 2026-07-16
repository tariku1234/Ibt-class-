food = ["carrot", "potatos", "abovdo"]
print(food[0])
print(food[1:3])
names = ["Almaz", "Dawit", "Tigist"]
for name in names:
    print(f"Selam, {name}")
account = {
"owner": "Almaz",
"balance": 1500,
}
def deposit(acc, amount):
    acc["balance"] += amount
deposit(account, 500)
print(account["balance"])
class Account:
    def __init__(self, owner, bal):
        self.owner = owner
        self.balance

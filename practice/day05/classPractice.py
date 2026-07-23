class acount :
    def __init__(self, name ,balance ):
        self.name = name
        self. balance = balance
    def deposite(self, amount):
        self. balance += amount
        return self.balance
    def withdraw(self, amount):
        self. balance -= amount
        return self.balance
class savingacount(acount ):
    pass        
s = savingacount("tariku", 2000)
print(s.balance)
print(s.deposite(500))
print(s.withdraw(300))
print(f"{s.name} has a balance of {s.balance}")
class savingacount2(acount):
    def __init__(self, name, balance, rate):
        super().__init__(name, balance)
        self.rate = rate
    def interest(self):
        interest = self.balance *self.rate
        self.deposite(interest)
        return interest
s2 = savingacount2("tariku", 2000, 0.05)
print(s2.interest())
print(f"{s2.name} has a balance of {s2.balance} and earns interest of {s2.interest()}")

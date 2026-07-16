class acount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance
    def deposite(self, amount):
        self.balance += amount
    def withdrowal (self, amount):
        self.balance -+ amount
    def statement(self):
        print(f"{self.owner} : {self.balance}")
almaz = acount("almaz", 1500)
almaz.deposite(500)
almaz.withdrowal(200)
almaz.statement()


class Account:
   def __init__(self, balance):
     self.__balance = balance
   @property
   def balance(self): # getter
     return self.__balance
   @balance.setter
   def balance(self, value): # setter
      if value < 0:
        raise ValueError("No negatives")
      self.__balance = value
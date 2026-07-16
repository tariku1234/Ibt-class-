class book:
    def __init__(self, tittle, author, page):
        self.tittle = tittle
        self.author = author
        self.page = page
    def describe (self):
        print(f"{self.tittle} is written by {self.author} and has {self.page} pages")
class product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.__quantity = quantity 
    @property 
    def quantity(self):
        return self.__quantity   
    
    @quantity.setter    
    def quantity (self, value):
       if value < 0:
            raise ValueError("Refused: Stock quantity cannot go below zero.")
       self.__quantity = value
    def restock (self, amount):
        self.__quantity += amount
    def sell(self, n):
        if n < 0:
            raise ValueError("Cannot sell a negative amount.")
        self.quantity -= n            
       
p1 = product("Laptop", 45000, 5)
p2 = product("Phone", 25000, 10)
p3 = product("Headphones", 3000, 15)  

print(f"p1 (Laptop) starting quantity: {p1.quantity}")
p1.sell(3)
print(f"p1 (Laptop) updated quantity: {p1.quantity}")

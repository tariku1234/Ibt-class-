class Account:
    def __init__(self, owner, number, balance=0):
        self.owner = owner
        self.account_number = number
        self._balance = balance  
    @property
    def balance(self):
        return self._balance

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Must be positive")
        self._balance += amount

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Must be positive")
        if amount > self._balance:
            raise ValueError("Insufficient funds")
        self._balance -= amount

    def statement(self):
        print(f"[Account] {self.owner} ({self.account_number}): ${self._balance:.2f}")

class SavingsAccount(Account):
    def __init__(self, owner, number, balance=0, interest_rate=0.05):
        super().__init__(owner, number, balance)
        self.interest_rate = interest_rate

    def add_interest(self):
        interest = self._balance * self.interest_rate
        self.deposit(interest)
    def statement(self):
        print(f"[Savings Account] {self.owner} ({self.account_number}): ${self._balance:.2f} (Rate: {self.interest_rate * 100:.1f}%)")

class CurrentAccount(Account):
    def __init__(self, owner, number, balance=0, overdraft_limit=500):
        super().__init__(owner, number, balance)
        self.overdraft_limit = overdraft_limit

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Must be positive")
        if amount > self._balance + self.overdraft_limit:
            raise ValueError("Exceeds overdraft limit")
        self._balance -= amount
    def statement(self):
        print(f"[Current Account] {self.owner} ({self.account_number}): ${self._balance:.2f} (Overdraft: ${self.overdraft_limit})")

if __name__ == "__main__":
    acc1 = Account("Tariku", "CBE-1001", 1000)
    acc2 = SavingsAccount("Almaz", "CBE-1002", 1500, interest_rate=0.05)
    acc3 = CurrentAccount("Kassahun", "CBE-1003", 500, overdraft_limit=300)

    acc2.add_interest()      
    acc3.withdraw(700)      
    accounts = [acc1, acc2, acc3]

    print("--- Account Statements (Polymorphic Loop) ---")
    for acc in accounts:
        acc.statement()
class Account {
  static totalAccounts = 0; // added static for no of accounts
  #balance; // private field declared

  constructor(accountHolder, accountNumber, initialBalance) {
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
    this.#balance = initialBalance;
    Account.totalAccounts++;
  }

  // internal helper - adjusts balance directly, no validation
  _adjustBalance(amount) {
    this.#balance += amount; // both positive(deposit) and negative(withdraw)
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log("Deposit amount must be greater than 0");
      return;
    }
    this._adjustBalance(amount);
    console.log(`Deposited ${amount}. New balance: ${this.balance}`);
  }

  withdraw(amount) {
    if (amount <= 0) {
      console.log("Withdrawal amount must be greater than 0");
      return;
    }
    if (amount > this.#balance) {
      console.log("Insufficient balance");
      return;
    }
    this._adjustBalance(-amount); // updated to use helper, consistent with deposit
    console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
  }

  get balance() {
    return this.#balance;
  }

  // static
  static getTotalAccounts() {
    return Account.totalAccounts;
  }
}

// inheritance
class SavingsAccount extends Account {
  constructor(accountHolder, accountNumber, initialBalance, interestRate) {
    super(accountHolder, accountNumber, initialBalance);
    this.interestRate = interestRate;
  }

  addInterest() {
    const interestAmount = this.balance * this.interestRate;
    this.deposit(interestAmount);
    console.log(`Interest of ${interestAmount} added.`);
  }
}

class CurrentAccount extends Account {
  constructor(accountHolder, accountNumber, initialBalance, overdraftLimit) {
    super(accountHolder, accountNumber, initialBalance);
    this.overdraftLimit = overdraftLimit;
  }

  // overriding method
  withdraw(amount) {
    if (amount <= 0) {
      console.log("Withdrawal amount must be greater than 0");
      return;
    }
    if (this.balance - amount < -this.overdraftLimit) {
      console.log("Overdraft limit exceeded");
      return;
    }
    this._adjustBalance(-amount);
    console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
  }
}

class Bank {
  constructor() {
    this.accounts = []; // to hold all account objects
  }

  addAccount(account) {
    this.accounts.push(account); // push - add to end of array
  }

  findAccount(accountNumber) {
    return this.accounts.find(acc => acc.accountNumber === accountNumber);
  }

  totalBankBalance() {
    let total = 0;
    for (const acc of this.accounts) {
      total += acc.balance;
    }
    return total;
  }
}

// testing 1 - for creating account, reflecting deposit, withdraw, balance
const acc1 = new Account("Vrishali", "ACC001", 1000);
console.log("Current balance - ", acc1.balance);
acc1.deposit(500);
acc1.withdraw(400);
acc1.withdraw(5000);
console.log(acc1.balance);

// testing 2 - for total no of accounts
const acc2 = new Account("Ram", "ACC002", 1000);
const acc3 = new Account("Sham", "ACC003", 2000);
console.log(Account.getTotalAccounts());

// testing 3
const sav1 = new SavingsAccount("Alice", "SAV001", 1000, 0.05); // 5% interest
sav1.addInterest();
console.log(sav1.balance);

// testing 4
const curr1 = new CurrentAccount("Vrishali", "CUR001", 1000, 500);
curr1.withdraw(1200);
console.log(curr1.balance);
curr1.withdraw(500);
console.log(curr1.balance);

// testing 5
const bank = new Bank();
bank.addAccount(acc1);
bank.addAccount(sav1);
bank.addAccount(curr1);
console.log(bank.findAccount("ACC001"));
console.log(bank.totalBankBalance());

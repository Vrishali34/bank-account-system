class Account {
  #balance; // private field declared

  constructor(accountHolder, accountNumber, initialBalance) {
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log("Deposit amount must be greater than 0");
      return;
    }
    this.#balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
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
    this.#balance -= amount;
    console.log(`Withdrew ${amount}. New balance: ${this.#balance}`);
  }

  get balance() {
    return this.#balance;
  }
}


// testing 
const acc1=new Account("Vrishali","ACC001",1000);
console.log("Current balance - ",acc1.balance);
acc1.deposit(500);
acc1.withdraw(200);
acc1.withdraw(5000);
console.log(acc1.balance);


class Account {
  static totalAccounts = 0;//added static for no of accounts 
  #balance; // private field declared

  constructor(accountHolder, accountNumber, initialBalance) {
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
    this.#balance = initialBalance;
    Account.totalAccounts++;
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

  //static
  static getTotalAccounts(){
    return Account.totalAccounts;
  }
}


// testing 1
// const acc1=new Account("Vrishali","ACC001",1000);
// console.log("Current balance - ",acc1.balance);
// acc1.deposit(500);
// acc1.withdraw(400);
// acc1.withdraw(5000);
// console.log(acc1.balance);

//testing 2

const acc2=new Account("Ram","ACC002",1000);
const acc3=new Account("Sham","ACC003",2000);
console.log(Account.getTotalAccounts());


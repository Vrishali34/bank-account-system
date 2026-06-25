class Account{
    constructor(accountHolder,accountNumber,initialBalance)
{
    this.accountHolder=accountHolder;
    this.accountNumber=accountNumber;
    this.#balance=initialBalance;

}
#balance;//private field

deposit(amount){
    if(amout<=0){
        console.log("Deposit amount shoud be greater tahn 0");
        return;
    }
    this.#balance.# += amount;
    console.log('Deposited ${amout}. New balance: ${this.#balance}');

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

}

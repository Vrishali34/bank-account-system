# Bank Account System (JavaScript OOP Project)

A simple command-line Bank Account Management System built in JavaScript to practice and demonstrate core Object-Oriented Programming (OOP) concepts using ES6+ classes.

## 📌 Overview

This project simulates a basic banking system with multiple account types, balance management, and a bank-level system to manage all accounts. It was built as a learning project to apply JavaScript class concepts in a practical, real-world-style scenario.

## 🚀 Features

- Create bank accounts with holder name, account number, and initial balance
- Deposit and withdraw money with validation (no negative/invalid amounts)
- Track total number of accounts created across the system
- Two specialized account types:
  - **Savings Account** — earns interest on balance
  - **Current Account** — allows withdrawals beyond balance, up to a set overdraft limit
- Bank-level management:
  - Add accounts to a bank
  - Search/find an account by account number
  - Calculate total balance across all accounts in the bank

## 🧠 OOP Concepts Covered

| Concept | Where it's used |
|---|---|
| Class & Constructor | `Account` class setup |
| Encapsulation (Private fields) | `#balance` — only accessible via methods/getters |
| Getters | `get balance()` — computed/controlled read access |
| Static properties & methods | `Account.totalAccounts`, `Account.getTotalAccounts()` |
| Inheritance (`extends`, `super`) | `SavingsAccount`, `CurrentAccount` extend `Account` |
| Method Overriding | `CurrentAccount.withdraw()` overrides `Account.withdraw()` |
| Class composition | `Bank` class manages an array of `Account` objects |

## 🛠️ Tech Used

- JavaScript (ES6+)
- Node.js (to run the script)

## ▶️ How to Run

1. Clone this repository
```bash
   git clone https://github.com/your-username/bank-account-system.git
   cd bank-account-system
```
2. Run the script
```bash
   node index.js
```

## 📂 Project Structure
bank-account-system/

├── index.js        # All classes and test/demo code

└── README.md       # Project documentation

## 📖 Example Usage

```javascript
const acc1 = new Account("Vrishali", "ACC001", 1000);
acc1.deposit(500);
acc1.withdraw(400);
console.log(acc1.balance); // 1100

const sav1 = new SavingsAccount("Alice", "SAV001", 1000, 0.05);
sav1.addInterest();
console.log(sav1.balance); // 1050

const curr1 = new CurrentAccount("Vrishali", "CUR001", 1000, 500);
curr1.withdraw(1200); // allowed, goes negative within overdraft limit
console.log(curr1.balance); // -200
```

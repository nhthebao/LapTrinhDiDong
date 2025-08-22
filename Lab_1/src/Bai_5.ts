class BankAccount {
  private balance: number = 0;

  deposit(amount: number): void {
    this.balance += amount;
    console.log("Transaction successful")
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient funds");
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

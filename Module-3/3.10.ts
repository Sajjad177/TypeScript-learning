{
  // TODO : Encapsulation in OOP------------------------->
  class BankBalance {
    readonly id: number;
    name: string; //* By default public this property.
    private balance: number;
    //* when use private you cannot use in child property. If you need it so you can use -> [" protected "]

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this.balance = balance;
    }

    // Method to add deposit
    deposit(amount: number): void {
      if (amount <= 0) {
        throw new Error("Deposit amount must be positive.");
      }
      this.balance += amount;
    }

    // Getter for balance
    getBalance(): number {
      return this.balance;
    }
  }

  // Example usage:
  const poorAccount = new BankBalance(111, "Mr. Poor", 100);
  console.log(`Initial balance: ${poorAccount.getBalance()}`);
  poorAccount.deposit(150);
  console.log(`New balance after deposit: ${poorAccount.getBalance()}`);

  //
}

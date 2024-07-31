// TODO : Getter and setter------------------------->

class BankBalance {
  readonly id: number;
  private _name: string; // private field for name
  private _balance: number; // private field for balance

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this._name = name;
    this._balance = balance;
  }

  // Getter for name
  get name(): string {
    return this._name;
  }

  // Setter for name
  set name(newName: string) {
    if (newName.trim() === "") {
      throw new Error("Name cannot be empty.");
    }
    this._name = newName;
  }
  //* The " trim() " method is used in programming to remove whitespace characters from both ends of a string. newName.trim() removes any leading or trailing whitespace from the newName string.

  // Getter for balance
  get balance(): number {
    return this._balance;
  }

  // Setter for balance (optional: if you want to allow modification outside of class methods)
  set balance(newBalance: number) {
    if (newBalance < 0) {
      throw new Error("Balance cannot be negative.");
    }
    this._balance = newBalance;
  }

  // Method to add deposit
  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive.");
    }
    this._balance += amount;
  }

  // Getter for balance: this could be used instead of direct access
  getBalance(): number {
    return this.balance;
  }
}

// Example usage:
const poorAccount = new BankBalance(111, "Mr. Poor", 100);
console.log(`Initial balance: ${poorAccount.getBalance()}`); 

// Using the getter for name
console.log(`Account holder: ${poorAccount.name}`); 

// Using the setter to change the name
poorAccount.name = "Mr. Wealthy";
console.log(`Updated account holder: ${poorAccount.name}`); 

// Depositing money
poorAccount.deposit(150);
console.log(`New balance after deposit: ${poorAccount.getBalance()}`); 

// Using the setter to update the balance (if needed)
poorAccount.balance = 300; // This is optional and depends on if you want to allow direct balance modification
console.log(`Updated balance: ${poorAccount.getBalance()}`); 

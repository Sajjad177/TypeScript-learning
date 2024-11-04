{
  // TODO : Access Modifiers
  class BankAccount {
    readonly id: number;
    name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    addDeposit(amount: number) {
      this._balance += amount;
    }
    getBalance() {
      return this._balance;
    }
  }

  const goribAccount = new BankAccount(1, "gorib", 20);
  goribAccount.addDeposit(120);
  console.log(goribAccount.getBalance()); //140
  // you can't access the balance directly
  // you can't change the balance directly
  // you can't access the private property directly

  //
}

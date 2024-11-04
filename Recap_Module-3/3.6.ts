{
  // TODO : Getter and Setter----------------------

  class BankAccount {
    readonly id: number;
    name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    // addDeposit(amount: number) {
    //   this._balance += amount;
    // }
    // getBalance() {
    //   return this._balance;
    // }

    // *--------------------- using getter and setter
    get balance(): number {
      return this._balance;
    }

    set deposit(amount: number) {
      this._balance = +amount;
    }
  }

  const goribAccount = new BankAccount(1, "gorib", 20);
  //   goribAccount.addDeposit(120);
  //   console.log(goribAccount.getBalance());
  goribAccount.deposit = 100;
  const myBalance = goribAccount.balance;

  console.log(myBalance);

  //
}

//* getter
//* setter

class BankAccount {
  public readonly userId: number;
  public userName: string;
  protected userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  // addBalance(balance: number) {
  //  this.userBalance = this.userBalance + balance;
  // }

  //* setter
  set addBalance(balance: number) {
    this.userBalance = this.userBalance + balance;
  }

  // getBalance() {
  //   return this.userBalance;
  // }

  //* getter
  get getBalance() {
    return this.userBalance;
  }
}

const ranaAccount = new BankAccount(111, "Rana", 20);

// ranaAccount.addBalance(100);
// ranaAccount.addBalance(100);

//* using setter : dont have to call the funtion
ranaAccount.addBalance = 100;
ranaAccount.addBalance = 100;

console.log(ranaAccount.getBalance);

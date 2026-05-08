class BankAccount {
  public readonly userId: number;
  public userName: string;
  protected userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  addBalance(balance: number) {
    this.userBalance = this.userBalance + balance;
  }
}

class StudentBankAccount extends BankAccount {
  test(){
    
  }
}

const ranaAccount = new BankAccount(111, "Rana", 20);

ranaAccount.addBalance(100);
ranaAccount.addBalance(50);
console.log(ranaAccount);

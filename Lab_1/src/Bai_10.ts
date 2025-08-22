class Account {
  public owner: string;
  private balance: number;
  readonly accountId: string;

  constructor(owner: string, accountId: string) {
    this.owner = owner;
    this.accountId = accountId;
    this.balance = 0;
  }
}

// ? Exemplificando POO
class Wallet {
  constructor(private currentBalance: number) {}

  protected executeTransaction(value: number): number {
    const calc = this.currentBalance + value;
    if (calc < 0) return this.currentBalance;

    this.currentBalance = calc;
    return this.currentBalance;
  }

  public deposit(value: number): number {
    return this.executeTransaction(value);
  }

  public withdraw(value: number): number {
    const format = value < 0 ? value : value * -1;
    console.log('format', format)
    return this.executeTransaction(format);
  }
}

const transaction = new Wallet(40);
transaction.deposit(20);

console.log('transaction', transaction)

transaction.withdraw(50);
console.log('transaction', transaction)
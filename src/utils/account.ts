export interface Account {
  id: string;
  name: string;
  balance: number;
  accountNumber: string;
}

export function formatBalance(balance: number): string {
  return balance.toLocaleString("en-CA", {
    style: "currency",
    currency: "CAD",
  });
}

export type AccountTransaction = {
  id: string;
  date: string;
  description: string;
  amountCents: number;
};

export type AccountTransactionWithBalance = AccountTransaction & {
  balanceAfterCents: number;
};

const TRANSACTIONS_BY_ACCOUNT: Record<string, AccountTransaction[]> = {
  ac1: [
    {
      id: "checking-1",
      date: "Tuesday November 3, 2026",
      description: "TD VISA PREAUTH PYMT",
      amountCents: -4363,
    },
    {
      id: "checking-2",
      date: "Monday November 2, 2026",
      description: "SEND E-TFR ***3aG",
      amountCents: -377,
    },
    {
      id: "checking-3",
      date: "Monday November 2, 2026",
      description: "TD MHA PPP TFSA 9659",
      amountCents: -5000,
    },
    {
      id: "checking-4",
      date: "Friday October 30, 2026",
      description: "GROCERY STORE",
      amountCents: -8500,
    },
    {
      id: "checking-5",
      date: "Thursday October 29, 2026",
      description: "PAYROLL DEPOSIT",
      amountCents: 250000,
    },
    {
      id: "checking-6",
      date: "Wednesday October 28, 2026",
      description: "COFFEE SHOP",
      amountCents: -1299,
    },
    {
      id: "checking-7",
      date: "Tuesday October 27, 2026",
      description: "E-TRANSFER FROM ALEX",
      amountCents: 7500,
    },
    {
      id: "checking-8",
      date: "Monday October 26, 2026",
      description: "MONTHLY ACCOUNT FEE",
      amountCents: -1600,
    },
  ],
  ac2: [
    {
      id: "savings-1",
      date: "Tuesday November 3, 2026",
      description: "AUTOMATIC SAVINGS DEPOSIT",
      amountCents: 50000,
    },
    {
      id: "savings-2",
      date: "Monday November 2, 2026",
      description: "INTEREST CREDIT",
      amountCents: 525,
    },
    {
      id: "savings-3",
      date: "Sunday November 1, 2026",
      description: "PHONE BILL",
      amountCents: -8999,
    },
    {
      id: "savings-4",
      date: "Saturday October 31, 2026",
      description: "TRANSFER TO CHEQUING",
      amountCents: -25000,
    },
    {
      id: "savings-5",
      date: "Friday October 30, 2026",
      description: "INTEREST CREDIT",
      amountCents: 1525,
    },
    {
      id: "savings-6",
      date: "Wednesday October 28, 2026",
      description: "MOBILE DEPOSIT",
      amountCents: 150000,
    },
    {
      id: "savings-7",
      date: "Tuesday October 27, 2026",
      description: "SEND E-TFR ***8bQ",
      amountCents: -5000,
    },
    {
      id: "savings-8",
      date: "Sunday October 25, 2026",
      description: "TRANSFER FROM CHEQUING",
      amountCents: 50000,
    },
  ],
};

export function getAccountTransactions(
  accountId: string,
  endingBalance: number,
): AccountTransactionWithBalance[] {
  const transactions = TRANSACTIONS_BY_ACCOUNT[accountId] ?? [];
  let balanceAfterCents = Math.round(endingBalance * 100);

  return transactions.map((transaction) => {
    const transactionWithBalance = {
      ...transaction,
      balanceAfterCents,
    };
    balanceAfterCents -= transaction.amountCents;
    return transactionWithBalance;
  });
}

import type { Account } from "../utils/account";

export const ACCOUNTS: Account[] = [
  {
    id: "ac1",
    name: "TD STUDENT CHEQUING ACCOUNT",
    balance: 111111.11,
    accountNumber: "1111111111111111",
  },
  {
    id: "ac2",
    name: "TD EVERY DAY SAVINGS ACCOUNT",
    balance: 222222.22,
    accountNumber: "2222222222222222",
  },
  {
    id: "ac3",
    name: "TD CASH BACK VISA* CARD",
    balance: 33333.33,
    accountNumber: "3333333333333333",
  },
  {
    id: "ac4",
    name: "MULTI-HOLDING TFSA",
    balance: 444444.44,
    accountNumber: "4444444444444444",
  },
];

export const SECTIONS = [
  {
    id: "banking",
    name: "Banking",
    subtitle: "2 accounts",
    accountIds: ["ac1", "ac2"],
    showTotalBalance: true,
    collapsible: true,
  },
  { id: "cards", name: "Credit Cards", accountIds: ["ac3"] },
  { id: "investing", name: "Personal Investing", accountIds: ["ac4"] },
];

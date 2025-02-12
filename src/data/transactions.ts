import { TransactionType } from "@/types/transaction";

export const transactionList: TransactionType[] = [
  {
    id: 1,
    description: "Web Development",
    amount: 12000.0,
    variant: "income",
    category: "Work",
    createdAt: "2021-09-01T12:00:00.000Z",
  },
  {
    id: 2,
    description: "Hamburger",
    amount: 59.8,
    variant: "outcome",
    category: "Food",
    createdAt: "2021-09-02T12:00:00.000Z",
  },
  {
    id: 3,
    description: "Shoes",
    amount: 84.99,
    variant: "outcome",
    category: "Shopping",
    createdAt: "2021-09-03T12:00:00.000Z",
  },
  {
    id: 4,
    description: "Web Development",
    amount: 11800.2,
    variant: "income",
    category: "Work",
    createdAt: "2021-09-04T12:00:00.000Z",
  },
  {
    id: 5,
    description: "Freelance Design",
    amount: 200.0,
    variant: "income",
    category: "Freelance",
    createdAt: "2021-09-05T12:00:00.000Z",
  },
  {
    id: 6,
    description: "Groceries",
    amount: 120.0,
    variant: "outcome",
    category: "Food",
    createdAt: "2021-09-06T12:00:00.000Z",
  },
  {
    id: 7,
    description: "Electricity Bill",
    amount: 230.0,
    variant: "outcome",
    category: "Utilities",
    createdAt: "2021-09-07T12:00:00.000Z",
  },
  {
    id: 8,
    description: "Investment Return",
    amount: 1200.0,
    variant: "income",
    category: "Investment",
    createdAt: "2021-09-08T12:00:00.000Z",
  },
];

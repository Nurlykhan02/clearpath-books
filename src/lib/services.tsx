import { ReactNode } from "react";
import {
  IconLedger,
  IconBank,
  IconChart,
  IconReceipt,
  IconTaxForm,
  IconFileCheck,
} from "./icons";

export type Service = {
  no: string;
  title: string;
  desc: string;
  icon: ReactNode;
};

export const services: Service[] = [
  {
    no: "01",
    title: "Monthly Bookkeeping",
    desc: "Day-to-day transaction recording, categorization, and clean books you can trust every month.",
    icon: <IconLedger />,
  },
  {
    no: "02",
    title: "Bank Reconciliation",
    desc: "Every account matched, every discrepancy resolved — so you always know where your money stands.",
    icon: <IconBank />,
  },
  {
    no: "03",
    title: "Financial Reporting",
    desc: "Clear monthly P&L, balance sheet, and cash flow reports — the numbers you need to make decisions.",
    icon: <IconChart />,
  },
  {
    no: "04",
    title: "Accounts Payable & Receivable",
    desc: "Invoices tracked, bills paid on time, and receivables managed so nothing slips through the cracks.",
    icon: <IconReceipt />,
  },
  {
    no: "05",
    title: "Payroll & Tax Support",
    desc: "Payroll processing, quarterly tax estimates, and compliance so you stay ahead of deadlines.",
    icon: <IconTaxForm />,
  },
  {
    no: "06",
    title: "Tax-Ready Books",
    desc: "Year-end cleanup and organized records so your CPA can file accurately — without the scramble.",
    icon: <IconFileCheck />,
  },
];

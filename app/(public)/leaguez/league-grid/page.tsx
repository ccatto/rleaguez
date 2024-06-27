
import { Payment, columns } from "./columns";
import { DataTableCatto } from "../../../../components/ui/data-table-catto";
import React from "react";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d42",
      amount: 125,
      status: "processing",
      email: "example@gmail.com",
    },
    {
      id: "728ed52f1",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d422",
      amount: 125,
      status: "processing",
      email: "example@gmail.com",
    },
    {
      id: "728ed52f3",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d424",
      amount: 125,
      status: "processing",
      email: "example@gmail.com",
    },
    {
      id: "728ed52f5",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d426",
      amount: 125,
      status: "processing",
      email: "example@gmail.com",
    },
    {
      id: "728ed52f7",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d428",
      amount: 125,
      status: "processing",
      email: "Abbyexample@gmail.com",
    },
    {
      id: "728ed52f9",
      amount: 100,
      status: "pending",
      email: "SKm@example.com",
    },
    {
      id: "489e1d4299",
      amount: 125,
      status: "processing",
      email: "Samexample@gmail.com",
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTableCatto columns={columns} data={data} />
    </div>
  )
}

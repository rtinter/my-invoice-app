import {CirclePlus} from 'lucide-react';
import {Button} from "@/components/ui/button"
import Link from "next/link";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Home() {
  return (
      <main className="flex flex-col min-h-screen gap-6 max-w-5xl mx-auto my-12">
        <div className="flex justify-between items-end">
          <h1 className="text-4xl font-semibold top-py">Dashboard</h1>
          <Button variant="ghost" className={"flex gap-3 items-center"}>
            Create Invoice
            <CirclePlus className="w-8 h-8"/>
          </Button>
        </div>
        <Table>
          <TableCaption>Liste der letzten Rechnungen</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="py-4">
                Datum
              </TableHead>
              <TableHead className="py-4">
                Kunde
              </TableHead>
              <TableHead className="py-4">
                Email
              </TableHead>
              <TableHead className="text-left py-4">
                Status
              </TableHead>
              <TableHead className="text-right py-4">
                Summe
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-left">
                <span className={"font-semibold"}>
                  10/10/2014
                </span>
              </TableCell>
              <TableCell className="text-left">
                <span className={"font-semibold"}>
                  Max Mustermann
                </span>
              </TableCell>
              <TableCell className="text-left">
                <span>
                  Mustermann@gmail.com
                </span>
              </TableCell>
              <TableCell className="text-left">
                <span className={"font-semibold text-green-600"}>
                  bezahlt
                </span>
              </TableCell>
              <TableCell className="text-right">
                <span className={"font-semibold"}>
                  $250.00
                </span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>


        <div>
          <Button asChild>
            <Link href="/">Home</Link>
          </Button>
        </div>
      </main>
  );
}

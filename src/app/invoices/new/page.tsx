import {Button} from "@/components/ui/button"
import {Label} from "@/components/ui/label"
import {Textarea} from "@/components/ui/textarea"
import {Input} from "@/components/ui/input"

import Link from "next/link";

export default function Home() {
  return (
      <main className="flex flex-col min-h-screen gap-3 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mt-20 mb-5">Rechnung erstellen</h1>

        <form className="flex flex-col gap-4 max-w-xs">
          <Label htmlFor="name" className="font-semibold">Adressat</Label>
          <Input id="name" type="text"/>

          <Label htmlFor="email" className="font-semibold">Email Adresse</Label>
          <Input id="email" type="email"/>

          <Label htmlFor="value" className="font-semibold">Summe in Euro</Label>
          <Input id="value" type="number"/>

          <Label htmlFor="description" className="font-semibold">Beschreibung</Label>
          <Textarea id="description"/>


          <Button className={"font-semibold mt-3"}>
            Erstellen
          </Button>

        </form>

        <div>
          <Button asChild>
            <Link href="/dashboard">Zum Dashboard</Link>
          </Button>
        </div>
      </main>
  );
}

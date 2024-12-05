
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Home() {
  return (
      <main className="flex flex-col min-h-screen gap-6 max-w-5xl mx-auto justify-center text-center">
        <h1 className="text-5xl font-bold">Rechnungen</h1>
        <p>
      <Button asChild>
          <Link href="/dashboard">Einloggen</Link>
        </Button>
          </p>
      </main>
  );
}

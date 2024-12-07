import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Home() {
  return (
      <main className="flex flex-col min-h-screen gap-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mt-20">Rechnung erstellen</h1>

        <label htmlFor="name"></label>
        
        <div>
          <Button asChild>
            <Link href="/dashboard">Zum Dashboard</Link>
          </Button>
        </div>
      </main>
  );
}

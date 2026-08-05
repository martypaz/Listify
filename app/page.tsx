import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-24">
      <main className="flex w-full max-w-2xl flex-col items-start gap-6">
        <h1 className="text-4xl font-semibold tracking-tight">Listify</h1>
        <p className="text-muted-foreground text-lg">
          Listing management for Etsy sellers.
        </p>
        <Link href="/dashboard" className={buttonVariants({ size: "lg" })}>
          Open dashboard
        </Link>
      </main>
    </div>
  );
}

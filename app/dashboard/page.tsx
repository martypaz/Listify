import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const navItems = [
  { label: "Overview", href: "/dashboard" },
  { label: "Listings", href: "/dashboard" },
  { label: "Research", href: "/dashboard" },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-1">
      <aside className="bg-muted/30 hidden w-56 shrink-0 border-r p-4 sm:block">
        <Link href="/" className="px-2 text-base font-semibold tracking-tight">
          Listify
        </Link>
        <nav className="mt-6 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-md px-2 py-1.5 text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="flex h-14 shrink-0 items-center border-b px-6">
          <h1 className="text-sm font-medium">Overview</h1>
        </header>

        <main className="flex-1 p-6">
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>No shop connected yet</CardTitle>
              <CardDescription>
                Connect an Etsy shop to pull in your listings.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-start gap-2">
              <Button disabled>Connect Etsy shop</Button>
              <p className="text-muted-foreground text-xs">
                Connecting a shop arrives in a later change.
              </p>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}

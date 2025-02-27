import Link from "next/link";
import Headers from "@/components/header";

export default function Home() {
  return (
    <main>
      <Headers />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/about">Go About</Link>
      </p>
    </main>
  );
}

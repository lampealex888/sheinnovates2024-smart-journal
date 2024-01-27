import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Main page content</h1>
      <Link href="/profile">Profile</Link>
    </main>
  );
}

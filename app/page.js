import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>CPRG306: Web Development 2 - Assignments</h1>
      <Link href="/week-2">week-2</Link><br></br>
      <Link href="/week-3">week-3</Link><br></br>
      <Link href="/week-4">week-4</Link>|<br></br>
      <Link href="/week-5">week-5</Link>
    </main>
  );
}
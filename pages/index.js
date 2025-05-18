import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>Scrub the Babble</h1>
      <p>Compliance Software for Real Estate Listings</p>
      <Link href="/dashboard">
        <button style={{ marginTop: 20 }}>Go to Dashboard</button>
      </Link>
    </div>
  );
}

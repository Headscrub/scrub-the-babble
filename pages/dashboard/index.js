import { useState } from 'react';

export default function Dashboard() {
  const [listings, setListings] = useState([]);
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState('active');

  const submitListing = async () => {
    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url, status })
    });
    const data = await res.json();
    setListings([...listings, data]);
    setUrl('');
  };

  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h2>Listing Compliance Dashboard</h2>
      <div style={{ marginBottom: 20 }}>
        <input
          placeholder="Listing URL"
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
        <select value={status} onChange={e => setStatus(e.target.value)}>
          <option value="active">Active</option>
          <option value="expired">Expired</option>
        </select>
        <button onClick={submitListing}>Submit</button>
      </div>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>URL</th>
            <th>Status</th>
            <th>Compliance</th>
          </tr>
        </thead>
        <tbody>
          {listings.map((listing, index) => (
            <tr key={index}>
              <td>{listing.url}</td>
              <td>{listing.status}</td>
              <td>{listing.status === 'expired' ? 'Non-Compliant ❌' : 'Compliant ✅'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

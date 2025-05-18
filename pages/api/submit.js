export default function handler(req, res) {
  if (req.method === 'POST') {
    const { url, status } = req.body;
    res.status(200).json({ url, status });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}

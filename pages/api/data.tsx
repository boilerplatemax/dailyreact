import { NextApiRequest, NextApiResponse } from 'next';
import db from 'data/db.json'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    try {
        
        res.status(200).json({ message: 'Hello from Next.js!' })
    } catch (err:any) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader('Allow', 'GET');
    res.status(405).end('Method Not Allowed');
  }
}


import { NextApiRequest, NextApiResponse } from 'next';
const url = 'https://oauth.reddit.com/api/v1/me';
const username = 'bhWkh50RKySNzRh_aqNMHQ';
const password = '3e6M7L4tDh0zUv0DfI1pBRcgcVGSeA';

let resp = '';

export default async function info(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      fetch(url, {
        method: 'GET',
        headers: {
          'User-Agent': 'Tutorial2/0.0.123',
          Authorization: 'Bearer ' + '-8zdyfRKtdSP8CKRNk_J8qAu36mDv5Q'
        }
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          resp = data;
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      res.status(200).json({ message: resp });
    } catch (err: any) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

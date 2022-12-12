import { NextApiRequest, NextApiResponse } from 'next';
const url =
  'https://www.reddit.com/api/v1/access_token?&grant_type=client_credentials&device_id=12345dfh6dfsssdsgns4ghth5hrdb&code=vVm44RNGA8TYrLePUSWA8r3XORM0Aw#_';
const username = 'bhWkh50RKySNzRh_aqNMHQ';
const password = '3e6M7L4tDh0zUv0DfI1pBRcgcVGSeA';
const code = 'zXJsIdbEVO7LmXz6QQA1HT0FD387iQ#_';
let token: any = '';
export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      fetch(url, {
        method: 'POST',

        headers: {
          'User-Agent': 'Tutorial2/0.0.1',
          Authorization: 'Basic ' + btoa(username + ':' + password)
        }
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          token = data;
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      res.status(200).json({ message: token });
    } catch (err: any) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

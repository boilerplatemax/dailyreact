import { NextApiRequest, NextApiResponse } from 'next';
const fs = require('fs');
let db =require('data/db.json');

let temp:Object = db

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    try {
        res.status(200).json({ message: temp })
        
    } catch (err:any) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  }
  else if (req.method === 'POST') {
    try {
      const { authorization } = req.headers;

      if (authorization === `Bearer ${process.env.API_SECRET_KEY}`) {
        
        res.status(200).json({ success: true });
        temp=Math.random()
        const output = {message:temp}
        fs.writeFileSync('data/db.json', JSON.stringify(output, null, 4));
      } else {
        res.status(401).json({ success: false });
      }
    } catch (err:any) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
  
}



// import { NextApiResponse, NextApiRequest } from "next";
// const twillio = require('twilio');
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const myCellPhoneNumber = process.env.MY_NUMBER;
// const superSecretAPIKey = 'ABCD1234';

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//     const client = twillio(accountSid, authToken);
//     const auth = req.headers.authorization;
//     if (auth === superSecretAPIKey) {
//         await client.messages
//             .create({
//                 body: `\n
// 						Create your todo list the night before with categories: 
// 						\n- Work 
// 						\n- Health 
// 						\n- Relationships 
// 						\n- Self Improvement 
// 						\n 
// 						\n Get better every day: https://jamesclear.com/continuous-improvement`,
//                 from: '+12694754126', // my twilio testing number
//                 to: `+1${myCellPhoneNumber}`
//             })
//             .then((message: String) => res.json(message), (err: Error) => res.json(err));
//     } else {
//         return res.status(401).end();
//     }
// }
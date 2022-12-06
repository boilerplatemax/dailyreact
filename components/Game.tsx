import React,{useEffect, useState} from 'react'

import { getMessage, setMessage } from 'utils/supabase-client';
import axios from 'axios'


const qs = require('querystring');

const main = async function () {



    /*
        all four of these veriables below should be kept secure
    */
    // client id and secret come from making a 'script' app at this site https://www.reddit.com/prefs/apps
    const clientId:any = 'bhWkh50RKySNzRh_aqNMHQ'
    const clientSecret:any = '3e6M7L4tDh0zUv0DfI1pBRcgcVGSeA'


    const resp = await axios
        .post('https://www.reddit.com/api/v1/access_token?device_id=apdktj58gufjcdfgggggggggd&grant_type=client_credentials',{
            withCredentials: false,
            header:{
                "Access-Control-Allow-Origin": "*",
                "Authorization": {
                Username:clientId,
                Password:clientSecret
            },},

    })
    .then((res)=>{
        console.log(res)
    })
        .catch(function (err) { throw err })
    
    console.log('response.data:')
    console.log(resp)
}

export default function Game () {
  const [ toDos, setToDos ] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    

    useEffect(() => {
            main()
            getMessage().then(res=>setToDos(res))

    }, [])
    if (isLoading) {
        return <p>Loading....</p>
    }
    if (!toDos) {
        return <p>No List to show</p>
    }
    return (
        <div className='text-black'>
<a href="https://www.reddit.com/api/v1/authorize?client_id=bhWkh50RKySNzRh_aqNMHQ&amp;response_type=code&amp;state=55hd0bnwi2349grsndj4mtls23b&amp;redirect_uri=https://saas-hazel.vercel.app/&amp;duration=permanent&amp;scope=identity submit edit read mysubreddits flair privatemessages">Start Free</a>
            {/* <br/>
          {JSON.stringify(toDos)} */}
        </div>
    )
}

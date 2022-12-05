import React,{useEffect, useState} from 'react'
import { getMessage, setMessage } from 'utils/supabase-client';


export default function Game () {
  const [ toDos, setToDos ] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    

    useEffect(() => {
        // setIsLoading(true)
        // fetch('/api/cron')
        //     .then(response => response.json())
        //     .then(data => {
        //         setToDos(data)
        //         setIsLoading(false)
        //     })
        //     console.log(getMessage())
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
            {/* <button onClick={()=>setMessage('123456')}>send message</button> */}
            <br/>
          {JSON.stringify(toDos)}
        </div>
    )
}

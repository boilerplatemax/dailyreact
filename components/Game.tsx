import React,{useEffect, useState} from 'react'
import axios from 'axios'


export default function Game () {
  const [ toDos, setToDos ] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        fetch('/api/cron')
            .then(response => response.json())
            .then(data => {
                setToDos(data)
                setIsLoading(false)
            })
    }, [])
    if (isLoading) {
        return <p>Loading....</p>
    }
    if (!toDos) {
        return <p>No List to show</p>
    }
    return (
        <div className='text-black'>

            <br/>
          {JSON.stringify(toDos)}
        </div>
    )
}

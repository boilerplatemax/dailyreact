import React,{useEffect, useState} from 'react'
import handler from '../pages/api/cron'


export default function Game () {
  const [ toDos, setToDos ] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        fetch('https://api.agify.io/?name=max')
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

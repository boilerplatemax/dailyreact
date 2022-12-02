import React,{useEffect} from 'react'
import axios from 'axios'
type Props = {}

export default function Game () {
  // useEffect(()=>{
  // axios.get('https://www.jailbase.com/api/1/search/?source_id=az-mcso&last_name=pham')
  // .then(res=>{
  //   console.log(res)
  // })
  // .catch()
  // },[])
  const fetchList = async ()=>{
    try{
      const {data} = await axios('https://www.jailbase.com/api/1/search/?source_id=az-mcso&last_name=pham',{
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
      },
      withCredentials: true
      });
      console.log(data)
    }
    catch(error:any){
      console.log(error.response)
    }
  }
  fetchList()
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex flex-col sm:align-center bg-zinc-100 p-6 h-screen items-center">
            
          </div>
    </section>
  )
}

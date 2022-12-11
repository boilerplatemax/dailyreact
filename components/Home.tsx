import React,{useEffect, useState, useRef} from 'react'

import { useRouter } from 'next/router';
import { getMessage, setMessage } from 'utils/supabase-client';
import axios from 'axios'
import Button from 'components/ui/Button/Button'
import { FaArrowLeft as Left, FaArrowRight as Right, FaStar as Star} from "react-icons/fa";
import ArrowBtn from 'components/ui/ArrowBtn/Button'
import Image from 'next/image';
import website1 from 'assets/images/website1.jpg'

export default function Home () {
  const container:any = useRef(null);
  const scrollLeft = () =>{
  container.current.scrollLeft-=424;
  console.log('left')
  }
  const scrollRight = () =>{
    container.current.scrollLeft+=424;
    }
  const [ message, setMessage ] = useState([])
  const router = useRouter();
    const [isLoading, setIsLoading] = useState(false)
    const getAuth= () => {
        axios.get('/api/auth')
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    
    useEffect(() => {
        getMessage().then(res=>setMessage(res))
    }, [])
    if (isLoading) {
        return <p>Loading....</p>
    }
    if (!message) {
        return <p>No List to show</p>
    }
    return (
        <section className=' p-8 overflow-x-hidden'>
        <div className='text-dark grid lg:grid-cols-12 grid-cols-1 gap-4 mb-8'>
            <div className='lg:h-4/5 h-auto col-span-4'>
            <div className='flex flex-col text-light font-black' style={{fontSize:'5rem'}}>
                <span className='-mb-12 animate-fadein1'>WEB</span>
                <span className='-mb-12 px-36 animate-fadein2'>DEV</span>
                <span className='animate-fadein3'>PROS</span>
            </div>
            <div className='text-light'>
            {/* <hr className=''/> */}
            <h2 className='text-light text-md tracking-widest font-thin'>Web, Design & Branding all in one place</h2>
            </div>
            </div>

            <div className='lg:h-4/5 h-auto col-span-8'>
                <div>
                    <div className="relative h-0 pb-fluid-video animate-fadein3">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="//player.vimeo.com/video/397846835?title=0&portrait=0&byline=0&autoplay=1&muted=true&controls=0&loop=true"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                        allowFullScreen
                    ></iframe>
                    </div>
                </div>
            </div>

            

        </div>
        {/* Our Work */}


        {/* Our Work */}
        <div className='w-full mb-12'>
            <div className="grid md:grid-cols-12 grid-cols-1 gap-4">
                <div className='col-span-4'>
                    
                    <ArrowBtn>
                        View Work
                    </ArrowBtn>

                    <p className='mt-5'>Our agencies specializes in so and so...</p>

                </div>
        <div className='col-span-8 -mr-8 relative'>
          <div className="flex flex-col bg-transparent m-auto p-auto mr-5">
          <h1
            className="flex mb-5 text-xl font-black"
          >
            PORTFOLIO
          </h1>

          <div
            className="flex overflow-x-scroll pb-4 -mr-10 scroll-smooth"
            ref={container}
          >
            <div
              className="flex flex-nowrap"
            >
              <div className="inline-block mr-2 h-auto">
                <div>
                  <Image src={website1} sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"/>
                </div>
                <div
                className="p-4 overflow-hidden rounded-lg shadow-md bg-transparent hover:shadow-xl transition-shadow duration-300 ease-in-out home__project relative"
                >
                  hello
                <ArrowBtn className='absolute bottom-2 right-2' variant='dark'>
                          visit site
                </ArrowBtn>
                </div>
              </div>
            </div>

          <div className="inline-block px-2 h-auto">
                <div>
                  <Image src={website1} sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"/>
                </div>
                <div
                className="p-4 overflow-hidden rounded-lg shadow-md bg-transparent hover:shadow-xl transition-shadow duration-300 ease-in-out home__project relative"
                >
                  hello
                <ArrowBtn className='absolute bottom-2 right-2' variant='dark'>
                          visit site
                </ArrowBtn>
                </div>
              </div>
          </div>
      </div>
    </div>
  </div>
</div>
{/* Testimonials */}
<div className='grid md:grid-cols-3 grid-cols-1 gap-x-12 gap-y-12'>
      
      <div className=' h-auto bg-offwhite flex flex-col rounded-lg py-4 items-center px-4'>
      <h2 className='text-center text-black text-lg mb-3 px-4'>"Wow, these guys are really damn great. wow oh wow. so good!"</h2>
        <div className='grid grid-cols-5 gap-x-2 w-full max-w-xs'>
          {[1,2,3,4,5].map(()=>{return(<Star className='text-dark text-xl'/>)}) }
        </div>
      </div>
      <div className=' h-auto bg-offwhite flex flex-col rounded-lg py-4 xl:px-32 md:px-12 px-24'>
      <h2 className='text-center text-black text-lg mb-3'>"Wow, these guys are really damn great. wow oh wow. so good!"</h2>
        <div className='grid grid-cols-5 gap-x-1 w-100 w-full'>
          {[1,2,3,4,5].map(()=>{return(<Star className='text-dark text-xl'/>)}) }
        </div>
      </div>
      <div className=' h-auto bg-offwhite flex flex-col rounded-lg py-4 xl:px-32 md:px-12 px-24'>
      <h2 className='text-center text-black text-lg mb-3'>"Wow, these guys are really damn great. wow oh wow. so good!"</h2>
        <div className='grid grid-cols-5 gap-x-2 w-100 w-full'>
          {[1,2,3,4,5].map(()=>{return(<Star className='text-dark text-xl'/>)}) }
        </div>
      </div>
</div>
</section>
    )
}

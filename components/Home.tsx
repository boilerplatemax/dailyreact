import React,{useEffect, useState, useRef} from 'react'

import { useRouter } from 'next/router';
import { getMessage, setMessage } from 'utils/supabase-client';
import axios from 'axios'
import Button from 'components/ui/Button/Button'
import { FaArrowLeft as Left, FaArrowRight as Right } from "react-icons/fa";
import ArrowBtn from 'components/ui/ArrowBtn/Button'

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
                <span className='-mb-16'>WEB</span>
                <span className='-mb-16 px-36'>DEV</span>
                <span className=''>PROS</span>
            </div>
            <div className='text-light mt-8 sm:mt-0'>
            <hr className=''/>
            <h2 className='text-light text-xl'>Web, Design & Branding all in one place</h2>
            </div>
            </div>

            <div className='lg:h-4/5 h-auto col-span-8'>
                <div>
                    <div className="relative h-0 pb-fluid-video">
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
        <div className='w-full'>

        </div>

        {/* Our Work */}
        <div className='w-full'>
            <div className="grid md:grid-cols-12 grid-cols-1 gap-4">
                <div className='col-span-4'>
                    
                    <ArrowBtn>
                        View Work
                    </ArrowBtn>

                    <p className='mt-2'>Our agencies specializes in so and so...</p>

                </div>
        <div className='col-span-8 -mr-8 relative'>
          <div className="flex flex-col bg-transparent m-auto p-auto  mr-5">
          <h1
            className="flex mb-5 text-xl font-black"
          >
            PORTFOLIO
          </h1>
          <div
            className="flex overflow-x-scroll pb-10 -mr-10 hide-scroll-bar scroll-smooth"
            ref={container}
          >
          <div
            className="flex flex-nowrap"
          >
          <div className="inline-block mr-3">
            <div
              className="h-96  overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out home__project relative"
            >
              hello
              <ArrowBtn className='absolute bottom-5 right-5' variant='dark'>
                        View Work
              </ArrowBtn>
            </div>
          </div>
          <div className="inline-block px-3">
            <div
              className="h-96  overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out home__project relative"
            >
              bye
              <ArrowBtn className='absolute bottom-5 right-5' variant='dark'>
                        View Work
              </ArrowBtn></div>
          </div>
          <div className="inline-block px-3">
            <div
              className="h-96  overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out home__project relative"
            >
              <ArrowBtn className='absolute bottom-5 right-5' variant='dark'>
                        View Work
              </ArrowBtn></div>
          </div>
          <div className="inline-block px-3">
            <div
              className="h-96  overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out home__project relative"
            >
              <ArrowBtn className='absolute bottom-5 right-5' variant='dark'>
                        View Work
              </ArrowBtn></div>
          </div>
          <div className="inline-block px-3">
            <div
              className="h-96  overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out home__project relative"
            >
              <ArrowBtn className='absolute bottom-5 right-5' variant='dark'>
                        View Work
              </ArrowBtn></div>
          </div>
          <div className="inline-block px-3">
            <div
              className="h-96  overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out home__project relative"
            >
              <ArrowBtn className='absolute bottom-5 right-5' variant='dark'>
                        View Work
              </ArrowBtn></div>
          </div>
          <div className="inline-block px-3">
            <div
              className="h-96  overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out home__project relative"
            >
              <ArrowBtn className='absolute bottom-5 right-5' variant='dark'>
                        View Work
              </ArrowBtn></div>
          </div>
          <div className="inline-block px-3">
            <div
              className="h-96 mr-10 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out home__project relative"
            >
              <ArrowBtn className='absolute bottom-5 right-5' variant='dark'>
                        View Work
              </ArrowBtn></div>
          </div>
          
        </div>
        <button onClick={scrollLeft} type="button" className='absolute z-10 text-black top-1/2 left-0 ring-0 bg-offwhite rounded-full p-2 no-ring'><Left/></button>
        <button onClick={scrollRight} type="button" className='absolute z-10 text-black right-6 top-1/2 ring-0 bg-offwhite rounded-full p-2 no-ring'><Right/></button>
      </div>

</div>

                </div>
        </div>
        
        </div>
        
    </section>
    )
}

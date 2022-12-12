import React, { useEffect, useState, useRef } from 'react';

import { useRouter } from 'next/router';
import { getMessage, setMessage } from 'utils/supabase-client';
import axios from 'axios';
import Button from 'components/ui/Button/Button';
import {
  FaArrowLeft as Left,
  FaArrowRight as Right,
  FaStar as Star
} from 'react-icons/fa';
import ArrowBtn from 'components/ui/ArrowBtn/Button';
import Image from 'next/image';
import website1 from 'assets/images/website1.jpg';
import website2 from 'assets/images/website2.png';

import demo1 from 'assets/images/demo.jpg';
import demo2 from 'assets/images/demo2.jpg';
import demo3 from 'assets/images/demo3.jpg';

export default function Home() {
  const container: any = useRef(null);
  const scrollLeft = () => {
    container.current.scrollLeft -= 424;
    console.log('left');
  };
  const scrollRight = () => {
    container.current.scrollLeft += 424;
  };
  const [message, setMessage] = useState([]);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const getAuth = () => {
    axios
      .get('/api/auth')
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMessage().then((res) => setMessage(res));
  }, []);
  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (!message) {
    return <p>No List to show</p>;
  }
  return (
    <section className='overflow-x-hidden '>
    <div className=" p-8 bg-palette-dark text-white">
      <div className="text-dark grid lg:grid-cols-12 grid-cols-1 gap-4 mb-32">
        <div className="lg:h-4/5 h-auto col-span-4">
          <div
            className="flex flex-col text-palette-paleblue font-black"
            style={{ fontSize: '5rem' }}
          >
            <span className="-mb-12 animate-fadein1">WEB</span>
            <span className="-mb-12 px-36 animate-fadein2">DEV</span>
            <span className="animate-fadein3">PROS</span>
          </div>
          <div className="text-palette-paleblue">
            {/* <hr className=''/> */}
            <h2 className="text-palette-paleblue text-md tracking-widest font-thin">
              Web, Design & Branding all in one place
            </h2>
            
            <div className="mt-5">
            <ArrowBtn>View Work</ArrowBtn>

          </div>

          </div>
        </div>

        <div className="lg:h-4/5 h-auto col-span-8">
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
      <div className="w-full mb-48">
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-4 lg:ml-64">
          {/* <div className="col-span-3 px-2 border border-palette-light rounded-lg h-32">
            <h2 className=' font-extrabold text-white uppercase text-xl'>What we offer</h2>
            <ul className='text-md'>
              <li>
                Web service 
              </li>
              <li>
                Get you page seen by thousands of new users on google
              </li>
              <li>
                
              </li>
            </ul>
            <ArrowBtn>View Work</ArrowBtn>

            <p className="mt-5 mb-32">Our agencies specializes in so and so...</p>
            
          </div> */}
          <div className="col-span-12 -mr-8 relative">
            <div className="flex flex-col bg-transparent m-auto p-auto mr-5">
              <h1 className="flex mb-5 text-md font-extralight px-2">PORTFOLIO</h1>
              {/* -mr-10 */}
              <div
                className="flex overflow-x-scroll pb-4 h-full scroll-box"
                ref={container}
              >
                <div className="flex flex-nowrap">
                <div className="inline-block px-2 h-auto ">
                  <div>
                    <Image
                      src={demo1}
                      width={400}
                      height={300}
                      objectFit='cover'
                      className='rounded-lg'
                    />
                  </div>
                  <div className="p-4 overflow-hidden bg-transparent hover:shadow-xl transition-shadow duration-300 ease-in-out home__project relative">
                    <h2 className='text-2xl font-bold '>Website Title</h2>
                    <p>
                      A little bit about the website. blah blah blah and Lorem Ipsum.
                    </p>
                    <ArrowBtn
                      className="float-right"

                    >
                      visit site
                    </ArrowBtn>
                  </div>
                </div>
                <div className="inline-block px-2 h-auto ">
                  <div>
                    <Image
                      src={demo2}
                      width={400}
                      height={300}
                      objectFit='cover'
                      className='rounded-lg'
                    />
                  </div>
                  <div className="p-4 overflow-hidden bg-transparent hover:shadow-xl transition-shadow duration-300 ease-in-out home__project relative">
                    <h2 className='text-2xl font-bold '>Website Title</h2>
                    <p>
                      A little bit about the website. blah blah blah and Lorem Ipsum.
                    </p>
                    <ArrowBtn
                      className="float-right"

                    >
                      visit site
                    </ArrowBtn>
                  </div>
                </div>
                <div className="inline-block px-2 h-auto ">
                  <div>
                    <Image
                      src={demo3}
                      width={400}
                      height={300}
                      objectFit='cover'
                      className='rounded-lg'
                    />
                  </div>
                  <div className="p-4 overflow-hidden bg-transparent hover:shadow-xl transition-shadow duration-300 ease-in-out home__project relative">
                    <h2 className='text-2xl font-bold '>Website Title</h2>
                    <p>
                      A little bit about the website. blah blah blah and Lorem Ipsum.
                    </p>
                    <ArrowBtn
                      className="float-right"
                      

                    >
                      visit site
                    </ArrowBtn>
                  </div>
                </div>

                <div className="inline-block px-2 h-auto ">
                  <div>
                    <Image
                      src={demo3}
                      width={400}
                      height={300}
                      objectFit='cover'
                      className='rounded-lg'
                    />
                  </div>
                  <div className="p-4 overflow-hidden bg-transparent hover:shadow-xl transition-shadow duration-300 ease-in-out home__project relative">
                    <h2 className='text-2xl font-bold '>Website Title</h2>
                    <p>
                      A little bit about the website. blah blah blah and Lorem Ipsum.
                    </p>
                    <ArrowBtn
                      className="float-right"
                      

                    >
                      visit site
                    </ArrowBtn>
                  </div>
                </div>

                <div className="inline-block px-2 h-auto ">
                  <div>
                    <Image
                      src={demo3}
                      width={400}
                      height={300}
                      objectFit='cover'
                      className='rounded-lg'
                    />
                  </div>
                  <div className="p-4 overflow-hidden bg-transparent hover:shadow-xl transition-shadow duration-300 ease-in-out home__project relative">
                    <h2 className='text-2xl font-bold '>Website Title</h2>
                    <p>
                      A little bit about the website. blah blah blah and Lorem Ipsum.
                    </p>
                    <ArrowBtn
                      className="float-right"
                      

                    >
                      visit site
                    </ArrowBtn>
                  </div>
                </div>

                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      {/* <div className="grid md:grid-cols-3 grid-cols-1 gap-x-12 gap-y-12">
        <div className=" h-auto bg-offwhite flex flex-col rounded-lg py-4 items-center px-4">
          <h2 className="text-center text-black text-lg mb-3 px-4">
            "Wow, these guys are really damn great. wow oh wow. so good!"
          </h2>
          <div className="grid grid-cols-5 gap-x-2 w-full max-w-xs">
            {[1, 2, 3, 4, 5].map(() => {
              return <Star className="text-dark text-xl" />;
            })}
          </div>
        </div>
      </div> */}


      {/* What we do */}

    </div>

    <div className='bg-palette-main text-white p-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:ml-64'>

          <div>
              <h2 className='text-4xl font-extrabold w-3/4 col-span-2'>The difference</h2>
                <p className=' mb-4 lg:mb-32 text-lg'>
                  Lorem Ipsum Lorem Lorem Ipsum Lorem Ipsum lore Ipsum Lorem Ipsum Lorem Ipsum lore Ipsum lore Ipsum Lorem Ipsum.
                  Lorem Ipsum Lorem Ipsum lore Lorem Ipsum Lorem Ipsum lore Ipsum
                </p>
          </div>
          <div>

        </div>
        </div>
      </div>

      <div className='bg-white text-palette-main p-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:mr-64'>
          <div>

          </div>
          <div>
              <h2 className='text-4xl font-extrabold w-3/4 col-span-2'>The difference</h2>
                <p className=' mb-4 lg:mb-32 text-lg'>
                  Lorem Ipsum Lorem Lorem Ipsum Lorem Ipsum lore Ipsum Lorem Ipsum Lorem Ipsum lore Ipsum lore Ipsum Lorem Ipsum.
                  Lorem Ipsum Lorem Ipsum lore Lorem Ipsum Lorem Ipsum lore Ipsum
                </p>
          </div>
        </div>
      </div>

      
      
    </section>
  );
}

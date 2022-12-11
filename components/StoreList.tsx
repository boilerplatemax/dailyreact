import React from 'react'
import Link from 'next/link';
import s from '../components/ui/Navbar/Navbar.module.css';
import { User } from '@supabase/supabase-js';
import { useUser } from 'utils/useUser';
import Button from 'components/ui/Button';
type Store = {
  stores:any;
};
const Store=(props:any)=>{
  return(
    <>
          <div
                className={(
                  'rounded-lg shadow-sm divide-y divide-zinc-600 bg-indigo-600 sm:mb-8 md:mb-12 lg:mb-16 mb-4'
                )}
              >
                <div className="p-6">
                  <div className="flex flex-row justify-between">
                    <div>
                  <h2 className="text-2xl leading-6 font-semibold text-white">
                    {props?.store?.name}
                  </h2>
                  </div>
                  <div>
                  <Link href={`/store/${props.userId}`} passHref>
                <a className={s.link} rel="noopener noreferrer" target="_blank">Preview</a>
                </Link>
                  </div>

                </div>
                  <p className="mt-4 text-zinc-300">Access to blah and blah</p>
                  <p className="mt-8">
                  
                    <span className="text-base font-medium text-zinc-100">
                      
                    </span>
                  </p>

                </div>

              </div>

            </>
  )

}
const StoreList = ({ user }: { user: User }) => {
  const {subscription, userDetails } = useUser();
  const userId=userDetails?.id
  return (
    <div
    className="mt-12 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-2"
    >{userDetails?.storedata?.stores?.map((store)=>{
      return(
      <Store store={store} userId={userId}/>
      )
    })}
    </div>
  )
}
export default StoreList
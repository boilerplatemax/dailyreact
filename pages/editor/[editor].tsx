import { useState, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';
import { User } from '@supabase/supabase-js';

import { useUser } from 'utils/useUser';
import Button from '@/components/ui/Button';
import { updateUserName, updateStore } from 'utils/supabase-client';
import { withPageAuth } from '@supabase/auth-helpers-nextjs';

type Editor = {
  id:string;
};
export const getServerSideProps = withPageAuth({ redirectTo: '/signin' });
const configValue : string = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string)



const Editor = ({ user }: { user: User }) => {
  const {userDetails } = useUser();
  const [storeData,setStoreData]=useState(userDetails?.storedata?.stores[0])
  const allStores = userDetails?.storedata?.stores
  const router = useRouter();
  const store = {id:router?.query?.editor};
  const userId=userDetails?.id
  
    //this store does not exist
  if (userId!==store.id)
    return (
      <section className="flex justify-center height-screen-helper text-zinc-100 bg-indigo-500">
        <div className="max-w-lg mt-10">
            <h1 className='text-2xl'>Something went wrong</h1>
            <div>{userId?<p>You are not authorized to edit this storefront</p>:
            <p>Sign in</p>
            }</div>
            {console.log(userId, store.id)}

        </div>
      </section>
    );
    const changeHandler=(e:any)=>{
      const newObj={
        name:e.target.value,
        id:uuidv4()
      }
      setStoreData({...storeData,})
      }
  return (
    <div className="flex justify-center height-screen-helper text-zinc-900 bg-zinc-100">
        <div className="max-w-lg mt-10">
            <h1>Editing {userDetails?.storedata?.stores[0]}</h1>
            <form>
            <label>
              Name:
              <input type="text" name="name" onChange={e=>changeHandler(e)}/>
            </label>
            <Button onClick={()=>updateStore(user, [storeData])}>Save</Button>
          </form>
            
        </div>
      </div>
  );
};
// const func = (user:any) =>{
//   updateUserName(user, 'bob')
// }
export default Editor;

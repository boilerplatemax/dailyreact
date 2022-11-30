import { useRouter } from 'next/router';
import { User } from '@supabase/supabase-js';
import { useUser } from 'utils/useUser';
import { withPageAuth } from '@supabase/auth-helpers-nextjs';
import { createClient } from '@supabase/supabase-js'
type Editor = {
  id:string;
};
export const getServerSideProps = withPageAuth({ redirectTo: '/signin' });
const configValue : string = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string)
const supabase = createClient('https://rwwfhjyyozrcuicvdgih.supabase.co', configValue)

const func = async()=>{
  const { data, error } = await supabase
  .from('users')
  .update({
    storedata: {
      stores:[
        {name: 'Pet store site'},
        {name: 'skate shop site'}
      ]
    }
  })
  .eq('address->postcode', 90210)
  .select()
}

const Editor = ({ user }: { user: User }) => {
  const {userDetails } = useUser();
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

  return (
    <div className="flex justify-center height-screen-helper text-zinc-900 bg-zinc-100">
        <div className="max-w-lg mt-10">
            <h1>Editing {userDetails?.storedata?.stores[0]?.name}</h1>
            <button onClick={func}>press me</button>
        </div>
      </div>
  );
};

export default Editor;

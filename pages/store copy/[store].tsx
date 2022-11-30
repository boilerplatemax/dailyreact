import { useRouter } from 'next/router';

import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import LoadingDots from 'components/ui/LoadingDots';
type Store = {
  id:string;
};
const Store = () => {
  const router = useRouter();
  const store = {id:router?.query?.store};
  console.log('router',router)
  const user = useUser();
  const supabaseClient = useSupabaseClient();
    //this store does not exist
  if (false)
    return (
      <div className="flex justify-center height-screen-helper text-zinc-900 bg-zinc-100">
        <div className="flex flex-col justify-between max-w-lg p-3 m-auto w-80 rounded-lg border border-indigo-900">
            <h1>hello there fellow bitches</h1>

        </div>
      </div>
    );

  return (
    <div className="flex justify-center height-screen-helper text-zinc-900 bg-zinc-100">
        <div className="flex flex-col justify-between max-w-lg p-3 m-auto w-80 rounded-lg border border-indigo-900">
            <h1>hello there fellow bitches {store.id}</h1>

        </div>
      </div>
  );
};

export default Store;

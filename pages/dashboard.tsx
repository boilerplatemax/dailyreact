import React from 'react';
import { User } from '@supabase/supabase-js';
import { useUser } from 'utils/useUser';
import StoreList from '../components/StoreList';

import { withPageAuth } from '@supabase/auth-helpers-nextjs';

export const getServerSideProps = withPageAuth({ redirectTo: '/signin' });
const Dashboard = ({ user }: { user: User }) => {
  const { subscription, userDetails } = useUser();
  const userId = userDetails?.id;
  return (
    <section className="bg-indigo-500 mb-32">
      <div className="max-w-6xl mx-auto pt-8 sm:pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div>
          <StoreList user={user} />
        </div>
        <div className="flex flex-row justify-end">
          {subscription ? (
            <button
              type="button"
              className="text-white bg-indigo-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <span className="w-4 h-4 text-white flex items-center justify-center">
                +
              </span>
              <span className="sr-only">Icon description</span>
            </button>
          ) : (
            <>
              <button
                type="button"
                className=" font-medium rounded-full text-sm p-2.5 text-center items-center mr-2 bg-zinc-700"
              >
                <span className="w-4 h-4 text-white flex items-center justify-center  text-white">
                  +
                </span>
                <span className="sr-only">Icon description</span>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
export default Dashboard;

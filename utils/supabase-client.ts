import {
  createBrowserSupabaseClient,
  User
} from '@supabase/auth-helpers-nextjs';
import { ProductWithPrice, UserDetails } from 'types';
import type { Database } from 'types_db';

export const supabase = createBrowserSupabaseClient<Database>();

export const getActiveProductsWithPrices = async (): Promise<
  ProductWithPrice[]
> => {
  const { data, error } = await supabase
    .from('products')
    .select('*, prices(*)')
    .eq('active', true)
    .eq('prices.active', true)
    .order('metadata->index')
    .order('unit_amount', { foreignTable: 'prices' });

  if (error) {
    console.log(error.message);
    throw error;
  }
  // TODO: improve the typing here.
  return (data as any) || [];
};

export const updateUserName = async (user: User, name: string) => {
  await supabase
    .from('users')
    .update({
      full_name: name
    })
    .eq('id', user.id);
};

export const updateStore = async (user: User, newStores:Array<any>) => {
  await supabase
    .from('users')
    .update({
      storedata:{
        stores:newStores
      }
    })
    .eq('id', user.id);
};

export const getMessage = async () => {
  const { data, error } = await supabase
  .from('publicdata')
  .select()
  return (data as any);
};
export const setMessage = async (note:string) => {
  await supabase
    .from('publicdata')
    .update({
      description:note
    })
    .eq('id', 1)

};
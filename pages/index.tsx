import Pricing from 'components/Pricing';
import Home from '@/components/Home'
import { getActiveProductsWithPrices } from 'utils/supabase-client';
import { Product } from 'types';
import { GetStaticPropsResult } from 'next';

interface Props {
  products: Product[];
}

export default function PricingPage({ products }: Props) {
  return <Home/>;
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const products = await getActiveProductsWithPrices();

  return {
    props: {
      products
    },
    revalidate: 60
  };
}

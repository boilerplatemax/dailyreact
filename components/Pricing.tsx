import cn from 'classnames';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link'
import Button from 'components/ui/Button';
import { postData } from 'utils/helpers';
import { getStripe } from 'utils/stripe-client';
import { useUser } from 'utils/useUser';
import { Price, ProductWithPrice } from 'types';

interface Props {
  products: ProductWithPrice[];
}

type BillingInterval = 'year' | 'month';

export default function Pricing({ products }: Props) {
  const router = useRouter();
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>('month');
  const [priceIdLoading, setPriceIdLoading] = useState<string>();
  const { user, isLoading, subscription } = useUser();

  const handleCheckout = async (price: Price) => {
    setPriceIdLoading(price.id);
    if (!user) {
      return router.push('/signin');
    }
    if (subscription) {
      return router.push('/account');
    }

    try {
      const { sessionId } = await postData({
        url: '/api/create-checkout-session',
        data: { price }
      });

      const stripe = await getStripe();
      stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      return alert((error as Error)?.message);
    } finally {
      setPriceIdLoading(undefined);
    }
  };

  if (!products.length)
    return (
      <section className="bg-offwhite text-dark">
        <div className="max-w-6xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8 ">
          <div className="sm:flex sm:flex-col sm:align-center"></div>
          <p className="text-6xl font-extrabold sm:text-center sm:text-6xl">
            No subscription pricing plans found. Create them in your{' '}
            <a
              className="text-yellow-500 underline"
              href="https://dashboard.stripe.com/products"
              rel="noopener noreferrer"
              target="_blank"
            >
              Stripe Dashboard
            </a>
            .
          </p>
        </div>
      </section>
    );

  return (
    <section className="bg-offwhite text-dark">
      <div className="max-w-6xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-4xl font-extrabold sm:text-center sm:text-6xl text-dark">
            {billingInterval==='month'?'Unlimited Web Package':'Simple Web Package'}
          </h1>
          <p className="mt-5 text-xl text-zinc-200 sm:text-center sm:text-2xl max-w-2xl m-auto">
            {billingInterval === 'month'
              ? <span>The best <b className='text-palette-orange'>value</b> for business owners who want to grow their brand overtime</span>
              : <span>A one-time purchase plan perfect for starting your business.</span>}
          </p>
          <div className="relative self-center mt-6 bg-indigo-900 rounded-lg p-0.5 flex sm:mt-8 border border-zinc-800">
            <button
              onClick={() => setBillingInterval('month')}
              type="button"
              className={`${
                billingInterval === 'month'
                  ? 'relative w-1/2 bg-palette-main border-zinc-800 shadow-sm text-white'
                  : 'ml-0.5 relative w-1/2 border border-transparent text-zinc-100'
              } rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8`}
            >
              Subscription
            </button>
            <button
              onClick={() => setBillingInterval('year')}
              type="button"
              className={`${
                billingInterval === 'year'
                  ? 'relative w-1/2 bg-palette-main border-zinc-800 shadow-sm text-white'
                  : 'ml-0.5 relative w-1/2 border border-transparent text-zinc-100'
              } rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8`}
            >
              Lump Sum
            </button>
          </div>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-2">
          <div
            className={cn(
              'rounded-lg  divide-y divide-zinc-600 bg-indigo-600 '
            )}
          >
            <div className="p-6">
              <h2 className="text-2xl leading-6 font-semibold text-main">
                What's Included?
              </h2>
              {billingInterval === 'month' ? (
                <div>
                  {/* Perks */}
                  <div>
                    <ul className="text-palette-light">
                      <li>A stunning webpage</li>
                      <li>Unlimited revisions</li>
                      <li>Custom QR Code</li>
                      <li>Hosting and Domain</li>
                      <li>SSL certification</li>
                      <li>Blog posts</li>
                      <li>Online Store (if necessary)</li>
                      <li>Access to 100,000+ stock images</li>
                      <li>Buisness Card design</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div>
                  {/* Perks */}
                  <div>
                    <ul className="text-palette-light">
                      <li>A stunning webpage</li>
                      <li>SSL Certification</li>
                      <li>Guidance setting up hosting & domain</li>

                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
          {products.map((product) => {
            const price = product?.prices?.find(
              (price) => price.interval === billingInterval
            );
            if (!price) return null;
            const priceString = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: price.currency,
              minimumFractionDigits: 0
            }).format((price?.unit_amount || 0) / 100);
            return (
              <div
                key={product.id}
                className={cn(
                  'rounded-lg  divide-y divide-zinc-600 bg-offwhite',
                  {
                    '': subscription
                      ? product.name === subscription?.prices?.products?.name
                      : product.name === 'Freelancer'
                  }
                )}
              >
                <div className="p-6">
                  <h2 className="text-2xl leading-6 font-semibold ">
                    {product.name}
                  </h2>
                  <p className="mt-4 text-zinc-300">{product.description}</p>
                  <p className="mt-8">
                    <span className="text-5xl font-extrabold white">
                      {priceString}
                    </span>
                    <span className="text-base font-medium text-zinc-100">
                      /{billingInterval}
                    </span>
                  </p>

                  <Button
                    variant="slim"
                    type="button"
                    disabled={isLoading}
                    loading={priceIdLoading === price.id}
                    onClick={() => handleCheckout(price)}
                    className="mt-8 block w-full rounded-md py-2 text-sm font-semibold  text-center hover:bg-zinc-900"
                  >
                    {product.name === subscription?.prices?.products?.name
                      ? 'Manage'
                      : 'Subscribe'}
                  </Button>
                </div>
              </div>
            );
          })}
          {
            billingInterval!=='month'&&
          <div
                className={cn(
                  'rounded-lg  divide-y divide-zinc-600 bg-offwhite',
                )}
              >
                <div className="p-6">
                  <h2 className="text-2xl leading-6 font-semibold ">
                    Website starter
                  </h2>
                  <p className="mt-4 text-zinc-300">You will recieve a stunning web page and guidance for how to sey up your site's hosting and domain.</p>
                  <p className="mt-8">
                    <span className="text-5xl font-extrabold white">
                      TBD
                    </span>
                    <span className="text-base font-medium text-zinc-100">
                      /Contact for Pricing
                    </span>
                  </p>
                  <Link href="/contact">

              
                  <Button
                    variant="slim"
                    type="button"
                    disabled={isLoading}
                    className="mt-8 block w-full rounded-md py-2 text-sm font-semibold  text-center hover:bg-zinc-900"
                  >
                    Contact
                  </Button>
                  </Link>
                </div>
              </div>}
        </div>

        {/* <div>
          <p className="mt-24 text-xs uppercase text-zinc-400 text-center font-bold tracking-[0.3em]">
            Brought to you by
          </p>
          <div className="flex flex-col items-center my-12 space-y-4 sm:mt-8 sm:space-y-0 md:mx-auto md:max-w-2xl sm:grid sm:gap-6 sm:grid-cols-5">
            <div className="flex items-center justify-start">
              <a href="https://nextjs.org" aria-label="Next.js Link">
                <img src="/nextjs.svg" alt="Next.js Logo" className="h-12 " />
              </a>
            </div>
            <div className="flex items-center justify-start">
              <a href="https://vercel.com" aria-label="Vercel.com Link">
                <img src="/vercel.svg" alt="Vercel.com Logo" className="h-6 " />
              </a>
            </div>
            <div className="flex items-center justify-start">
              <a href="https://stripe.com" aria-label="stripe.com Link">
                <img
                  src="/stripe.svg"
                  alt="stripe.com Logo"
                  className="h-12 "
                />
              </a>
            </div>
            <div className="flex items-center justify-start">
              <a href="https://supabase.io" aria-label="supabase.io Link">
                <img
                  src="/supabase.svg"
                  alt="supabase.io Logo"
                  className="h-10 "
                />
              </a>
            </div>
            <div className="flex items-center justify-start">
              <a href="https://github.com" aria-label="github.com Link">
                <img src="/github.svg" alt="github.com Logo" className="h-8 " />
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

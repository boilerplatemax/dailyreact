import Link from 'next/link';
import s from './Navbar.module.css';

import Logo from 'components/icons/Logo';
import { useRouter } from 'next/router';
import { useUser } from '@/utils/useUser'
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { FaArrowRight as Right } from 'react-icons/fa';
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';

interface Props {
  lrg: boolean;
}

const Navbar = ({ lrg }: Props) => {
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  return (
    <nav className={s.root}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      {lrg&&router.pathname !== '/plans'&&<div className='w-full text-center font-extrabold bg-palette-main text-palette-paleblue py-2'>
      <span className='p-1 bg-palette-paleblue w-auto m-4 rounded-full font-light text-black'>
        New!
      </span>
      <span>Get a designed website, hosting & domain for $150/month </span>
      <a href='/plans' className='font-light'>
        <span>Learn More </span>
        <Right className='inline'/>
      </a>
      </div>}
      <div
        className={`mx-auto px-8 ${lrg&&'py-4'} navbar__anim ${
          router.pathname !== '/'
            ? `${lrg ? 'bg-palette-main':'bg-offwhite text-dark '} `
            : 'text-palette-paleblue'
        }`}
      >
        
        <div className={`flex justify-between align-center flex-row py-4 md:py-6 relative ${lrg&&'text-white'}`}>
          
          <div className="flex flex-1 items-center">
            <Link href="/">
              <a className={s.logo} aria-label="Logo">
                <Logo />
              </a>
            </Link>
            <nav className="space-x-2 ml-6 hidden lg:block">
              {user ? (
                <Link href="/dashboard">
                  <a className={s.link}>Dashboard</a>
                </Link>
              ) : null}
              <Link href="/plans">
                <a className={s.link}>Plans</a>
              </Link>
              <Link href="/contact">
                <a className={s.link}>Contact</a>
              </Link>
              {user ? (
                <Link href="/account">
                  <a className={s.link}>Account</a>
                </Link>
              ) : null}
            </nav>
          </div>

          <div className="flex flex-1 justify-end space-x-8">
            {user ? (
              <span
                className={s.link}
                onClick={async () => {
                  await supabaseClient.auth.signOut();
                  router.push('/signin');
                  setCookie('refresh_token', null, {
                    maxAge: 0
                  });
                }}
              >
                Sign out
              </span>
            ) : (
              <Link href="/signin">
                <a className={s.link}>Sign in</a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

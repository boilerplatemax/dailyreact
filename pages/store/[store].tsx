import { useRouter } from 'next/router';


type Store = {
  id:string;
};
const Store = () => {
  const router = useRouter();
  const store = {id:router?.query?.store};
  console.log('router',router)

  return (
    <div className="flex justify-center height-screen-helper bg-zinc-100 text-black">
        <div className="flex flex-col justify-between max-w-lg p-3 m-auto w-80 rounded-lg border border-indigo-900">
            <h1>hello there fellow bitches {store.id}</h1>
        </div>
      </div>
  );
};

export default Store;

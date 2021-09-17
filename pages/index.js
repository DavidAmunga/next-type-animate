import Head from 'next/head';
import { CakeIcon } from '@heroicons/react/solid';
import Typical from 'react-typical';

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-8">
        {/* Header */}
        <div className="flex flex-col space-y-8 items-start justify-start">
          <CakeIcon className="w-28 text-yellow-500" />
          <h1 className="font-mono text-7xl font-bold text-yellow-500 tracking-wide">
            Pastros!
          </h1>
          <h3 className="font-mono text-back text-5xl">
            A Bot that{' '}
            <strong className="bg-blue-400 text-white">tweets</strong> about
            your favorite{' '}
            <strong className="bg-yellow-400">pastry</strong> recipes
          </h3>
          <div className="font-mono text-5xl flex space-x-3 ">
            <h4> Posts about </h4>
            <strong className="bg-yellow-400 px-1">
              <Typical
                steps={[
                  'Cakes',
                  1000,
                  'Pies',
                  1000,
                  'Biscuits',
                  1000,
                  'Scones',
                  1000,
                ]}
                wrapper="p"
                loop={Infinity}
              />
            </strong>
          </div>
        </div>
      </main>
    </div>
  );
}

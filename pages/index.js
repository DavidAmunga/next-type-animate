import Head from 'next/head';
import { CakeIcon } from '@heroicons/react/solid';

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
            A Bot that tweets about your favorite pastry recipes
          </h3>
          <h4 className="text-5xl font-mono text-back">
            Posts about{' '}
            <span className="bg-yellow-500 rounded-sm px-2">Muffin Cakes</span>
          </h4>
        </div>
      </main>
    </div>
  );
}

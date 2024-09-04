import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <Image
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="/adress logo.jpg"
          alt="Sarah Dayan"
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
            You can find me at My Adress. where I am always happy to welcome visitors.
             This is where you will find the heart of our home filled with warmth and good company.
              Feel free to drop by anytime.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-red-500 dark:text-sky-400">
             My Adress
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Babar Colony St.3 Ho.121 RYK
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Page;


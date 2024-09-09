import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <Image
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="/about.png"
          alt="About"
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
            Homes are more than just buildings they are the backdrop
             to our lives filled with the echoes of laughter and the warmth 
             of cherished memories. Each home reflects its inhabitants unique
              stories and personalities offering a sanctuary where we find comfort and belonging.
               In every home the simple joys of daily life come together
                to create a place of peace and happiness.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-red-500 dark:text-sky-400">
              About Home
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Page;
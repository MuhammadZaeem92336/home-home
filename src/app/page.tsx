import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <Image
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="/image.jpg"
          alt="Sarah Dayan"
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
            My house is a warm welcoming retreat where every corner holds a touch of comfort and joy.
             Its cozy spaces are perfect for both quiet moments and lively gatherings.
              Here every day feels like home.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-red-500 dark:text-sky-400">
              MY HOUSE
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Feel Comfortable
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Page;
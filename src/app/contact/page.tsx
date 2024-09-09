import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <Image
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="/call-logo.jpg"
          alt="Contact"
          width="384"
          height="512"
        />
        <div className="text-lg font-medium md:text-left">
          <blockquote>
            <p className="pt-6 md:p-8 text-center">
            For any inquiries or just to stay in touch you reach out to me. You can contact me via your preferred method. e.g. email and phone at your contact details. I am always happy to connect and assist in any way I can.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-red-500 dark:text-sky-400 text-center">
              About My Contact
            </div>
            <div className="text-slate-700 dark:text-slate-500 text-center">
              Thankyou
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Page;
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
      <section className="bg-gray-200 text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none text-violet-400 sm:text-6xl">
              WELCOME TO THE HEALTH CARE WEBSITE
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Alternative therapies stemming from the premise the mind, body and
              spirit function as one and addressing all promotes healing.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900">
                Suspendisse
              </Link>
              <Link
                rel="noopener noreferrer"
                className="px-8 py-3 text-lg font-semibold border rounded border-gray-400"
              >
                Malesuada
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://demo.zozothemes.com/medicalhealth/wp-content/uploads/sites/4/2015/07/portfolio8.jpg"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    );
};

export default Hero;
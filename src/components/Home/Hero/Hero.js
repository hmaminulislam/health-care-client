import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
      <section className="bg-gray-200 text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-3xl leading-relaxed md:text-5xl font-bold text-amber-500 sm:text-6xl">
              WELCOME TO THE HEALTH CARE WEBSITE
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Alternative therapies stemming from the premise the mind, body and
              spirit function as one and addressing all promotes healing.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                to="/add-service"
                className="px-8 py-3 text-lg font-semibold rounded bg-emerald-600 text-white"
              >
                Add Services
              </Link>
              <Link to='/my-reviews' className="px-8 py-3 text-lg font-semibold border rounded border-emerald-600">
                My Reviews
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-full sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://demo.zozothemes.com/medicalhealth/wp-content/uploads/sites/4/2015/07/portfolio8.jpg"
              alt=""
              className="object-contain h-full sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    );
};

export default Hero;
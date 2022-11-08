import React from 'react';

const ServicesCard = ({service}) => {
    const {name, body, price, img} = service
    return (
      <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        <img
          src={img}
          alt={name}
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-wide">
              {name}
            </h2>
            <p className='font-semibold'>Price: ${price}</p>
            <p className="dark:text-gray-100">
              {body.slice(0, 100)} ...
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 dark:text-gray-900 font-semibold"
          >
            View Details
          </button>
        </div>
      </div>
    );
};

export default ServicesCard;
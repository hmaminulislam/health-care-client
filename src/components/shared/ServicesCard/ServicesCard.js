import React from "react";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServicesCard = ({ service, index }) => {
  const { name, body, price, img, _id } = service;
  return (
    <PhotoProvider>
      <div className="max-auto rounded-md shadow-md bg-gray-50">
        <PhotoView key={index} src={img}>
          <img
            src={img}
            alt={name}
            className="object-cover cursor-pointer object-center w-full rounded-t-md h-72"
          />
        </PhotoView>
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-wide text-amber-500">
              {name}
            </h2>
            <p className="font-semibold text-gray-800">Price: ${price}</p>
            <p className="text-gray-600 text-sm">{body.slice(0, 100)} ...</p>
          </div>
          <Link
            to={`/service/${_id}`}
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-emerald-600 text-white"
          >
            View Details
          </Link>
        </div>
      </div>
    </PhotoProvider>
  );
};

export default ServicesCard;

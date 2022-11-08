import React from "react";
import { useLoaderData } from "react-router-dom";
import ServicesCard from "../../shared/ServicesCard/ServicesCard";

const Services = () => {
  const services = useLoaderData();
  return (
    <div>
      <div className="grid my-20 grid-cols-3 px-5 sm:px-10 md:px-20">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
      <div className="text-center">
        <button className="border border-gray-300 bg-violet-500 py-3 px-5 font-semibold">
          View All
        </button>
      </div>
    </div>
  );
};

export default Services;

import React from "react";
import { useLoaderData } from "react-router-dom";
import ServicesCard from "../shared/ServicesCard/ServicesCard";

const ServicesPage = () => {
  const services = useLoaderData();
  return (
    <div className="grid my-20 grid-cols-3 px-5 sm:px-10 md:px-20">
      {services.map((service) => (
        <ServicesCard key={service._id} service={service}></ServicesCard>
      ))}
    </div>
  );
};

export default ServicesPage;
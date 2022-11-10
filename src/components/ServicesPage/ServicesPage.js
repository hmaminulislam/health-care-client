import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import ServicesCard from "../shared/ServicesCard/ServicesCard";

const ServicesPage = () => {
  const services = useLoaderData();
  useTitle('Services')
  return (
    <div className="grid my-20 gap-y-20 gap-x-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 sm:px-10 md:px-20">
      {services.map((service, index) => (
        <ServicesCard key={service._id} service={service} index={index}></ServicesCard>
      ))}
    </div>
  );
};

export default ServicesPage;

import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData();
    const [allServices, setAllServices] = useState([])


    //fetch all services
    useEffect( () => {
        fetch("http://localhost:5000/services")
        .then(res => res.json())
        .then(data => setAllServices(data))
    },[])
    console.log('all services', allServices)
    return (
      <div className='grid gap-20 grid-cols-3 px-5 sm:px-10 md:px-20 mb-20'>
        <div className='col-span-2'>
          <img className="w-full max-h-[400px]" src={service?.img} alt="" />
          <h2 className='text-2xl font-semibold py-4'>{service?.name}</h2>
          <p>{service?.body}</p>
        </div>
        <div>
            <h2 className='text-2xl font-semibold text-center mb-7'>All Services</h2>
            {allServices.map(ser => {
                return (
                  <Link to={`/service/${ser._id}`} key={ser._id} className="flex items-center mb-5">
                    <img className="w-24 h-24" src={ser.img} alt="" />
                    <div className='ml-4'>
                      <h3 className='text-xl text-sky-600 font-semibold'>{ser?.name}</h3>
                      <p className='text-sky-700'>{ser?.body.slice(0, 30)}</p>
                    </div>
                  </Link>
                );
            })}
        </div>
      </div>
    );
};

export default ServiceDetails;
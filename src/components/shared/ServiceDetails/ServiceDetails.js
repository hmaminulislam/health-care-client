import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Review from "./Review/Review";
import ReviewForm from "./Review/ReviewForm";

const ServiceDetails = () => {
  const service = useLoaderData();
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(false)

  //fetch all services
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${service._id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [service._id, refresh]);

  return (
    <div className="grid gap-20 grid-cols-3 px-5 sm:px-10 md:px-20 mb-20">
      <div className="col-span-2">
        <img className="w-full max-h-[400px]" src={service?.img} alt="" />
        <h2 className="text-2xl font-semibold py-4">{service?.name}</h2>
        <p>{service?.body}</p>
        <div className="mt-20">
          <div className="mb-5">
            <h3 className="text-3xl font-semibold">Service Reviews</h3>
          </div>
          {reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
          <ReviewForm id={service._id} setRefresh={setRefresh}></ReviewForm>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-center mb-7">
          All Services
        </h2>
        {services.map((ser) => {
          return (
            <Link
              to={`/service/${ser._id}`}
              key={ser._id}
              className="flex items-center mb-5"
            >
              <img className="w-24 h-24" src={ser.img} alt="" />
              <div className="ml-4">
                <h3 className="text-xl text-sky-600 font-semibold">
                  {ser?.name}
                </h3>
                <p className="text-sky-700">{ser?.body.slice(0, 30)}</p>
              </div>
            </Link>
          );
        })}
        <div className="text-3xl">sidebar</div>
      </div>
    </div>
  );
};

export default ServiceDetails;

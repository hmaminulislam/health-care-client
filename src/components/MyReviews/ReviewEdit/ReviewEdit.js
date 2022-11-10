import React from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const ReviewEdit = () => {
  const navigate = useNavigate();
  const CurrntReview = useLoaderData();
  //review edit submit btn handle
  const submitHandle = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.imageUrl.value;
    const review = form.review.value;
    const updateReview = {
      image,
      review,
    };
    //review update api
    fetch(
      `https://health-care-server.vercel.app/edit-review/${CurrntReview._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateReview),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Review Update successfull");
          navigate("/my-reviews");
        }
      });
  };
  return (
    <section className="p-6 text-gray-800">
      <form
        onSubmit={submitHandle}
        className="container w-full max-w-xl p-2 sm:p-8 mx-auto space-y-6 rounded-md shadow bg-gray-50"
      >
        <h2 className="w-full text-3xl font-bold leading-tight text-center text-amber-500">
          Review Edit
        </h2>
        <div>
          <label className="block mb-1 ml-1">Email</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            defaultValue={CurrntReview?.email}
            readOnly
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-emerald-600 bg-gray-100"
          />
        </div>
        <div>
          <label className="block mb-1 ml-1">Photo Url</label>
          <input
            name="imageUrl"
            type="text"
            placeholder="Your photo url"
            defaultValue={CurrntReview?.image}
            required
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-emerald-600 bg-gray-100"
          />
        </div>
        <div>
          <label className="block mb-1 ml-1">Review</label>
          <textarea
            name="review"
            type="text"
            placeholder="review here.."
            defaultValue={CurrntReview?.review}
            className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-emerald-600 bg-gray-100"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-emerald-600 focus:ring-emerald-600 hover:ring-emerald-600 text-gray-50"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ReviewEdit;

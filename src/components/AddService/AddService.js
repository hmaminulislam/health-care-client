import React from "react";
import toast from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

const AddService = () => {
  useTitle("Add service");

  //submit button handle
  const submitHandle = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const img = form.img.value;
    const price = form.price.value;
    const body = form.body.value;
    const service = {
      name,
      img,
      price,
      body,
    };

    fetch("https://health-care-server.vercel.app/add-service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Service added successfull");
          form.reset();
        }
      });
  };
  return (
    <section className="p-6 text-gray-800">
      <form
        onSubmit={submitHandle}
        className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-50"
      >
        <h2 className="w-full text-3xl font-bold leading-tight">
          Add Your Service
        </h2>
        <div>
          <label className="block mb-1 ml-1">Service Name</label>
          <input
            name="name"
            type="text"
            placeholder="service name"
            required
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-emerald-600 bg-gray-100"
          />
        </div>
        <div>
          <label className="block mb-1 ml-1">Service Image Url</label>
          <input
            name="img"
            type="text"
            placeholder="service image url"
            required
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-emerald-600 bg-gray-100"
          />
        </div>
        <div>
          <label className="block mb-1 ml-1">Price</label>
          <input
            name="price"
            type="number"
            placeholder="price"
            required
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-emerald-600 bg-gray-100"
          />
        </div>
        <div>
          <label className="block mb-1 ml-1">Description</label>
          <textarea
            name="body"
            type="text"
            placeholder="description"
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

export default AddService;

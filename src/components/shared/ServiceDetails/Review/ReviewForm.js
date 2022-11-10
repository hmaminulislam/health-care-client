import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";

const ReviewForm = ({ service, setRefresh, refresh }) => {
  const { user, loader } = useContext(AuthContext);
  const loginUser = user?.uid;

  if (loader) {
    return <div>Loading...</div>;
  }

  //review submit button handle
  const submitHandle = (event) => {
    event.preventDefault();
    const form = event.target;
    const imageUrl = form.imageUrl.value;
    const review = form.review.value;

    const userRating = {
      image: imageUrl || user?.photoURL,
      review,
      userName: user?.displayName,
      email: user?.email,
      serviceId: service?._id,
      serviceImg: service?.img,
      serviceName: service?.name,
    };
    //review post api
    fetch(`https://health-care-server.vercel.app/add-review`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userRating),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Your review added");
          setRefresh(!refresh);
          form.reset();
        }
      });
  };

  return (
    <div className="mt-7">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold mb-5">Add Your Review here</h2>
        <h3 className="text-xl font-semibold">
          Add review? Please{" "}
          <Link to="/login" className="text-sky-600">
            Login
          </Link>
        </h3>
      </div>
      <form onSubmit={submitHandle}>
        <div className="mb-3">
          <input
            type="text"
            name="imageUrl"
            placeholder="Review image url"
            className="border border-violet-700 w-full rounded-md shadow-sm outline-0 py-3 px-3"
          />
        </div>
        <div className="mb-3">
          <textarea
            name="review"
            rows="3"
            className="w-full p-3 rounded border border-violet-700 outline-0"
            placeholder="Write Review..."
            required
          ></textarea>
        </div>
        <div>
          <button
            disabled={loginUser ? false : true}
            type="submit"
            className={`py-3 px-5  rounded-md font-semibold text-white ${
              loginUser ? "bg-violet-500" : "bg-gray-400"
            }`}
          >
            {loginUser ? "Submit" : "Disable"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;

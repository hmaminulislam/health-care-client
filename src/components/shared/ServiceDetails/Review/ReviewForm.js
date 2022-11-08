import React from 'react';
import { Link } from 'react-router-dom';

const ReviewForm = () => {
    const submitHandle = (event) => {
        event.preventDefault()
        const form = event.target;
        const imageUrl = form.imageUrl.value;
        const review = form.review.value;
        const userRating = {
            imageUrl,
            review,
        }

        fetch(`http://localhost:5000/add-review`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userRating)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
      <div className="mt-7">
        <div className='flex justify-between'>
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
              name='imageUrl'
              placeholder="Review image url"
              className="border border-violet-700 w-full rounded-md shadow-sm outline-0 py-3 px-3"
            />
          </div>
          <div className="mb-3">
            <textarea
            name='review'
              rows="3"
              className="w-full p-3 rounded border border-violet-700 outline-0"
              placeholder="Write Review..."
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="py-3 px-5 bg-violet-500 rounded-md font-semibold text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
};

export default ReviewForm;
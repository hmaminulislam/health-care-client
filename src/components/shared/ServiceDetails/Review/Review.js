import React from 'react';

const Review = ({review}) => {

    return (
      <div className="container flex items-center w-full p-6 mx-auto rounded-md border border-gray-200 mt-5">
        <div className="w-20 mr-5">
          <img className="w-12 h-12 rounded-full"
            src={review?.image}
            alt=""
          />
        </div>
        <p className="">{review?.review}</p>
      </div>
    );
};

export default Review;
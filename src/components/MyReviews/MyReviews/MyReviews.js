import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";
import TableRow from "../TableRow/TableRow";

const MyReviews = () => {
  useTitle('My Reviews')
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/my-reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("healthCare-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user.email, reviews]);
  return (
    <>
      {reviews.length > 0 ? (
        <div className="container w-full p-2 mx-auto sm:p-4 text-gray-800">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-amber-500">
                <tr className="text-white">
                  <th className="px-3 py-6">Photo</th>
                  <th className="px-3 py-6">Name</th>
                  <th className="px-3 py-6">Review</th>
                  <th className="px-3 py-6">Action</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review) => (
                  <TableRow key={review._id} review={review}></TableRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-4xl font-semibold text-center h-screen mt-20">No reviews were added</h2>
        </div>
      )}
    </>
  );
};

export default MyReviews;

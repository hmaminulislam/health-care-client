import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const TableRow = ({ review }) => {
  const navigate = useNavigate();
  //review edit and delete change handle
  const changeHandle = (e, id) => {
    const action = e.target.value;
    if (action === "edit") {
      navigate(`/edit-review/${id}`);
    }
    //Delete review
    if (action === "delete") {
      fetch("https://health-care-server.vercel.app/delete-review", {
        method: "DELETE",
        headers: {
          id,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Delete successfull");
          }
        });
    }
  };
  return (
    <tr className=" bg-gray-50 text-center">
      <td className="px-0 sm:px-3 py-1 sm:py-5 border border-gray-300 ">
        <img
          className="w-8 h-8 sm:w-14 sm:h-14 mx-auto rounded-full"
          src={review?.serviceImg}
          alt=""
        />
      </td>
      <td className="px-1 py-1 sm:p-3 border border-gray-300">
        <p className="text-sm">{review?.serviceName}</p>
      </td>
      <td className="px-1 py-1 sm:p-3 border border-gray-300">
        <p className="text-sm">{review?.review}</p>
      </td>
      <td className="px-1 py-1 sm:p-3 border border-gray-300">
        <span>
          <select
            onChange={(e) => changeHandle(e, review._id)}
            className="p-0 text-sm sm:p-2 border border-gray-200 text-sky-600 cursor-pointer"
          >
            <option className="cursor-pointer">Action</option>
            <option value="edit" className="cursor-pointer">
              Edit
            </option>
            <option value="delete" className="cursor-pointer">
              Delete
            </option>
          </select>
        </span>
      </td>
    </tr>
  );
};

export default TableRow;

import React from 'react';

const TableRow = ({review}) => {
    return (
      <tr className=" bg-gray-50 text-center">
        <td className="px-3 py-5 border border-gray-300 ">
          <img
            className="w-14 h-14 mx-auto rounded-full"
            src={review?.serviceImg}
            alt=""
          />
        </td>
        <td className="p-3 border border-gray-300">
          <p>{review?.serviceName}</p>
        </td>
        <td className="p-3 border border-gray-300">
          <p>{review?.review}</p>
        </td>
        <td className="p-3 border border-gray-300">
          <span className="px-3 py-1 font-semibold rounded-md bg-emerald-600 text-gray-50">
            <span>Pending</span>
          </span>
        </td>
      </tr>
    );
};

export default TableRow;
import React from 'react';

const TableRow = ({review}) => {
    console.log(review)
    return (
      <tr className=" bg-gray-50 text-center">
        <td className="p-3 border border-gray-300 ">
          <img className='w-14 h-14' src={review?.serviceImg} alt="" />
        </td>
        <td className="p-3 border border-gray-300">
          <p>Microsoft Corporation</p>
        </td>
        <td className="p-3 border border-gray-300">
          <p>Very good Service</p>
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
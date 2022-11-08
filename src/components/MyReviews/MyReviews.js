import React, { useEffect, useState } from 'react';

const MyReviews = () => {
    // const [reviews, setReviews] = useState([])
    // useEffect( () => {
    //     fetch()
    // },[])
    return (
        <div className="container w-full p-2 mx-auto sm:p-4 text-gray-800">
	<div className="overflow-x-auto">
		<table className='w-full'>
			<thead className="bg-gray-500">
				<tr className="text-white">
					<th className="p-3">Photo</th>
					<th className="p-3">Name</th>
					<th className="p-3">Review</th>
					<th className="p-3">Action</th>
				</tr>
			</thead>
			<tbody>
				<tr className=" bg-gray-50 text-center">
					<td className="p-3 border border-gray-300 ">
						<p>97412378923</p>
					</td>
					<td className="p-3 border border-gray-300">
						<p>Microsoft Corporation</p>
					</td>
					<td className="p-3 border border-gray-300">
						<p>Very good Service</p>
					</td>
					<td className="p-3 border border-gray-300 text-right">
						<span className="px-3 py-1 font-semibold rounded-md bg-emerald-600 text-gray-50">
							<span>Pending</span>
						</span>
					</td>
				</tr>
				<tr className="text-center bg-gray-50">
					<td className="p-3 border border-gray-300">
						<p>97412378923</p>
					</td>
					<td className="p-3 border border-gray-300">
						<p>Microsoft Corporation</p>
					</td>
					<td className="p-3 border border-gray-300">
						<p>good</p>
					</td>
					<td className="p-3 border border-gray-300 text-right">
						<span className="px-3 py-1 font-semibold rounded-md bg-emerald-600 text-gray-50">
							<span>Pending</span>
						</span>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
    );
};

export default MyReviews;
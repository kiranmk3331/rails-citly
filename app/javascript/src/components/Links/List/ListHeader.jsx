import React from "react";

const ListHeader = () => {
  return (
    <thead className="bg-blue-700 text-white ">
      <tr>
        <th></th>
        <th
          className="p-6 text-lg font-bold leading-4 tracking-wider
            text-left text-opacity-50 bg-gray-50"
        >
          Original
        </th>
        <th
          className="p-6 text-lg font-bold leading-4 tracking-wider
            text-left text-opacity-50 bg-gray-50"
        >
          Short Url
        </th>
        <th></th>
      </tr>
    </thead>
  );
};

export default ListHeader;

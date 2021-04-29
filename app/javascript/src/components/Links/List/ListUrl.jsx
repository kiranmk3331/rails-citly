import React from "react";
import PropTypes from "prop-types";

const ListUrl = ({ data, handleClicked }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200 rounded-b">
      {data.map(rowData => (
        <tr key={rowData.id}>
          <td
            className="px-6 py-4 text-md break-all 
            leading-5 text-bb-gray max-w-xs"
          >
            <a
              href={rowData.long_url}
              target="_blank"
              className="hover:underline cursor-pointer"
              rel="noreferrer"
            >
              {rowData.long_url}
            </a>
          </td>
          <td
            className="px-6 py-4 text-md break-all
            leading-5 text-bb-gray max-w-xs"
          >
            <a
              onClick={() => handleClicked(rowData.id)}
              target="_blank"
              className="hover:underline cursor-pointer"
              rel="noreferrer"
            >
              {rowData.short_url}
            </a>
          </td>
          <td
            className="px-6 py-4 text-md font-medium text-center
            leading-5 text-bb-gray whitespace-no-wrap bg-gray-100"
          >
            {rowData.click}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

ListUrl.propTypes = {
  data: PropTypes.array.isRequired,
  destroyTask: PropTypes.func,
  updateTask: PropTypes.func,
};

export default ListUrl;

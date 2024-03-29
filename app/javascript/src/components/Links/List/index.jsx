import React from "react";

import ListHeader from "./ListHeader";
import ListUrl from "./ListUrl";

const List = ({ data, handleClicked, handlePinned }) => {
  return (
    <table
      className="min-w-full overflow-hidden
      divide-y divide-gray-200 mt-10 shadow rounded-lg"
    >
      <ListHeader />
      <ListUrl
        data={data}
        handleClicked={handleClicked}
        handlePinned={handlePinned}
      />
    </table>
  );
};

export default List;

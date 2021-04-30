import React from "react";
import { isNil, isEmpty, either } from "ramda";
import List from "./List";

const ListLinks = ({ data, handleClicked, handlePinned }) => {
  if (either(isNil, isEmpty)(data)) {
    return (
      <h1 className="text-xl leading-5 text-center mt-10">
        You have no links assigned 😔
      </h1>
    );
  }

  return (
    <List
      data={data}
      handleClicked={handleClicked}
      handlePinned={handlePinned}
    />
  );
};

export default ListLinks;

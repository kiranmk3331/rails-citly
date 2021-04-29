import React, { useState } from "react";
import Button from "components/Button";
import Input from "../Input";

const CreateLink = ({ setLink, handleSubmit, loading, link }) => {
  return (
    <div className="flex justify-between mx-auto mt-10 max-w-2xl">
      <form className="flex w-4/5" onSubmit={handleSubmit}>
        <div className="w-10/12">
          <Input
            placeholder="Enter a Url to shorten..."
            value={link}
            onChange={e => setLink(e.target.value)}
          />
        </div>
        <div className="w-2/12 flex justify-end">
          <Button type="submit" buttonText="Shorten!" loading={loading} />
        </div>
      </form>
      {/* <Button
        type="button"
        buttonText="📥 Reports"
        loading={reportLoading}
        onClick={handleReport}
      /> */}
    </div>
  );
};

export default CreateLink;

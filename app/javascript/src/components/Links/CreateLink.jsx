import React from "react";
import Button from "components/Button";
import Input from "../Input";

const CreateLink = ({ setLink, handleSubmit, loading, link }) => {
  return (
    <div className="flex justify-between mx-auto mt-10 w-full">
      <form className="flex w-full shadow rounded" onSubmit={handleSubmit}>
        <div className="w-full">
          <Input
            placeholder="Enter a Url to shorten..."
            value={link}
            onChange={e => setLink(e.target.value)}
          />
        </div>
        <div className=" flex justify-end">
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

import React from "react";
import Button from "components/Button";
import Input from "../Input";

const CreateLink = ({ setUrl, handleSubmit, loading, url, handleReport }) => {
  return (
    <div>
      <div className="flex justify-between mx-auto mt-10 w-full">
        <form className="flex w-full shadow rounded" onSubmit={handleSubmit}>
          <div className="w-full">
            <Input
              placeholder="Enter a Url to shorten..."
              value={url}
              onChange={e => setUrl(e.target.value)}
            />
          </div>
          <div className=" flex justify-end">
            <Button type="submit" buttonText="Shorten!" loading={loading} />
          </div>
        </form>
      </div>
      <div className="flex items-center justify-center mt-2">
        <Button type="button" buttonText="📥 Reports" onClick={handleReport} />
      </div>
    </div>
  );
};

export default CreateLink;

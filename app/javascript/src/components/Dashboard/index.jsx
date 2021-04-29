import React, { useEffect, useState } from "react";
import CreateLink from "../Links/CreateLink";
import ListLinks from "../Links/ListLink";
import Container from "components/Container";
import Logger from "js-logger";
import PageLoader from "components/PageLoader";
import urlsApi from "apis/urls";

const Dashboard = () => {
  const [urls, setUrls] = useState([]);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await urlsApi.create({ url: { long_url: url } });
      fetchUrls();
      setLoading(false);
    } catch (error) {
      Logger.error(error);
      setLoading(false);
    }
  };

  if (pageLoading) {
    return (
      <div className="w-screen h-screen">
        <PageLoader />
      </div>
    );
  }

  const fetchUrls = async () => {
    try {
      const response = await urlsApi.list();
      setUrls(response.data.urls);
      setUrl("");
      setPageLoading(false);
    } catch (error) {
      Logger.error(error);
      setPageLoading(false);
    }
  };

  const handleClick = async id => {
    try {
      const responds = await urlsApi.count(id);
      window.open(responds.data.url.long_url);
      fetchUrls();
    } catch (error) {
      Logger.error(error);
    }
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  return (
    <Container>
      <CreateLink
        handleSubmit={handleSubmit}
        setLink={setUrl}
        link={url}
        loading={loading}
      />
      <ListLinks data={urls} handleClicked={handleClick} />
    </Container>
  );
};

export default Dashboard;

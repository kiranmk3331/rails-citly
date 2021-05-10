import React, { useEffect, useState } from "react";
import CreateLink from "../Links/CreateLink";
import ListLinks from "../Links/ListLinks";
import Container from "components/Container";
import Logger from "js-logger";
import PageLoader from "components/PageLoader";
import urlsApi from "apis/urls";

const Dashboard = () => {
  const [urls, setUrls] = useState([]);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

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

  const handleReport = async () => {
    try {
      window.open(window.location.href + "/urls.csv");
    } catch (error) {
      Logger.error(error);
    }
  };

  const handleClick = async id => {
    try {
      const responds = await urlsApi.show(id);
      window.open(responds.data.url.long_url);
      fetchUrls();
    } catch (error) {
      Logger.error(error);
    }
  };

  const handlePinned = async id => {
    try {
      await urlsApi.update(id);
      fetchUrls();
    } catch (error) {
      Logger.error(error);
    }
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  if (pageLoading) {
    return (
      <div className="w-screen h-screen">
        <PageLoader />
      </div>
    );
  }

  return (
    <Container>
      <CreateLink
        handleSubmit={handleSubmit}
        setUrl={setUrl}
        url={url}
        loading={loading}
        handleReport={handleReport}
      />
      <ListLinks
        data={urls}
        handleClicked={handleClick}
        handlePinned={handlePinned}
      />
    </Container>
  );
};

export default Dashboard;

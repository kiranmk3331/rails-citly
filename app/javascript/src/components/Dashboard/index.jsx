import React from "react";
import CreateLink from "../Links/CreateLink";
import ListLinks from "../Links/ListLink";
import Container from "components/Container";

function Dashboard() {
  const [links, setLinks] = useState([]);
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  return (
    <Container>
      <CreateLink
        handleSubmit={handleSubmit}
        setLink={setLink}
        link={link}
        loading={loading}
      />
      <ListLinks data={links} handleClicked={handleClicked} />
    </Container>
  );
}

export default Dashboard;

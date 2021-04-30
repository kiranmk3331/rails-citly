import React from "react";
import { Link } from "react-router-dom";
import Container from "components/Container";

const NavBar = () => {
  return (
    <nav className="bg-blue-300 shadow py-1">
      <Container>
        <h1 className="font-sans text-2xl font-semibold">
          <Link className="cursor-pointer" to="/">
            Citly
          </Link>
        </h1>
      </Container>
    </nav>
  );
};

export default NavBar;

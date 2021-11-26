import React from "react";
import { Link } from "react-router-dom";

const TakeMeToPage = ({ path, linkName }) => {
  return (
    <Link to={path}>
      <h1>{linkName}</h1>
    </Link>
  );
};

export default TakeMeToPage;

import React from "react";
import { Link } from "react-router-dom";

const LinkList = ({ onClick }) => {
  if (!onClick) {
    <>
      <p className="h6 pb-2">
        <Link className="text-dark no-text-decoration" to="/">
          Dashboard
        </Link>
      </p>
      <p className="h6 pb-2">
        <Link className="text-dark no-text-decoration" to="/inventory">
          Inventory
        </Link>
      </p>
      <p className="h6">
        <Link className="text-dark no-text-decoration" to="/supplies">
          Supplies
        </Link>
      </p>
    </>;
  }

  return (
    <>
      <p className="h6 pb-2">
        <Link className="text-dark no-text-decoration" to="/" onClick={onClick}>
          Dashboard
        </Link>
      </p>
      <p className="h6 pb-2">
        <Link
          className="text-dark no-text-decoration"
          to="/inventory"
          onClick={onClick}
        >
          Inventory
        </Link>
      </p>
      <p className="h6">
        <Link
          className="text-dark no-text-decoration"
          to="/supplies"
          onClick={onClick}
        >
          Supplies
        </Link>
      </p>
    </>
  );
};

export default LinkList;
import React from "react";
import { Link } from "react-router-dom";

const LinkList = () => (
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
  </>
);

export default LinkList;
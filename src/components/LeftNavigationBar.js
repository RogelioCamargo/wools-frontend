import React from "react";
import { Link } from "react-router-dom";

const LeftNavigationBar = () => {
	return (
    <div className="w-50 mx-auto my-5">
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
    </div>
  );
};

export default LeftNavigationBar;

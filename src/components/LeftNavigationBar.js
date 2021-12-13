import React from "react";
import { Link } from "react-router-dom";

const LeftNavigationBar = () => {
	return (
    <div className="container">
      <Link to="/">Dashboard</Link>
      <br />
      <Link to="/inventory">Inventory</Link>
      <br />
      <Link to="/supplies">Supplies</Link>
    </div>
  );
};

export default LeftNavigationBar;

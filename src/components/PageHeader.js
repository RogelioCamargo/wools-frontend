import React from "react";
import { Button } from "react-bootstrap";
import PlusIcon from "../components/PlusIcon";

const PageHeader = ({ onClick, title, addButton }) => (
  <div className="mb-4">
    <h1 className="h3 mb-0 mr-2 align-center">{title}</h1>
    {addButton ? (
      <Button variant="outline-primary" className="mt-2" onClick={onClick}>
        <PlusIcon />
        Product
      </Button>
    ) : null}
  </div>
);

export default PageHeader;
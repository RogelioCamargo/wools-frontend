import React from "react";
import { Button } from "react-bootstrap";

// components
import PlusIcon from "../components/PlusIcon";

const PageHeader = ({ title, onClick, isMessage }) => {

  return (
    <div className="mb-4">
      <h1 className="h3 mb-0 mr-2 align-center">{title}</h1>
      <Button 
        variant="outline-primary" 
        onClick={onClick} 
        className="mt-2"
      >
        <PlusIcon />
        <span className="mx-1">{isMessage ? "Message" : "Product"}</span>
      </Button>
    </div>
  );
};

export default PageHeader;
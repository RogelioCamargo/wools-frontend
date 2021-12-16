import React, { useState } from "react";
import { Button } from "react-bootstrap";

// components
import ModalForm from "../components/ModalForm";
import PlusIcon from "../components/PlusIcon";

const PageHeader = ({ title, addButton, isProduct }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="mb-4">
      <h1 className="h3 mb-0 mr-2 align-center">{title}</h1>
      {addButton ? (
        <>
          <Button
            variant="outline-primary"
            onClick={() => setShow(true)}
            className="mt-2"
          >
            <PlusIcon />
            <span className="mx-1">Product</span>
          </Button>
          {isProduct ? (
            <ModalForm
              title="Add New Inventory Item"
              show={show}
              handleClose={() => setShow(false)}
              isProduct
            />
          ) : (
            <ModalForm
              title="Add New Supply Item"
              show={show}
              handleClose={() => setShow(false)}
            />
          )}
        </>
      ) : null}
    </div>
  );
};

export default PageHeader;
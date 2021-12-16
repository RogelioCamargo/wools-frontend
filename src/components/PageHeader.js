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
            Product
          </Button>
          {isProduct ? (
            <ModalForm
              show={show}
              handleClose={() => setShow(false)}
              isProduct
            />
          ) : (
            <ModalForm
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
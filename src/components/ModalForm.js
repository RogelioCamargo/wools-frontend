import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createOneProduct } from "../reducers/productReducer";
import { createOneItem } from "../reducers/suppliesReducer";

// components
import Form from "./Form";

const ModalForm = ({ title, show, handleClose, isMessage }) => {
  const dispatch = useDispatch();

  const handleSubmit = async () => {

  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isMessage ? <Form isMessage /> : <Form />}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalForm;

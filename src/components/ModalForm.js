import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

// action creators
import { createOneProduct, updateOneProduct } from "../reducers/productReducer";
import { createOneItem, updateOneItem } from "../reducers/suppliesReducer";
import { createOneAnnouncement, updateOneAnnouncement } from "../reducers/announcementReducer";
import { createOneReminder, updateOneReminder } from "../reducers/reminderReducer";
import { createOneTicket, updateOneTicket } from "../reducers/ticketReducer";

// components
import Form from "./Form";

const ModalForm = ({ title, show, handleClose, isMessage, isProduct }) => {
  const dispatch = useDispatch();
  const fields = useSelector(state => state.fields);

  const handleSubmit = async () => {
    handleClose();
    if (isMessage) {
      const message = {
        content: fields.content,
        level: fields.level,
        type: fields.type
      }
      if (fields.type === "announcement") {
        if (!fields.id) dispatch(createOneAnnouncement(message));
        else dispatch(updateOneAnnouncement(message));
      }
      else if (fields.type === "reminder") {
        if (!fields.id) dispatch(createOneReminder(message));
        else dispatch(updateOneReminder(message));
      }
      else {
        if (!fields.id) dispatch(createOneTicket(message));
        else dispatch(updateOneTicket(message));
      }
    }
    else if (isProduct) {
      const product = {
        name: fields.name,
        level: fields.level,
        brand: fields.brand,
      };

      if (!fields.id) dispatch(createOneProduct(product));
      else dispatch(updateOneProduct(product));
    }
    else {
      const product = {
        name: fields.name,
        level: fields.level,
        brand: fields.brand,
      };

      if (!fields.id) dispatch(createOneItem(product));
      else dispatch(updateOneItem(product));
    }
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

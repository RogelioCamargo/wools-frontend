import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

// action creators
import { createOneProduct, updateOneProduct } from "../reducers/productReducer";
import { createOneItem, updateOneItem } from "../reducers/suppliesReducer";
import { createOneAnnouncement, updateOneAnnouncement } from "../reducers/announcementReducer";
import { createOneReminder, updateOneReminder } from "../reducers/reminderReducer";
import { createOneTicket, updateOneTicket } from "../reducers/ticketReducer";
import { reset } from "../reducers/fieldsReducer";

// components
import Form from "./Form";

const ModalForm = ({ title, show, handleClose, isMessage, isProduct }) => {
  const dispatch = useDispatch();
  const fields = useSelector(state => state.fields);

  const handleCloseAndClear = () => {
    handleClose();
    dispatch(reset());
  }

  const handleSubmit = async () => {
    const product = {
      name: fields.name,
      level: fields.level,
      brand: fields.brand,
    };

    if (isMessage) {
      const message = {
        content: fields.content,
        level: fields.level,
        type: fields.type
      }
      console.log("ISANNOUNCEMENT", fields.type === "announcement");
      if (fields.type === "announcement") {
        if (!fields.id) dispatch(createOneAnnouncement(message));
        else dispatch(updateOneAnnouncement({ ...message, id: fields.id }));
      } else if (fields.type === "reminder") {
        if (!fields.id) dispatch(createOneReminder(message));
        else dispatch(updateOneReminder({ ...message, id: fields.id }));
      } else {
        if (!fields.id) dispatch(createOneTicket(message));
        else dispatch(updateOneTicket({ ...message, id: fields.id }));
      }
    }
    else if (isProduct) {
      if (!fields.id) dispatch(createOneProduct(product));
      else dispatch(updateOneProduct({ ...product, id: fields.id }));
    }
    else {
      if (!fields.id) dispatch(createOneItem(product));
      else dispatch(updateOneItem({ ...product, id: fields.id }));
    }
    
    handleClose();
    dispatch(reset());
  };

  return (
    <>
      <Modal show={show} onHide={handleCloseAndClear}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{isMessage ? <Form isMessage /> : <Form />}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAndClear}>
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

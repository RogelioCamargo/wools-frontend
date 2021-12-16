import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createOneProduct } from "../reducers/productReducer";
import { createOneItem } from "../reducers/itemReducer";

const ModalForm = ({ show, handleClose, isProduct }) => {
  const [item, setItem] = useState({
    name: "",
    level: "0", 
    brand: ""
  });
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    handleClose();
    // console.log(item);
    if (isProduct) dispatch(createOneProduct(item));
    else dispatch(createOneItem(item));

    setItem({
      name: "",
      level: "0",
      brand: "",
    });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={item.name}
                onChange={({ target }) =>
                  setItem({ ...item, name: target.value })
                }
                placeholder="i.e. Orange Squeeze"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label htmlFor="inlineFormCustomSelect">Level</Form.Label>
              <Form.Select
                id="inlineFormCustomSelect"
                value={item.level}
                onChange={({ target }) =>
                  setItem({ ...item, level: target.value })
                }
              >
                <option value="0">Low</option>
                <option value="1">Medium</option>
                <option value="2">High</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Brand</Form.Label>
              <Form.Control type="text" name="brand" placeholder="Optional" />
            </Form.Group>
          </Form>
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

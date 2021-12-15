import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const ModalForm = ({ show, handleClose, createResource }) => {
  const [item, setItem] = useState({
    name: "",
    level: "0", 
    brand: ""
  });

  const handleSubmit = async () => {
    handleClose();
    await createResource({ ...item, level: Number(item.level) });
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

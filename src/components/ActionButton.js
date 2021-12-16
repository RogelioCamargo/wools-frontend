import React from "react";
import { OverlayTrigger, Button, Popover } from "react-bootstrap";

// components
import EllipsisIcon from "./EllipsisIcon";

const ActionButton = ({ onClickUpdate, onClickDelete }) => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Body className="d-flex flex-column">
        <Button variant="outline-warning" onClick={onClickUpdate}>
          Update
        </Button>
        <Button
          variant="outline-danger"
          className="mt-2"
          onClick={onClickDelete}
        >
          Delete
        </Button>
      </Popover.Body>
    </Popover>
  );

  return (
    <>
      <OverlayTrigger
        trigger="click"
        placement="top"
        overlay={popover}
        rootClose
      >
        <Button variant="light" className="bg-white border-0">
          <EllipsisIcon />
        </Button>
      </OverlayTrigger>
    </>
  );
};

export default ActionButton;
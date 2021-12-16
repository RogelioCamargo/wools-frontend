import React from "react";
import { OverlayTrigger, Button, Popover } from "react-bootstrap";

// components
import EllipsisIcon from "./EllipsisIcon";

const ActionButton = ({ onClickUpdate, onClickDelete }) => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Body className="d-flex flex-column">
        <Button variant="warning" onClick={onClickUpdate}>
          Update
        </Button>
        <Button variant="danger" className="mt-2" onClick={onClickDelete}>
          Delete
        </Button>
      </Popover.Body>
    </Popover>
  );

  return (
    <>
      <OverlayTrigger trigger="click" placement="top" overlay={popover}>
        <Button variant="light">
          <EllipsisIcon />
        </Button>
      </OverlayTrigger>
    </>
  );
};

export default ActionButton;
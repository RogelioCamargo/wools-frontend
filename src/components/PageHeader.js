import React from "react";
import { Button } from "react-bootstrap";

const PageHeader = ({ onClick, title, addButton }) => (
  <div className="d-flex mb-4">
    <h1 className="h3 mb-0 mr-2 align-center">{title}</h1>
    {addButton ? (
      <Button variant="primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-plus"
          viewBox="0 0 16 16"
        >
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      </Button>
    ) : null}
  </div>
);

export default PageHeader;
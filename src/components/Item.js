import React from "react";

// components
import ActionButton from "./ActionButton";

const Item = ({ title, date, level }) => {
  return (
    <div className="d-flex mb-2 justify-content-between">
      <div className="d-flex">
        <div
          className={
            level === 0
              ? "bg-danger"
              : level === 1
              ? "bg-warning"
              : "bg-muted"
          }
          style={{ width: "5px" }}
        ></div>
        <div className="px-2">
          <p className="m-0">{title}</p>
          <p className="m-0 text-muted text-9rem">{date}</p>
        </div>
      </div>
      <ActionButton />
    </div>
  );
};

export default Item;

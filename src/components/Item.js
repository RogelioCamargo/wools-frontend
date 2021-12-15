import React from "react";

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
      <div className="d-flex align-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-three-dots"
          viewBox="0 0 16 16"
        >
          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
        </svg>
      </div>
    </div>
  );
};

export default Item;

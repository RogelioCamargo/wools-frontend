import React from "react";

const Message = ({ message }) => {

	return (
    <div className="d-flex mb-2">
      <div
        className={
          message.level === 0
            ? "bg-danger"
            : message.level === 1
            ? "bg-warning"
            : "bg-muted"
        }
        style={{ width: "5px" }}
      ></div>
      <div className="px-2">
        <p className="m-0">{message.content}</p>
        <p className="m-0 text-muted text-9rem">{message.date}</p>
      </div>
    </div>
  );
}

export default Message;
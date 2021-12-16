import React from "react";
import { useDispatch } from "react-redux";

// action creators
import { deleteOneAnnouncement } from "../reducers/announcementReducer";
import { deleteOneReminder } from "../reducers/announcementReducer";
import { deleteOneTicket } from "../reducers/ticketReducer";
import { deleteOneProduct } from "../reducers/productReducer";
import { deleteOneItem } from "../reducers/itemReducer";

// components
import ActionButton from "./ActionButton";

const Item = ({ item, isMessage, isProduct }) => {
  const dispatch = useDispatch();

  const Level = () => (
    <div
      className={
        item.level === 0
          ? "bg-danger"
          : item.level === 1
          ? "bg-warning"
          : "bg-muted"
      }
      style={{ width: "5px" }}
    />
  );

  const MessageDisplay = ({ onClickUpdate, onClickDelete }) => (
    <div className="d-flex mb-2 justify-content-between">
      <div className="d-flex">
        <Level />
        <div className="px-2">
          <p className="m-0">{item.content}</p>
          <p className="m-0 text-muted text-9rem">{item.date}</p>
        </div>
      </div>
      <ActionButton
        onClickUpdate={onClickUpdate}
        onClickDelete={onClickDelete}
      />
    </div>
  );

  if (isMessage) 
    return (
      <MessageDisplay onClickDelete={() => console.log("PRODUCT ", item.id)} />
    );

  const ItemDisplay = ({ onClickUpdate, onClickDelete }) => (
    <div className="d-flex mb-2 justify-content-between">
      <div className="d-flex">
        <Level />
        <div className="px-2">
          <p className="m-0">{item.name}</p>
          <p className="m-0 text-muted text-9rem">{item.date}</p>
        </div>
      </div>
      <ActionButton
        onClickUpdate={onClickUpdate}
        onClickDelete={onClickDelete}
      />
    </div>
  );

  return (
    <>
      {isProduct ? (
        <ItemDisplay
          onClickDelete={() => dispatch(deleteOneProduct(item.id))}
        />
      ) : (
        <ItemDisplay 
          onClickDelete={() => dispatch(deleteOneItem(item.id))} 
        />
      )}
    </>
  );
};

export default Item;

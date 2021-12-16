import React from "react";
import { useDispatch } from "react-redux";

// action creators
import { updateOneAnnouncement, deleteOneAnnouncement } from "../reducers/announcementReducer";
import { updateOneReminder, deleteOneReminder } from "../reducers/reminderReducer";
import { updateOneTicket, deleteOneTicket } from "../reducers/ticketReducer";
import { updateOneProduct, deleteOneProduct } from "../reducers/productReducer";
import { updateOneItem, deleteOneItem } from "../reducers/itemReducer";

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
          <p className="m-0 text-muted h7">{item.date}</p>
        </div>
      </div>
      <ActionButton
        onClickUpdate={onClickUpdate}
        onClickDelete={onClickDelete}
      />
    </div>
  );

  if (isMessage) {
    const typeAnnouncementDelete = () => dispatch(deleteOneAnnouncement(item.id));
    const typeReminderDelete = () => dispatch(deleteOneReminder(item.id));
    const typeTicketDelete = () => dispatch(deleteOneTicket(item.id));
    return (
      <MessageDisplay
        onClickDelete={
          item.type === "reminder"
            ? typeReminderDelete
            : item.type === "ticket"
            ? typeTicketDelete
            : typeAnnouncementDelete
        }
      />
    );
  }

  const ItemDisplay = ({ onClickUpdate, onClickDelete }) => (
    <div className="d-flex mb-2 justify-content-between">
      <div className="d-flex">
        <Level />
        <div className="px-2">
          <p className="m-0">{item.name}</p>
          {item.brand && (
            <p className="m-0 text-muted h7">{item.brand}</p>
          )}
          <p className="m-0 text-muted h7">{item.date}</p>
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

import React from "react";
import { useDispatch } from "react-redux";

// action creators
import { deleteOneMessage } from "../reducers/messageReducer";
import { deleteOneProduct } from "../reducers/productReducer";
import { deleteOneItem } from "../reducers/suppliesReducer";
import { set } from "../reducers/fieldsReducer";
import { toggleProductModal } from "../reducers/modalReducer";
import { toggleMessageModal } from "../reducers/modalReducer";
import { toggleSuppliesModal } from "../reducers/modalReducer";

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
    return (
      <MessageDisplay
        onClickDelete={() => dispatch(deleteOneMessage(item.id))}
        onClickUpdate={() => {
          dispatch(toggleMessageModal());
          dispatch(set(item));
        }}
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
          onClickUpdate={() => {
            dispatch(toggleProductModal());
            dispatch(set(item))
          }}
        />
      ) : (
        <ItemDisplay 
          onClickDelete={() => dispatch(deleteOneItem(item.id))}
          onClickUpdate={() => {
            dispatch(toggleSuppliesModal());
            dispatch(set(item))
          }}
        />
      )}
    </>
  );
};

export default Item;

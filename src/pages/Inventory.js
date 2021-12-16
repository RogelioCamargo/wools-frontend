import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initializeProducts } from "../reducers/productReducer";

// components
import ItemList from "../components/ItemList";
import PageHeader from "../components/PageHeader";
import Header from "../components/Header";
import ModalForm from "../components/ModalForm";
import { Form } from "react-bootstrap";

const Inventory = () => {
  const [filter, setFilter] = useState("");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeProducts());
  }, [dispatch]);

  const products = useSelector(state => state.products);
  const criticals = products.filter((item) => !item.level);
  const matches = products.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className="w-75 mx-auto my-5">
      <PageHeader title="Inventory" addButton onClick={() => setShow(true)} />
      <div>
        <Header title="Critical" />
        <ItemList items={criticals} />
      </div>
      <Form.Control
        className="my-3"
        placeholder="Search"
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div>
        <Header title="Other" />
        <ItemList items={matches} />
      </div>
      <ModalForm
        show={show}
        handleClose={() => setShow(false)}
      />
    </div>
  );
};

export default Inventory;

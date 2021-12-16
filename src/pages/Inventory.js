import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initializeProducts } from "../reducers/productReducer";

// components
import ItemList from "../components/ItemList";
import PageHeader from "../components/PageHeader";
import Header from "../components/Header";
import { Form } from "react-bootstrap";

const Inventory = () => {
  const [filter, setFilter] = useState("");
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
      <PageHeader title="Inventory" addButton />
      <div>
        <Header title="Critical" />
        <ItemList items={criticals} isCritialList />
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
    </div>
  );
};

export default Inventory;

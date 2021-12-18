import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// action creators
import { initializeProducts } from "../reducers/productReducer";
import { toggleProductModal } from "../reducers/modalReducer";

// components
import ItemList from "../components/ItemList";
import PageHeader from "../components/PageHeader";
import ModalForm from "../components/ModalForm";
import Header from "../components/Header";
import { Form } from "react-bootstrap";

const Inventory = () => {
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeProducts());
  }, [dispatch]);

  const products = useSelector(state => state.products);
  const show = useSelector(state => state.modals.productModal);

  const criticals = products.filter((item) => !item.level);
  const matches = products.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className="w-75 mx-auto my-5">
      <PageHeader
        title="Inventory"
        onClick={() => dispatch(toggleProductModal())}
      />
      <div>
        <Header title="Critical" />
        <ItemList items={criticals} isCritialList isProduct />
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
        <ItemList items={matches} isProduct />
      </div>
      <ModalForm
        title="Add New Inventory Item"
        show={show}
        handleClose={() => dispatch(toggleProductModal())}
        isProduct
      />
    </div>
  );
};

export default Inventory;

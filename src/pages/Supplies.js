import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initializeItems } from "../reducers/suppliesReducer";

// components
import ItemList from "../components/ItemList";
import PageHeader from "../components/PageHeader";
import Header from "../components/Header";
import { Form } from "react-bootstrap";

const Supplies = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(initializeItems());
  }, [dispatch]);

  const supplies = useSelector(state => state.supplies);
  const criticals = supplies.filter(item => !item.level);
  const matches = supplies.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="w-75 mx-auto my-5">
      <PageHeader
        title="Supplies"
        onClick={() => console.log("Supplies")}
        addButton
      />
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

export default Supplies;

import React, { useState } from "react";
import { useResource } from "../hooks";

// components
import ItemList from "../components/ItemList";
import PageHeader from "../components/PageHeader";
import Header from "../components/Header";
import { Form } from "react-bootstrap";

const Inventory = () => {
  const [products] = useResource("http://localhost:3001/api/products");
  const [filter, setFilter] = useState("");

  const criticals = products.filter((item) => !item.level);
  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className="w-75 mx-auto my-5">
      <PageHeader
        title="Inventory"
        addButton
        onClick={() => console.log("Inventory")}
      />
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
        <ItemList items={filtered} />
      </div>
    </div>
  );
};

export default Inventory;

import React, { useState } from "react";
import { useResource } from "../hooks";

// components
import ItemList from "../components/ItemList";
import PageHeader from "../components/PageHeader";
import Header from "../components/Header";
import { Form } from "react-bootstrap";

const Supplies = () => {
  const [supplies] = useResource("http://localhost:3001/api/supplies");
  const [filter, setFilter] = useState("");

  const criticals = supplies.filter(item => !item.level);
  const filtered = supplies.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="w-75 mx-auto my-5">
      <PageHeader
        title="Supplies"
        onClick={() => console.log("Supplies")}
        addButton
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

export default Supplies;

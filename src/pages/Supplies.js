import React, { useState } from "react";
import { useResource } from "../hooks";

// components
import Item from "../components/Item";
import PageHeader from "../components/PageHeader";
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
        addButton
        onClick={() => console.log("Supplies")}
      />
      <div>
        <h2 className="h5 mb-2">Critical</h2>
        <div>
          {criticals.map((item) => (
            <Item
              key={item.id}
              title={item.name}
              level={item.level}
              date={item.date}
            />
          ))}
        </div>
      </div>
      <Form.Control
        className="my-3"
        placeholder="Search"
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div>
        <h2 className="h5 mb-2">Other</h2>
        <div>
          {filtered.map((item) => (
            <Item
              key={item.id}
              title={item.name}
              level={item.level}
              date={item.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Supplies;

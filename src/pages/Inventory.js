import React from "react";
import { useResource } from "../hooks";

import Item from "../components/Item";
import PageHeader from "../components/PageHeader";

const Inventory = () => {
  const [products] = useResource("http://localhost:3001/api/products");

  return (
    <div className="w-75 mx-auto my-5">
      <PageHeader
        title="Inventory"
        addButton
        onClick={() => console.log("Inventory")}
      />
      <div>
        <h2 className="h5">Critical</h2>
        <div>
          {products.map((item) => (
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

export default Inventory;

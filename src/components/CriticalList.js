import React from "react";

import Item from "../components/Item";

const CriticalList = ({ items, isMessage }) => {
  if (!items.length) 
		return <div className="text-muted">There are none that require attention.</div>;
  return (
    <>
      {isMessage ? (
        <div>
          {items.map((item) => (
            <Item
              key={item.id}
              title={item.content}
              level={item.level}
              date={item.date}
            />
          ))}
        </div>
      ) : (
        <div>
          {items.map((item) => (
            <Item
              key={item.id}
              title={item.name}
              level={item.level}
              date={item.date}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default CriticalList;
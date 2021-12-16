import React from "react";

import Item from "../components/Item";

const ItemList = ({ items, isCritialList, isMessage, isProduct }) => {
	if (!items.length && isCritialList) 
		return (
      <div className="text-secondary">There are none that require immediate attention.</div>
    );

	if (!items.length)
		return (
			<div className="text-secondary">There are no matches.</div>
		);
	
	return (
    <>
      {isMessage ? (
        <div>
          {items.map((item) => (
            <Item
              key={item.id}
              item={item}
							isMessage
            />
          ))}
        </div>
      ) : isProduct ? (
        <div>
          {items.map((item) => (
            <Item
              key={item.id}
              item={item}
							isProduct
            />
          ))}
        </div>
      ) : (
        <div>
          {items.map((item) => (
            <Item
              key={item.id}
              item={item}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ItemList;
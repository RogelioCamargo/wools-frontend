import React from "react";

import Item from "../components/Item";

const ItemList = ({ items, isMessage }) => (
	<>
		{
			isMessage ? 
			<div>
				{items.map((item) => (
					<Item
						key={item.id}
						title={item.content}
						level={item.level}
						date={item.date}
					/>
				))}
			</div> :
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
		}
	</>
);

export default ItemList;
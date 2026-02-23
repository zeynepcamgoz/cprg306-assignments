'use client'
import Item from "./Item.js";
import { useState } from "react";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState('name')
  const sortItem = [...items].sort((a, b) => {
    if (sortBy == "name") {
      return a.name.localeCompare(b.name)
    }
    else if (sortBy === "category") {
      return a.category.localeCompare(b.name)
    }
    return 0;
  })
  return (
    <div>
      <div className="flex gap-3 mb-5">
        Sort by the:
        <button onClick={() => setSortBy("name")}
        > name
        </button>
        <button onClick={() => setSortBy("category")}
        > category
        </button>
      </div>
      <ul>
        {sortItem.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}


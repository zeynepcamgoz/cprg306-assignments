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
      <div>
        Sort by the:
        <button onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded ml-2 mr-2 ${sortBy === "name"
            ? "bg-pink-700 text-white"
            : "bg-black dark:bg-white dark:text-black text-white"
            }`}
        > name
        </button>
        <button onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded ${sortBy === "category"
            ? "bg-pink-700 text-white"
            : "bg-black dark:text-black dark:bg-white text-white "
            }`}
        > category
        </button>
      </div >
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
    </div >
  );
}


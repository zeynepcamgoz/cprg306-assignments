'use client'
import { useState } from "react";
import itemsData from "./Items.json"
import NewItem from "./NewItem";
import ItemList from "./Itemlist";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prev) => [...prev, newItem]);
  };


  return (
    <main >
      <h1 className="text-3xl font-bold mb-6 text-center">
        Shopping List
      </h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}

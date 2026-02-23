'use client'
import { useState } from "react";
import Items from "./Items.json"
import NewItem from "./NewItem";
import Item from "./Item";
import ItemList from "./Itemlist";

export default function Page() {
  const [items, setItems] = useState(Items);

  const handleAddItem = (newItem) => {
    setItems((lastItem) => [...lastItem, newItem]);
  };

  return (
    <main className="min-h-screen p-8 transition-colors min-h-screen flex flex-col items-center ">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Shopping List
      </h1>
      <ItemList items={Items} />
    </main>
  );
}

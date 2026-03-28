"use client";

import { useState } from "react";
import itemsData from "./Items.json";
import NewItem from "./NewItem";
import ItemList from "./Itemlist";
import MealIdeas from "./MealIdeas";
import { useUserAuth } from "../../contexts/AuthContext";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prev) => [...prev, newItem]);
  };

  const handleItemSelect = (item) => {
    let cleanedName = item.name
      .split(",")[0]
      .trim()
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF])+/g,
        ""
      );

    setSelectedItemName(cleanedName);
  };

  const { user } = useUserAuth();

  if (!user) {
    return (
      <h1 className="flex items-center justify-center min-h-screen">
        You are not signed in!
      </h1>
    );
  }


  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>

      <div className="flex gap-10">
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}

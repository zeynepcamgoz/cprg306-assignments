"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const updateName = (event) => {
    setName(event.target.value);
  };

  const updateQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const updateCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const submissionObject = {
      name,
      quantity,
      category,
    };
    console.log(submissionObject);
    alert(`Added: ${name}, quantity: ${quantity}, category: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-pink-50">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-white p-8 w-full max-w-md rounded-2xl shadow-xl border border-pink-200 space-y-6"
      >
        <div className="flex flex-col">
          <label className="text-pink-700 font-medium mb-1">
            Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={updateName}
            required
            className="rounded-md border border-pink-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 p-2 outline-none transition text-black"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-pink-700 font-medium mb-1">
            Quantity:
          </label>
          <input
            type="number"
            min="1"
            max="99"
            value={quantity}
            onChange={updateQuantity}
            className="border border-pink-300 rounded-md px-3 py-2 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition text-black"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-pink-700 font-medium mb-1">
            Category:
          </label>
          <select
            value={category}
            onChange={updateCategory}
            className="border border-pink-300 rounded-md px-3 py-2 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition text-black"
          >
            <option>Produce</option>
            <option>Dairy</option>
            <option>Bakery</option>
            <option>Meat</option>
            <option>Frozen Foods</option>
            <option>Canned Goods</option>
            <option>Dry Goods</option>
            <option>Beverages</option>
            <option>Snacks</option>
            <option>Household</option>
            <option>Other</option>
          </select>
        </div>
        <div className="flex justify-center pt-4">
          <button
            type="submit"
            className="text-white px-6 py-2 text-sm font-semibold rounded-md bg-pink-500 hover:bg-pink-600 transition shadow-md"
          >
            +
          </button>
        </div>
      </form>
    </div>
  );
}

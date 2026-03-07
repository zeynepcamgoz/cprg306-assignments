"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [item, setItem] = useState({
    name: "",
    quantity: 1,
    category: "produce",
  })


  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      ...item,
      id: Math.random().toString(36).substring(2, 9)
    }
    onAddItem(newItem);
    const initialState = { name: "", quantity: 1, category: "produce" };
    setItem(initialState);
  }

  const options = [
    "Produce",
    "Dairy",
    "Bakery",
    "Meat",
    "Frozen Foods",
    "Canned Goods",
    "Dry Goods",
    "Beverages",
    "Snacks",
    "Household",
    "Other"
  ]

  return (
    <div className="flex items-center justify-center bg-white-50">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-white p-8 w-full max-w-md rounded-2xl shadow-xl border border-pink-200 space-y-6"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="text-pink-700 font-medium mb-1">
            Name:
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={item.name}
            onChange={handleChange}
            required
            className="rounded-md border border-pink-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 p-2 outline-none transition text-black"
          />
        </div>
        <div className="flex">
          <div className="flex flex-row mr-2">
            <label htmlFor="quantity" className="text-pink-700 font-medium mb-1">
              Quantity:
            </label>
            <input
              id="quantity"
              name="quantity"
              type="number"
              min="1"
              max="99"
              value={item.quantity}
              onChange={handleChange}
              className="border border-pink-300 rounded-md px-3 py-2 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition text-black"
            />
          </div>
          <div className="flex flex-row">
            <label htmlFor="category" className="text-pink-700 font-medium mb-1">
              Category:
            </label>
            <select
              id="category"
              name="category"
              value={item.category}
              onChange={handleChange}
              className="border border-pink-300 rounded-md px-3 py-2 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition text-black"
            >
              {options.map((optId) => (
                <option key={optId} value={optId}>
                  {optId}
                </option>
              ))}
            </select>
          </div>
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

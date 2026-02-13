"use client";
import { useState } from "react";


export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce")


  const updateName = (event) => {
    setName(event.target.value)
  };

  const updateQuantity = (event) => {
    setQuantity(event.target.value)
  };

  const updateCategory = (event) => {
    setCategory(event.target.value)
  };


  return (
    <form>
      <div>
        <label>
          Name:
          <input className="w-full p-2 rounded-md"
            type="text"
            value={name}
            onChange={updateName}
            required
          />
        </label>
      </div>
      <div>
        <label>
          <input className="w-full p-2 rounded-md"
            type="number"
            value={quantity}
            onChange={updateQuantity}
            required
          />

          <select
            value={category}
            onChange={updateCategory}
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </label>
      </div>
      <button type="submit" >+</button>
    </form>
  );
}
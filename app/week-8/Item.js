import React from "react";

export default function Item({ name, category, quantity, onSelect }) {
  return (
    <li
      onClick={onSelect}
      className="cursor-pointer p-2 border-b hover:bg-pink-100"
    >
      {name} | {category} | {quantity}
    </li>
  );
}
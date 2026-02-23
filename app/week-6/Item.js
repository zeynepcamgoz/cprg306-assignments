import React from "react";

export default function Item({ name, category, quantity }) {
  return (
    <li className=" rounded-lg border m-4 p-2 ">
      {name} | {category} | {quantity}
    </li>
  );
}
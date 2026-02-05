import React from "react";

export default function Item({ name, category, quantiy }) {
  return (
    <li>
      {name}{category}{quantiy}
    </li>

  );
}
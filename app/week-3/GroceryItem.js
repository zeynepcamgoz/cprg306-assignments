
export default function Item({ name, quantity, category }) {
  return (
    <li class=" border rounded p-4 max-w-md mx-auto flex flex-col">
      <div>{name}</div>
      <div>Quantity: {quantity}</div>
      <div>Category: {category}</div>
    </li>
  );
}
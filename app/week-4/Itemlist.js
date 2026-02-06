import Item from "./Item.js";
import Items from "./Items.json";

export default function ItemList() {
  return (
    <ul>
      {Items.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          category={item.category}
          quantity={item.quantity}
        />
      ))}
    </ul>
  );
}


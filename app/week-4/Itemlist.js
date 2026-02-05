import Item from "./Item.js";
import Items from "./Items.json";

export default function ItemList() {
  return (
    <>
      {Items.map((item) => (
        <Item
          id={item.id}
          name={item.name}
          category={item.category}
          quantity={item.quantity}
        />
      ))}
    </>
  );
}


import ItemList from "./Itemlist"

export default function Page() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-xl font-bold ">Shopping List</h1>
      <ItemList />
    </main>
  );
}
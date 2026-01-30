
import GroceryItemList from './GroceryItemList';
import GroceryItem from './GroceryItemList';


export default function Page() {
  return (
    <main>
      <h1 class="text-center font-bold text-2xl mb-6 mt-6">Shopping List</h1>
      <GroceryItemList></GroceryItemList>
    </main>
  );
}

//Tailwind styling
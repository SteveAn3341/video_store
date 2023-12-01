import inventory from "./data/inventory.json";
import InventoryContainer from "./components/InventoryContainer";
import "./App.css";



export default function App() {
  console.log(inventory)
  return (
    <div>
      <h1>Video Store</h1>
      <InventoryContainer inventory ={inventory}/>
    </div>
  );
}
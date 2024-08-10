import './App.tsx';
import {MenuItem} from './components/MenuItem.tsx';
import {OrderContents} from './components/OrderContents.tsx';
import {OrderTotals} from './components/OrderTotals.tsx';
import {TipOrderForm} from './components/TipOrderForm.tsx';
import {menuItems} from './data/db.ts';
import useOrder from './Hooks/useOrder.ts';
import './index.css';
function App() {
  // console.log('menuItems', menuItems);
  const {order, addItem, removeItem, tip, setTip, placeOrder} = useOrder();

  return (
    <>
      <header className="bg-purple-400 py-5">
        <h1 className="text-center text-4xl font-black">Tip Calcutator</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 lg:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black text-center ">Menu</h2>
          <div className="space-y-2 mt-5">
            {menuItems.map(item => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className="p-5 border border-dashed border-r-purple-400 rounded-lg space-y-10">
          {order.length > 0 ? (
            <>
              <OrderContents order={order} removeItem={removeItem} />
              <TipOrderForm setTip={setTip} tip={tip} />
              <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
            </>
          ) : (
            <p className="text-center bg-red-400 text-white font-black p-5 rounded-lg">
              Empty order. <span>Please Select your order</span>
            </p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;


import { useDispatch, useSelector } from 'react-redux';
import ItemList from "./ItemList";
import { clearCart } from '../utilis/cartSlice';



const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);
  
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      
    <div className='p-4 flex flex-col justify-center items-center'>
    <h1 className='text-center'>Cart</h1>
      <button className='bg-slate-200 text-green-600 px-4 py-2 rounded shadow' onClick={handleClearCart}>Clear Cart</button>
      {cartItems.length === 0 && (<p className='mt-4'>Your cart is empty, Please add some items!</p>)}
      <div>
        <ItemList items={cartItems} />
      </div>
    </div>

    </div>
  )
}

export default Cart
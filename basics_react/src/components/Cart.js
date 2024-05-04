import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center">
      <h1 className="p-2 m-2 font-bold">Cart</h1>
      {cartItems.length > 0 && (
        <button
          onClick={handleClearCart}
          className="bg-black text-white rounded-md w-20 h-[30px]"
        >
          Clear Cart
        </button>
      )}
      {cartItems.length > 0 ? (
        <div className="w-6/12 m-auto">
          <ItemList items={cartItems} />
        </div>
      ) : (
        <h1 className="m-3">Cart is Empty Add something to showup here</h1>
      )}
    </div>
  );
};

export default Cart;

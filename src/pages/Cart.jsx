import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../features/cartSlice";
import { Link } from "react-router-dom";

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  if (cart.length === 0) {
    return <h2 className="text-center mt-5 text-light">🛒 Your cart is empty</h2>;
  }

  return (
    <div>
      <h2 className="mb-4 text-light">Your Cart</h2>
      <ul className="list-group">
        {cart.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center bg-dark text-light">
            <div>
              {item.name} - PKR{item.price}
              <input
                type="number"
                value={item.quantity}
                min="1"
                className="form-control d-inline-block ms-3 mt-2"
                style={{ width: "80px" }}
                onChange={(e) =>
                  dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
                }
              />
            </div>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="btn btn-danger btn-sm mt-2"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-3 text-center">
        <button onClick={() => dispatch(clearCart())} className="btn btn-secondary me-2 mb-2">
          Clear Cart
        </button>
        <Link to="/checkout" className="btn btn-success">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}

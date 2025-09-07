import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import Card from "../components/Card";

const products = [
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Phone", price: 40000 },
  { id: 3, name: "Headphones", price: 2000 },
  { id: 4, name: "Television", price: 50000 },
  { id: 5, name: "Refrigerator", price: 90000 },
  { id: 6, name: "Microwaves", price: 20000 },
  { id: 7, name: "AC", price: 160000 },
  { id: 8, name: "Calculator", price: 2000 },
  { id: 9, name: "Computer", price: 70000 },
  { id: 10, name: "Washing machine", price: 95000 },
  { id: 11, name: "Ceiling fan", price: 7000 },
  { id: 12, name: "Printer", price: 8000 },
];

export default function Products() {
  const dispatch = useDispatch();

  return (
    <div className="row">
      {products.map(p => (
        <div className="col-md-4 mb-4" key={p.id}>
          <Card title={p.name} price={p.price}>
            <button
              onClick={() => dispatch(addToCart(p))}
              className="btn btn-primary w-100"
            >
              Add to Cart
            </button>
          </Card>
        </div>
      ))}
    </div>
  );
}

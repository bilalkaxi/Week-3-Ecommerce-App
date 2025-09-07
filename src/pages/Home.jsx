import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center mt-5">
      <h1 className=" fw-bold home__title">SELCORE</h1>
      <p className="lead  text-light">
        Your Ultimate Destination for the Best Value Electronics and Gadgets
      </p>
      <div className="mt-4">
        <Link to="/products" className="btn btn-secondary btn-lg me-3">
          Browse Products
        </Link>
        <Link to="/cart" className="btn btn-success btn-lg">
          View Cart
        </Link>
      </div>
      
    </div>
  );
}

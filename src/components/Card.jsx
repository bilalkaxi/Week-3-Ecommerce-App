export default function Card({ title, price, children }) {
  return (
    <div className="card h-100">
      <div className="card-body text-center inbox">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-muted">{price} PKR</p>
        {children}
      </div>
    </div>
  );
}

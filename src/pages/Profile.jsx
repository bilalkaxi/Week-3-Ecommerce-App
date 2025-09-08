import { useState } from "react";

export default function Profile() {
    const [loggedIn,setLogin] = useState(false);
    const [btnn,setbtnn] = useState('login')
  return (
    <div className="mt-5 text-center">
      {loggedIn ? (
        <h2 className="text-light">👤 Welcome back, User!</h2>
      ) : (
        <h2 className="text-danger">🔒 Please log in to view your profile</h2>
      )}
      <button className="btn btn-primary" onClick={()=>{setLogin(!loggedIn),setbtnn(btnn ? 'Sign out' : "Login" )}}>{btnn}</button>
    </div>
  );
}

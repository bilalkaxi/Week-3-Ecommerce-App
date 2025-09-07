export default function Profile() {
  const loggedIn = false; 
  return (
    <div className="mt-5">
      {loggedIn ? (
        <h2>👤 Welcome back, User!</h2>
      ) : (
        <h2 className="text-danger">🔒 Please log in to view your profile</h2>
      )}
    </div>
  );
}

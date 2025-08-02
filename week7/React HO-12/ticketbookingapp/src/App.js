import React, { useState } from 'react';

const flights = [
  { id: 1, from: 'Mumbai', to: 'Delhi', time: '09:00 AM', price: 5000 },
  { id: 2, from: 'Bengaluru', to: 'Hyderabad', time: '12:30 PM', price: 3200 },
  { id: 3, from: 'Chennai', to: 'Kolkata', time: '05:45 PM', price: 6100 },
];

function FlightList({ canBook }) {
  return (
    <div>
      <h3>Available Flights</h3>
      {flights.map(f => (
        <div key={f.id}>
          <strong>{f.from} → {f.to}</strong> at {f.time} | ₹{f.price}
          <div>
            {canBook ? (
              <button onClick={() => alert(`Ticket booked for flight ${f.id}`)}>Book Ticket</button>
            ) : (
              <i>Login to book</i>
            )}
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}

function GuestPage({ onLogin }) {
  return (
    <div>
      <h2>Guest View</h2>
      <p>Welcome, Guest! Please login to book tickets.</p>
      <FlightList canBook={false} />
      <button onClick={onLogin}>Login</button>
    </div>
  );
}

function UserPage({ onLogout }) {
  return (
    <div>
      <h2>User Dashboard</h2>
      <p>You are logged in. Book your flights below:</p>
      <FlightList canBook={true} />
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Ticket Booking App</h1>
      {isLoggedIn ? (
        <UserPage onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <GuestPage onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;

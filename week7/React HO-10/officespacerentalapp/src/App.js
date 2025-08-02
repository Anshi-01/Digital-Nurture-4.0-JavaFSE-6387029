// src/App.js
import React from "react";

function App() {
  const heading = <h1>Office Space Rental App</h1>;

  const imageUrl =
    "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const office1 = {
    name: "Sunshine Workspace",
    rent: 55000,
    address: "Bangalore, India"
  };

  const officeList = [
    { name: "WeWork", rent: 45000, address: "Mumbai" },
    { name: "Innov8", rent: 62000, address: "Delhi" },
    { name: "Awfis", rent: 70000, address: "Hyderabad" }
  ];

  const rentStyle = (rent) => {
    return {
      color: rent < 60000 ? "red" : "green",
      fontWeight: "bold"
    };
  };

  return (
    <div style={{ textAlign: "start", fontFamily: "Arial" }}>
      {heading}
      <img src={imageUrl} alt="Office" style={{ width: "50%", borderRadius: "8px" }} />

      <h2>Featured Office</h2>
      <p><strong>Name:</strong> {office1.name}</p>
      <p style={rentStyle(office1.rent)}><strong>Rent:</strong> ₹{office1.rent}</p>
      <p><strong>Address:</strong> {office1.address}</p>

      <h2>All Offices</h2>
      {officeList.map((office, index) => (
        <div key={index} style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
          <p><strong>Name:</strong> {office.name}</p>
          <p style={rentStyle(office.rent)}><strong>Rent:</strong> ₹{office.rent}</p>
          <p><strong>Address:</strong> {office.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

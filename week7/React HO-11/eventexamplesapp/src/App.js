import React, { useState } from 'react';

function App() {
  // Counter state
  const [count, setCount] = useState(0);

  // Currency converter state
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState(null);

  // Static conversion rate: 1 Euro = 90 INR (you can update this to current rate)
  const INR_PER_EURO = 90;

  // Handlers for counter
  const increment = () => {
    setCount(prev => prev + 1);
  };

  const sayHello = () => {
    alert('Hello! This is a static message.');
  };

  // "Increase" button should invoke multiple methods
  const handleIncrease = () => {
    increment();
    sayHello();
  };

  const handleDecrease = () => {
    setCount(prev => prev - 1);
  };

  // Say Welcome with argument
  const sayWelcome = (msg) => {
    alert(`Welcome ${msg}`);
  };

  // Synthetic event "OnPress": in web React it's onClick; if you intended React Native it would be onPress.
  const handleOnPress = (event) => {
    // Demonstrating synthetic event usage
    console.log('Synthetic event type:', event.type);
    alert('I was clicked');
  };

  // Currency conversion submit handler
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent form default
    const rupeesValue = parseFloat(rupees);
    if (isNaN(rupeesValue)) {
      alert('Please enter a valid number');
      return;
    }
    const converted = rupeesValue / INR_PER_EURO;
    setEuros(converted.toFixed(2));
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '600px', margin: 'auto' }}>
      <h1>Event Examples App</h1>

      {/* Counter section */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Counter</h2>
        <p>Current value: {count}</p>
        <button onClick={handleIncrease} style={{ marginRight: '0.5rem' }}>
          Increase (multiple actions)
        </button>
        <button onClick={handleDecrease}>Decrement</button>
      </section>

      {/* Say Welcome */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Say Welcome</h2>
        <button onClick={() => sayWelcome('to the lab!')}>Say Welcome</button>
      </section>

      {/* Synthetic event OnPress (mapped to onClick) */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Synthetic Event Example</h2>
        <button onClick={handleOnPress}>Click me (OnPress equivalent)</button>
      </section>

      {/* Currency Converter */}
      <section style={{ marginBottom: '2rem'}}>
        <h2 style={{color: "green"}}>Currency Converter (INR → Euro)</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '0.5rem' }}>
            <label>
              Indian Rupees:{' '}
              <input
                type="text"
                value={rupees}
                onChange={(e) => setRupees(e.target.value)}
                placeholder="e.g., 900"
              />
            </label>
          </div>
          <button type="submit">Convert</button>
        </form>
        {euros !== null && (
          <p>
            ₹{rupees} = €{euros} (using rate 1€ = ₹{INR_PER_EURO})
          </p>
        )}
      </section>
    </div>
  );
}

export default App;

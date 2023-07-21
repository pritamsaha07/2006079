import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [numbers, setNumbers] = useState([]);
  const apiUrl = 'http://localhost:8008/numbers';

  const handleFetchNumbers = async () => {
    const urls = [
      'http://20.244.56.144/numbers/primes',
      'http://20.244.56.144/numbers/fibo',
      'http://20.244.56.144/numbers/odd',
      'http://20.244.56.144/numbers/rand',
    ]; 

    try {
      const response = await axios.get(apiUrl, {
        params: { url: urls },
        timeout: 500,
      });

      setNumbers(response.data.numbers);
    } catch (error) {
      console.error('Error fetching numbers:', error.message);
      setNumbers([]);
    }
  };

  return (
    <div>
      <h1>Number Management Service</h1>
      <button onClick={handleFetchNumbers}>Fetch Numbers</button>
      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// src/components/ApiQueryComponent
import React, { useState } from 'react';
import axios from 'axios';

const ApiQueryComponent = () => {
  const [response, setResponse] = useState('');

  const fetchData = async () => {
    try {
      const result = await axios.get('http://http://127.0.0.1:8000/logs');
      setResponse(JSON.stringify(result.data, null, 2));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <pre>{response}</pre>
    </div>
  );
};

export default ApiQueryComponent;

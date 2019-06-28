import React, { useState } from 'react';
import { getCustomer } from './api/userApi';
import './App.css';
import CustomerCard from './customer';

function App() {
  const [user, setUser] = useState(null);
  getCustomer(1)
    .then(response => {
      setUser(response);
    });

  return (
    <div className="App">
      <header className="App-header">
        <CustomerCard user={user}>
        </CustomerCard>
      </header>
    </div>
  );
}

export default App;

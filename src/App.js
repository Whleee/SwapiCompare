import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search';

function App() {
    const [people, setPeople] = useState([]);

  return (
    <div className="App">
        <div className="App-header">StarCompare</div>
      <Search />
    </div>
  );
}

export default App;

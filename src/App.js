// src/App.js
import React from 'react';
import './App.css';
import NewsSearch from './component/NewsSearch';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Kedar's News Search App</h1>
          <NewsSearch />
        </header>
      </div>
  );
}

export default App;
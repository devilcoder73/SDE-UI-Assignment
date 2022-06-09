import React from 'react';
import logo from './logo.svg';
import './App.css';
import { JobSearch } from './features/job-search/JobSearch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="GigVistas Logo" />
        <JobSearch/>
      </header>
    </div>
  );
}

export default App;

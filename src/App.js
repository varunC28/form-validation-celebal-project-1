import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './components/form-page/Form';
import Success from './components/success-page/Success';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark-mode', darkMode);
  };

  return (
    <Router>
      <div className="app-container">
        <button className="mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? 'Dark Mode' : 'Light Mode'}
        </button>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
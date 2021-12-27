import React from 'react';
import './App.css';
import { DefaultPage } from './Components/DefaultPage';
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <DefaultPage />
      </div>
    </BrowserRouter>
  );
}

export default App;

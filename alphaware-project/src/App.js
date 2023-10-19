import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductsLists from './components/ProductsLists';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductsLists />
    </div>
  );
}

export default App;

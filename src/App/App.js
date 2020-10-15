import React from 'react';
import Homepage from './Components/Homepage';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;

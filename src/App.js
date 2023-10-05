import React from 'react';
import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Menu from './components/Menu';


function App() {
  return (
    <>
      <Nav/>
      <Main />
      <Menu/>
      <Footer/>
    </>
  );
}

export default App;

import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;

import './App.css';
import './index.css'
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <BrowserRouter>
     <Header />
     <Nav />
     <Main />
     <Footer />
     </BrowserRouter>
  );
}

export default App;

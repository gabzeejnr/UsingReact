import {useState} from 'react';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import Body from './Body/Body.jsx';
import MobileHeader from './Header/MobileHeader.jsx';

function App() {
  return(
    <div className="App">
      <MobileHeader />
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App;
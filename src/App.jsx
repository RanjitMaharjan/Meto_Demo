import React from 'react';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Contents from './components/contents/Contents';
import Cards from './components/cards/Cards';
import Faq from './components/faq/Faq';
import Footer from './components/footer/Footer';
// import Scroll from './components/scroll/Scroll';

const App = () => {
  return (
    <>
        <Nav />   
        <Header /> 
        <Cards/>
        <Contents />
        <Faq />
        <Footer />
        {/* <Scroll /> */}

    </>
  )
}

export default App

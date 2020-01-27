import React from 'react';

// Import all components
import About from './components/about/About';
import Header from './components/header/Header';
import News from './components/news/News';
import Sponsors from './components/sponsors/Sponsors';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

// Import Styles
import './scss/reset.scss';
import './scss/style.scss';

//set title of app
document.title = process.env.REACT_APP_NAME
function App() {
  return (
    <div className="App">
      <Header />
      <News />
      <About />
      <Sponsors />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

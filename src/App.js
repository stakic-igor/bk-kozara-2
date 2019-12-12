import React from 'react';

// Import all components
import About from './components/about/About';
import Header from './components/header/Header';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

// Import Styles
import './scss/reset.scss';
import './scss/style.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

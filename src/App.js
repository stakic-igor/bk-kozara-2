import React from 'react';

// Import all components
import About from './components/about/about';
import Header from './components/header/header';
import Footer from './components/footer/Footer';

// Import Styles
import './scss/reset.scss';
import './scss/style.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default App;

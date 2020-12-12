import logo from './logo.svg';
import React from 'react';
import Nav from './containers/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {

      return(
        <div>
          <Nav />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      );
    }


export default App;
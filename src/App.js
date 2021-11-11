import React from 'react';
import './assets/css/style.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import City from './pages/City';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/city/:id" component={City} />
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;

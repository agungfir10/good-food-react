import React from 'react';
import './assets/css/style.css';
import NavBar from './components/NavBar';

import Home from './pages/Home';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Home />
      </React.Fragment>
    );
  }
}

export default App;

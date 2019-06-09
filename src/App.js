import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './style.scss';
import './App.css';

// import components
import Aside from './components/Aside';
import Main from './components/Main';

function App() {
  return (
    <Router>
        <div className="profileWrapper d-lg-flex">
            <Aside />
            <Main />
        </div>
    </Router>
  );
}

export default App;

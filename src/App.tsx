import React from 'react';
import logo from './logo.svg';
import About from './about/about';
import './App.css';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouteObject
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        {/* <Route path='/' element={< Home />}></Route> */}
        <Route path='/about' element={< About />}></Route>
        {/* <Route path='/contact' element={< Contact />}></Route> */}
      </Routes>
      </div>
    </Router>
  );
}

export default App;

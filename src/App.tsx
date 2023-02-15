import React from 'react';
import logo from './logo.svg';
import About from './info/info';
import './App.css';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import CountriesComponent from './countries/countries.component';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path='/' element={<CountriesComponent />}></Route>
        <Route path='/about' element={< About />}></Route>
        {/* <Route path='/contact' element={< Contact />}></Route> */}
      </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import store from './Redux/ConfigureStore';
import Details from './pages/Details';
import Home from './pages/Home';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Nav />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            ;
            <Route path="/details" element={<Details />} />
            ;
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default App;

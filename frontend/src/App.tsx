import React from 'react';

import './styles/App.css'
 
import {BrowserRouter} from 'react-router-dom'

import Aside from './components/Aside'
import Routes from './routes'

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Aside></Aside>
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

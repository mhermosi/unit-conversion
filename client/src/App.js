import React from 'react';
import './App.css';
import UnitConversionForm from './components/unit-conversion-form';

const Api = require('./services/api').Api;

const App = () => {
  return (
    <div className="App">
      <UnitConversionForm api={Api}/>
    </div>
  );
}

export default App;

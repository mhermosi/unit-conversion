import React from 'react';
import './App.css';
import Api from './services/api';
import UnitConversionForm from './components/unit-conversion-form';

function App() {
  return (
    <div className="App">
      <UnitConversionForm api={Api}/>
    </div>
  );
}

export default App;

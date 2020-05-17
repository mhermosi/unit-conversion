import React from 'react';
import './App.css';
import Header from './components/header';
import MainPageLayoyut from './layouts/main';



const App = () => {
  return (
    <div className="App">
      <Header />
      <MainPageLayoyut />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/header';
import MainPageLayout from './layouts/main';


const App = () => {
  return (
    <div className="App">
      <Header />
      <MainPageLayout />
    </div>
  );
}

export default App;

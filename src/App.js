import React from 'react';
import Box1 from './components/Box1'
import Box2 from './components/Box2'
import './App.css';

function App() {

  return (
    <div className="container" >
    <h1>Please scroll right or down</h1>
      <div className="section-1">
        
        <Box1/>
      </div>
      <div className="section-2">
        <Box2/>
      </div>
    </div>
  );
}

export default App;

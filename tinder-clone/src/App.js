import React from 'react';
import './App.css';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     {/* Header */}
     <Header />
     <Routes>
      <Route path='/'><h1>I am the chat page</h1></Route>

      <Route path='/chat'><h1>I am homepage</h1></Route>
     </Routes>
     {/* Tinder Cards */}
     {/* Buttons below tinder cards */}

     {/* Chats screen */} 
     {/* Individual chat screen */}
    </div>
  );
}

export default App;

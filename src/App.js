import logo from './logo.svg';
import './App.css';
import { useState,useEffect,useReducer,useRef } from 'react';
import {Link,Outlet } from 'react-router-dom';
function Home()
{
  return(
    <div>
<nav>
  <Link to="/about">About</Link>
  <Link to="/contact">Contact</Link>
</nav>

      <h1>My Home</h1>
    </div>
  );
}


export function AboutUs()
{
  return(
    <div>
        <Link to="/">Home</Link>
      <Link to="/about">About</Link>
  <Link to="/contact">Contact</Link>
      <h1>AboutUs</h1>
      <Outlet></Outlet>
    </div>
  );
}

export function History()
{
  return(
    <div>
      <h1>Our History</h1>
    </div>
  );
}

export function ContactUs()
{
  return(
    <div>
       <Link to="/">Home</Link>
      <Link to="/about">About</Link>
  <Link to="/contact">Contact</Link>
      <h1>Contact Us</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
     <Home></Home>
    </div>
  );
 }

export default App;

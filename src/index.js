import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { ContactUs,History } from './App';
import { AboutUs } from './App';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Routes>
  <Route path='/' element={<App></App>}></Route>
  <Route path='/about' element={<AboutUs></AboutUs>}>
    <Route path="history" element={<History></History>}></Route>
  </Route>
  <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
</Routes>
</BrowserRouter>

);


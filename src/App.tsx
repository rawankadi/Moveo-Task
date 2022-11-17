import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import HomePage from './Components/AllPages/HomePage';
import StudentLogin from './Components/AllPages/StudentLogin';

function App() {
  return (
    <Layout/>
  );
}

export default App;

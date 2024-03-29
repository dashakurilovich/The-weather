import React from 'react';
import { Route, Routes } from "react-router";
import { Home } from './pages/Home/Home';
import { MonthStatistics } from './pages/MonthStatistics/MonthStatistics';
import { Header } from './shader/Header/Header';

function App() {
  return (
    <div className="global_container">
      {/* <Popup /> */}
      <div className="container">
        <Header />
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/month-statistics" element={<MonthStatistics />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;


import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

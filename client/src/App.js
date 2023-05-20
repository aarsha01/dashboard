import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard';
// import DropdownComponent from './components/dropdown';
import DropdownLayout from './components/Dropdownlayout';
import Label from './components/label';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
             <Route element={<DropdownLayout />} >
	<Route path='/' exact element={<Dashboard />} />
	<Route path='/event/:id' exact element={<Label />} />
          </Route> 
        </Routes> 
  
      </BrowserRouter>
    </div>
  );
}

export default App;
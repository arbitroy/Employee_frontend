import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import Update from './Pages/Update';
import Register from './Pages/Register';
import View from './Pages/View';
const App = () => {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="employees" element={<div className='container'><ListEmployeeComponent/></div>} />
      <Route path="register" element={<Register/>} />
      <Route path="/update-employee/:id" element={<Update />} />
      <Route path="/view-employee/:id" element={<View />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

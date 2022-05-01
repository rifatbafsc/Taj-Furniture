import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}>Home</Route>
        <Route path="/home" element={<Home></Home>}>Home</Route>
        <Route path="/Inventory" element={<Home></Home>}>Home</Route>
        <Route path="/Login" element={<Home></Home>}>Home</Route>
        <Route path="*" element={<Home></Home>}>Home</Route>
      </Routes>
       
    </div>
  );
}

export default App;

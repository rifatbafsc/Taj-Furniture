import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import ItemDetails from './Components/ItemDetails/ItemDetails';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import ManageItems from './Components/ManageItems/ManageItems';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/blogs" element={<Inventory></Inventory>}></Route>
        <Route path="/manageitems" element={<ManageItems></ManageItems>}></Route>
        <Route path="/login" element={<Home></Home>}></Route>
        <Route path="/items/:id" element={<ItemDetails></ItemDetails>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
       
    </div>
  );
}

export default App;

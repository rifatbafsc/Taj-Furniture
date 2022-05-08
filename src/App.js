import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import ItemDetails from './Components/ItemDetails/ItemDetails';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import RestockItems from './Components/RestockItems/RestockItems';
import AddItems from './Components/AddItems/AddItems';
import MyItems from './Components/MyItems/MyItems';
import Blogs from './Components/Blogs/Blogs';
import Login from './Components/Login/Login';
import PasswordReset from './Components/PasswordReset/PasswordReset';
import Signup from './Components/Signup/Signup';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/restockitems" element={<RestockItems></RestockItems>}></Route>
        <Route path="/additems" element={<AddItems></AddItems>}></Route>
        <Route path="/myitems" element={<MyItems></MyItems>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>} ></Route>
        <Route path='/reset' element={<PasswordReset></PasswordReset>} ></Route>
        <Route path="/items/:id" element={<ItemDetails></ItemDetails>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
       
    </div>
  );
}

export default App;

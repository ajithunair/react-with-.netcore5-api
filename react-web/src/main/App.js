//import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from  "react-router-dom";
import HouseAdd from "../components/HouseAdd";
import HouseDetail from "../components/HouseDetail";
import HouseEdit from "../components/HouseEdit";
import HouseList from '../components/HouseList';
import './App.css';
import Header from './Header';

function App() {
  return (
    <BrowserRouter>
      <div className="Container">
        <Header subtitle='Providing houses all over the world' />
        <Routes>
          <Route path='/' element={<HouseList />}></Route>
          <Route path="/houses/:id" element={<HouseDetail />}></Route>
          <Route path="/houses/add" element={<HouseAdd />}></Route>
          <Route path="/houses/edit/:id" element={<HouseEdit />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

//import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from  "react-router-dom";
import HouseDetail from "../components/HouseDetail";
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

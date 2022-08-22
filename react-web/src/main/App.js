//import logo from './logo.svg';
import HouseList from '../components/HouseList';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="Container">
      <Header subtitle='Providing houses all over the world' />
      <HouseList />
    </div>
  );
}

export default App;

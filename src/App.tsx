import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import HousingScreen from './screens/HousingScreen';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/accueil" />} />
          <Route path='/accueil' element={<HomeScreen />} />
          <Route path='/details' element={<HousingScreen />} />
          <Route path='/apropos' element={<AboutScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import data from "./data.json";

function App() {
  const locations = data.locations;

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/accueil" />} />
          <Route path='/accueil' element={<HomeScreen locations={locations} />} />
          <Route path='/apropos' element={<AboutScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

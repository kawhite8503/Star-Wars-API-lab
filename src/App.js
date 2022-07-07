import './App.css';
import { Routes, Route } from 'react-router-dom';
import StarshipList from './pages/StarshipList/StarshipList';
import NavBar from './components/NavBar/NavBar';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails'

function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<StarshipList />} />
        <Route path="/starship" element={<StarshipDetails />} />
      </Routes>
    </>
  );
}

export default App;

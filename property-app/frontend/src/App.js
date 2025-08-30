import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import PropertiesPage from "./components/PropertiesPage";
import AddPage from "./components/AddPage";
import PropertyDetailPage from "./components/PropertyDetailPage";
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/properties/:id" element={<PropertyDetailPage />} />
        <Route path="/add" element={<AddPage />} />
      </Routes>
    </div>
  );
}

export default App;

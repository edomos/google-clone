import './App.css';
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from './pages/SearchPage';

function App() {
  return (
    //BEM
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search" element={<SearchPage />} />
        </Routes>
      </BrowserRouter >

    </div>

  );
}

export default App;

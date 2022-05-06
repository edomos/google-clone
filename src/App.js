import './App.css';
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    //BEM
    <div className="app">
      <BrowserRouter>

        <Routes>
          <Route exact path="/search" element={ <h1>This is the search page</h1> }/>
        </Routes>

        {/* Home (the one with the search on) */}
        <Home />
        {/* Search Page (Result Page) */}

        </BrowserRouter >
    </div>
      
      );
}

export default App;

import './App.css';
import MovieContext from "./context/MovieContext";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import NotFound from "./components/NotFound";
import SuggestedContent from "./components/SuggestedContent";

function App() {
  return (
      <MovieContext>
        <BrowserRouter>
            <Header/>
              <Routes>
                  <Route path="/" element={<SuggestedContent />} />
                  <Route path='/search/:searchTerm' element={<Item />} />
                  <Route path='*' element={<NotFound replace/>} />
              </Routes>
          </BrowserRouter>
        </MovieContext>
  );
}

export default App;

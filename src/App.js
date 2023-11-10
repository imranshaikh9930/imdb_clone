
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./components/headers/Header";
import Home from "./pages/home/Home";
import MovieList from "./components/MovieList/MovieList";
import Movie from './pages/movieDetail/movie';

function App() {
  return (
    <Router>
      <Header/>
      <Routes >
 
        <Route path="/" element={ <Home/>  }/>
        <Route path="movie/:id" element={<Movie />}></Route>
        <Route path="movies/:type" element={  <MovieList/> }/>
        <Route path="/*" element={ <h1>Error</h1> }/>
      </Routes>
      </Router>
  );
}

export default App;

import "./App.css";
import Nav from "./Component/Navbar/NavBar";
import MovieList from "./Component/Movielist/MovieList";
import React, {useState} from "react";
function App() {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState({});
  const handlesearch = (val) => {
    setSearch(val);
  };
  const handleMovie = (x) => {
    setMovie(x);
  };
  return (
    <div>
      <Nav handlesearch={handlesearch} handleMovie={handleMovie} />
      <MovieList movie={movie} search={search} />
    </div>
  );
}

export default App;

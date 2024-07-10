import { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Spinner from "./components/Spinner";

export default function App() {
  const [isMovieListShown, setIsMovieListShown] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setIsMovieListShown(!isMovieListShown)}>
        {isMovieListShown ? "hide" : "show"}
      </button>
      {isMovieListShown && <MovieList />}
    </div>
  );
}

// export default function App() {
//   const [isLoading, setIsLoading] = useState(false);
//   return (
//     <div className="App">
//       {isLoading ? <Spinner /> : <MovieList />}
//     </div>
//   );
// }

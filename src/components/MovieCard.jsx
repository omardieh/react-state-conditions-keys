export default function MovieCard(props) {
  const { movie, clickToDelete } = props;

  function generateScoreLabel(score) {
    if (score > 9) {
      return <span className="green">9+</span>;
    } else if (score < 7) {
      return <span className="red">{score}</span>;
    } else {
      return <span className="black">{score}</span>;
    }
  }
  const generateScore = (score) => {
    return (
      <span className={score > 9 ? "green" : score < 7 ? "red" : "black"}>
        {score > 9 ? "9+" : score < 7 ? score : score}
      </span>
    );
  };
  return (
    <div className="MovieCard">
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      {/* <p>Rating: {movie.IMDBRating}</p> */}
      <p>
        {movie.hasOscars
          ? "Got the Oscar Award!"
          : "Great movie but no Oscars!"}
      </p>
      <p>Rating: {generateScore(movie.IMDBRating)} </p>
      <button onClick={() => clickToDelete(movie._id)} className="btn-delete">
        Delete
      </button>
    </div>
  );
}

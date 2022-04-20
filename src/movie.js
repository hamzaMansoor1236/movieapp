const Movie = ({ moviesData }) => {
  return (
    <li key={moviesData.id} className={"movie"}>
      <p >{moviesData.title}</p>
      <img
        className="image"
        src={moviesData.poster}
        
        alt="logo"
        height="300px"
        width="150px"
      ></img>
      <p >
        Movie director {moviesData.director} <br></br>released in{" "}
        {moviesData.year}
      </p>
    </li>
  );
};
export default Movie;

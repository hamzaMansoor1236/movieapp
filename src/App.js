
import MovieComponent from "./MovieComponent";

import "./MovieComponent.css"
function App() {
  return (
      <div className="App">
        <li className="nav-bar">
          <h3>The Netflix</h3>
          <h4>Trending Movies</h4>
          <h4>Subscription</h4>
          <h4>Search</h4>
          <h4>About</h4>
          <h4 className="login">Login</h4>
          <h4 className="signup">Sign Up</h4>
        </li>
        
        
        <h1>Movies list</h1>
        <MovieComponent></MovieComponent>
      </div>
     
    
  );
}

export default App;

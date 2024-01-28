import "./App.css";
import { Grid, duration } from "@mui/material";
import Movie from "./components/Movie/Movie";
import { Fragment, useEffect, useState } from "react";
import { BackgroundMainPage } from "./components/BackgroundMainPage";
import { TrailerPage } from "./pages/TrailerPage";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const res = await fetch("http://localhost:3000/movies");
      const moviesInfo = await res.json();
      setMovies(moviesInfo);
    };
    getMovies();
  }, []);

  const emptyInfoMovie = {
    id: 0,
    image: "",
    name: "",
    rating: 0,
    video: "",
    coverImage: "",
    storyline: "",
    duration: "",
    genre: [],
  };
  const [infoMovie, setinfoMovie] = useState(emptyInfoMovie);

  return !infoMovie.video ? (
    <div>
      <BackgroundMainPage />

      <Grid
        sx={{ padding: "5vh" }}
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        {movies.map((movie) => (
          <Grid key={movie.name} item md={2} sm={6} xs={12}>
            <Movie
              image={movie.image}
              name={movie.name}
              rating={movie.rating}
              handleButtonPlayMovie={() =>
                setinfoMovie({
                  id: movie.id,
                  image: movie.image,
                  name: movie.name,
                  rating: movie.rating,
                  video: movie.video,
                  coverImage: movie.coverImage,
                  storyline: movie.storyline,
                  duration: movie.duration,
                  genre: movie.genre,
                })
              }
            />
          </Grid>
        ))}
      </Grid>
    </div>
  ) : (
    <div>
      <TrailerPage
        id={infoMovie.id}
        image={infoMovie.image}
        name={infoMovie.name}
        rating={infoMovie.rating}
        video={infoMovie.video}
        coverImage={infoMovie.coverImage}
        storyline={infoMovie.storyline}
        duration={infoMovie.duration}
        genre={infoMovie.genre}
        goBack={() => setinfoMovie({ ...infoMovie, video: "" })}
      />
    </div>
  );
}

export default App;

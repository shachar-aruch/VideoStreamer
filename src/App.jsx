import "./App.css";
import { Grid, duration } from "@mui/material";
import Movie from "./components/Movie/Movie";
import { Fragment, useState } from "react";
import { BackgroundMainPage } from "./components/BackgroundMainPage";
import { TrailerPage } from "./pages/TrailerPage";

const movies = [
  {
    id: 1,
    image: "oppenheimer.jpg",
    name: "oppenheimer",
    rating: 4.5,
    video: "videos/Oppenheimer _ New Trailer-(480p).mp4",
    coverImage: "images/oppenheimer cover.jpg",
    storyline:
      "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    duration: "3h",
    genre: ["Biography", "Drama", "History"],
  },
  {
    id: 2,
    image: "Avengers Endgame.jpg",
    name: "Avengers Endgame",
    rating: 4.5,
    video: "videos/Avengers Endgame Trailer.mp4",
    coverImage: "images/oppenheimer cover.jpg",
    storyline:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    duration: "3h 1m",
    genre: ["Adventure", "Action", "Drama"],
  },
  {
    id: 3,
    image: "Barbie.jpg",
    name: "Barbie",
    rating: 5,
    video: "videos/Barbie Trailer.mp4",
    coverImage: "images/Barbie cover.jpg",
    storyline:
      "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
    duration: "1h 54m",
    genre: ["Adventure", "Comedy", "Fantasy"],
  },
  {
    id: 4,
    image: "Spider Man Homecoming.jpg",
    name: "Spider Homecoming",
    rating: 4,
    video: "videos/spider homecoming Trailer.mp4",
    coverImage: "images/Spider Homecoming cover.jpg",
    storyline:
      "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.",
    duration: "2h 13m",
    genre: ["Adventure", "Action", "Sci-Fi"],
  },
  {
    id: 5,
    image: "The incerdlibles.jpg",
    name: "The incerdlibles",
    rating: 5,
    video: "videos/The incerdibles Trailer.mp4",
    coverImage: "images/The incredlibles cover.jpg",
    storyline:
      "While trying to lead a quiet suburban life, a family of undercover superheroes are forced into action to save the world.",
    duration: "1h 55m",
    genre: ["Adventure", "Action", "Animation"],
  },
  {
    id: 6,
    image: "The Wolf of Wall Street.jpg",
    name: "The Wolf of Wall Street",
    rating: 4.5,
    video: "videos/The Wolf of Wall Street Trailer.mp4",
    coverImage: "images/The Wolf of Wall Street cover.jpg",
    storyline:
      "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
    duration: "3h",
    genre: ["Biography", "Comedy", "Crime"],
  },
];

function App() {
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

      <Grid sx={{ padding: "5vh" }} container spacing={3}>
        {movies.map((movie) => (
          <Grid key={movie.name} item md={2} sm={6} xs={12}>
            <Movie
              image={movie.image}
              name={movie.name}
              rating={movie.rating}
              handleButtonPlayMovie={() =>
                setinfoMovie({
                  id: movie.id,
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
        name={infoMovie.name}
        rating={infoMovie.rating}
        video={infoMovie.video}
        coverImage={infoMovie.coverImage}
        storyline={infoMovie.storyline}
        duration={infoMovie.duration}
        genre={infoMovie.genre}
      />

      <button onClick={() => setinfoMovie({ ...infoMovie, video: "" })}>
        Go Back
      </button>
    </div>
  );
}

export default App;

import "./App.css";
import { Grid } from "@mui/material";
import Movie from "./components/Movie/Movie";
import { Fragment, useState } from "react";

const movies = [
  {
    image: "oppenheimer.jpg",
    name: "oppenheimer",
    rating: 4.5,
    video: "videos/Oppenheimer _ New Trailer-(480p).mp4",
    coverImage:"images/oppenheimer cover.jpg"
  },
  {
    image: "Avengers Endgame.jpg",
    name: "Avengers Endgame",
    rating: 4.5,
    video: "videos/Avengers Endgame Trailer.mp4",
    coverImage:"images/oppenheimer cover.jpg"
  },
  {
    image: "Barbie.jpg",
    name: "Barbie",
    rating: 3,
    video: "videos/Barbie Trailer.mp4",
    coverImage:"images/Barbie cover.jpg"
  },
  {
    image: "Spider Man Homecoming.jpg",
    name: "Spider Homecoming",
    rating: 2,
    video: "videos/spider homecoming Trailer.mp4",
    coverImage:"images/Spider Homecoming cover.jpg"
  },
  {
    image: "The incerdlibles.jpg",
    name: "The incerdlibles",
    rating: 2,
    video: "videos/The incerdibles Trailer.mp4",
    coverImage:"images/The incredlibles cover.jpg"
  },
  {
    image: "The Wolf of Wall Street.jpg",
    name: "The Wolf of Wall Street",
    rating: 2,
    video: "videos/The Wolf of Wall Street Trailer.mp4",
    coverImage:"images/The Wolf of Wall Street cover.jpg"
  }
];

function App() {
  const [videoSrc, setVideoSrc] = useState("");

  return !videoSrc ? (

    <div>
      <h1 style={{fontFamily:"Bradley Hand, cursive"}}>HOME CINEMA</h1>
      <Grid sx={{ padding: "5vh" }} container spacing={10}>
        {movies.map((movie) => (
          <Grid key={movie.name} item md={4} sm={6} xs={12}>
            <Movie
              image={movie.image}
              name={movie.name}
              rating={movie.rating}
              handlePlayMovie={() => setVideoSrc(movie.video)}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  ) : (
    <div>
      <Fragment key={videoSrc}>
        <video width="600px" controls>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </Fragment>
      <br/>
      <button onClick={() => setVideoSrc("")}>Go Back</button>
    </div>
  );
}

export default App;

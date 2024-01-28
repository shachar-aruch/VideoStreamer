import { Button, Grid } from "@mui/material";
import { red } from "@mui/material/colors";

export function TrailerPage({
  id,
  image,
  name,
  rating,
  video,
  coverImage,
  storyline,
  duration,
  genre,
  goBack,
}) {
  return (
    <Grid
      sx={{
        height: "100vh",
        width: "100vw",
        margin: 0,
        backgroundImage: `url(${coverImage})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
      }}
      container
      spacing={2}
      justifyContent={"space-around"}
    >
      <Grid item xs={6}>
        <video width="600px" controls>
          <source src={video} type="video/mp4" />
        </video>
      </Grid>
      <Grid item xs={6}>
        <h1>heloooooo</h1>
        <img src={image} alt="" />
      </Grid>
      <Button
        sx={{ height: 45, fontWeight: "bold" }}
        color="primary"
        variant="contained"
        onClick={() => goBack()}
      >
        Go Back
      </Button>
    </Grid>
  );
}

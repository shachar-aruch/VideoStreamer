import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid, Rating } from "@mui/material";
import styles from "./Movie.style";

export default function Movie({ image, name, rating, handlePlayMovie }) {
  return (
    <Card sx={{ minWidth: 350, backgroundColor:"#176B87"}}>
      <CardMedia
        component="img"
        alt="Movie"
        height="750"
        image={`/images/${image}`}
      />
      <CardContent sx={styles.cardContent}>
        <Typography variant="h5" sx={{color:"#EEF5FF"}}>{name}</Typography>
      </CardContent>
      <CardActions>
        <Button sx={{ width: "70%", color:"#86B6F6" }} size="medium" onClick={handlePlayMovie}>
          Play Trailer
        </Button>
        <Grid container>
          <Grid item xs={9}>
            <Rating name="read-only" value={rating} precision={0.5} readOnly />
          </Grid>
          <Grid item xs={1}>
            <Typography sx={{color:"#B4D4FF"}}>{rating}</Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

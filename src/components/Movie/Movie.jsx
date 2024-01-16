import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid, Rating } from "@mui/material";
import styles from "./Movie.style";

export default function Movie({ image, name, rating, handleButtonPlayMovie }) {
  return (
    <Card
      raised
      sx={{ maxHeight: 400, minWidth: 280, backgroundColor: "black" }}
    >
      <CardMedia
        component="img"
        alt="Movie"
        height="750"
        image={`/images/${image}`}
        sx={{ objectFit: "contain", maxHeight: 300 }}
      />
      <CardContent sx={styles.cardContent}>
        <Typography
          variant="h5"
          sx={{ color: "#DDE6ED", fontSize: 16, fontWeight: "bold" }}
        >
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container>
          <Grid item xs={5}>
            <Button
              sx={{ color: "#9DB2BF", fontSize: 12, fontWeight: "bold" }}
              size="medium"
              onClick={handleButtonPlayMovie}
            >
              Play Trailer
            </Button>
          </Grid>

          <Grid item xs={5}>
            <Rating name="read-only" value={rating} precision={0.5} readOnly />
          </Grid>
          <Grid item xs={2}>
            <Typography
              sx={{ color: "#9DB2BF", fontSize: 18, fontWeight: "bold" }}
            >
              {rating}
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

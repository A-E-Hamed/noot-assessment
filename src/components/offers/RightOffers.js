import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import classes from "./RightOffers.module.css";

const RightOffers = (props) => {
  return (
    <div className={classes.container}>
      <Card sx={{ maxWidth: 345 , backgroundColor: "#FFDA47"}}>
        <CardActionArea
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            height: "100px",
          }}
          s
        >
          <div className={classes.image}>
            <CardMedia
              component="img"
              height="140"
              image={props.image}
              alt="Dog"
            />
          </div>
          <CardContent >
            <Typography gutterBottom variant="h5" component="div" style={{ width: "60%" }}>
              {props.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Shop Now
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default RightOffers;

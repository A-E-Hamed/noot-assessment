import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import classes from "./ServicesDisplay.module.css";

const ServicesDisplay = (props) => {
  return (
    <Card sx={{ maxWidth: 325, padding: "15px" }}>
      <CardActionArea>
        <div className={classes.title}>
          <CardMedia
            component="img"
            sx={{ height: 40, width: 40 }}
            image={props.image}
            alt="green iguana"
          />
          <Typography gutterBottom variant="p" component="div">
            {props.title}
          </Typography>
        </div>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
          <Typography>{props.price}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Get Service
        </Button>
      </CardActions>
    </Card>
  );
};

export default ServicesDisplay;

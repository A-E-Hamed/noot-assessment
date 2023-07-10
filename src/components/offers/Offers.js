import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import classes from "./Offers.module.css";
import RightOffers from "./RightOffers";

const Offers = () => {
  return (
    <div className={classes.container}>
      <Card sx={{ maxWidth: 800, backgroundColor: "#FCDCB5", width: "55%" }}>
        <CardActionArea
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            height: "300px",
          }}
        >
          <div className={classes.leftSection}>
            <CardMedia
              component="img"
              height="200px"
              image="/pet-accessories.png"
              alt="Dog"
              sx={{ objectFit: "cover", marginTop: "150px"  }}
            />
            <div className={classes.offElement}>
              <Typography>Up To 40% Off</Typography>
            </div>
          </div>
          <CardContent sx={{ marginTop: "100px", maxWidth: "250px" }}>
            <Typography gutterBottom variant="h4" component="div">
              Сheck Out Our Specials
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Massa placerat duis ultricies lacus. Aliquet bibendum enim
              facilisis gravida neque convallis
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Shop Now
          </Button>
        </CardActions>
      </Card>
      <div>
        <RightOffers
          title={"Luxury Fashion Collection"}
          image={"/pet-dressed.png"}
        />
        <RightOffers title={"Shop What’s Trending"} image={"/charles.png"} />
      </div>
    </div>
  );
};

export default Offers;

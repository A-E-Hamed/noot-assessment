import classes from "./Header.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <div className={classes.container}>
      <div>
        <img src="/Logo.png" alt="logo" />
      </div>
      <div className={classes.navLinks}>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Shop</li>
          <li>Blog</li>
          <li>Pages</li>
        </ul>
      </div>
      <div>
        <Button
          variant="contained"
          sx={{
            bgcolor: "white",
            color: "black",
            textTransform: "none",
            "&:hover": { bgcolor: "white", color: "black" },
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          <ShoppingCartIcon sx={{ color: "#9C5BF5" }} />
          (1item)
        </Button>
      </div>
    </div>
  );
};
export default Header;

import React,{useContext} from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Badge from "@mui/material/Badge";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { MyContext } from "./context";

export function Navbar(navigate, mode, setMode) {
  const{user}= useContext(MyContext);
  return <AppBar position="static">
    <Toolbar>
      <Button color="inherit" onClick={() => navigate("/")}>
        Home
      </Button>
      <Button color="inherit" onClick={() => navigate("/dresses")}>
        Dress Collections
      </Button>
      <Button color="inherit" onClick={() => navigate("/dresses/add")}>
        Add Dress 
      </Button>
      <Button color="inherit" onClick={() => navigate("/color-game")}>
        Color Game
      </Button>
      
      {user && (<Button
style={{ marginLeft: "100px" }}
   color="inherit"
   aria-label="Like"
   onClick={()=>navigate("/whislist")}
 >
   <Badge style={{margin:0}} badgeContent={user.favorites.length} color="error">
     <span style={{alignItems:"center"}} role="img" aria-label="whislist">Wishlist
    <FavoriteIcon style={{padding:0}} color="#ede7f6" fontSize="large" />
     </span>
   </Badge>
 </Button>)}
      <Button
        style={{ marginLeft: "auto" }}
        startIcon={mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        color="inherit"
        onClick={() => setMode(mode === "dark" ? "light" : "dark")}
      >
        {mode === "dark" ? "light" : "dark"} mode
      </Button>
    </Toolbar>
  </AppBar>;
}

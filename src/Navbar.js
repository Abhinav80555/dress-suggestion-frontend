import React,{useContext} from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Badge from "@mui/material/Badge";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { MyContext } from "./context";
import axios from "./Axios"

export function Navbar(navigate, mode, setMode) {
  const{user, setUser}= useContext(MyContext);

const handleLogout =(e)=>{
  e.preventDefault()
  axios.post('/logout')
  .then(()=>{
    localStorage.removeItem('token')
    setUser(null);
    setTimeout(()=>{navigate("/login")},0)
    })
}


  return <AppBar position="static">
    <Toolbar>
      <Button style={{margin:0}} color="inherit" onClick={() => navigate("/")}>Home</Button>
      <Button color="inherit" onClick={() => navigate("/dresses")}>
      Dresses
      </Button>
      <Button color="inherit" onClick={() => navigate("/dresses/add")}>
      ADD
      </Button>
      {user && (<><Button
style={{ justifyContent:"center" }}
   color="inherit"
   aria-label="Like"
   onClick={()=>navigate("/whislist")}
 >
   <Badge style={{margin:0}} badgeContent={user.favorites.length} color="error">
     <span role="img" aria-label="whislist">
    <FavoriteIcon style={{padding:0}} color="#ede7f6" fontSize="large" />
     </span>
   </Badge>
 </Button>

 <Button style={{marginLeft:700}} color="inherit" onClick={handleLogout}>
        Logout
      </Button></>)}

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




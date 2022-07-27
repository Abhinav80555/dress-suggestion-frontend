import React, {useState,useContext } from "react";
import { useNavigate} from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "../Axios";
import { MyContext } from "../context";

export function Dresses({ dress,id,deleteButton ,editButton}) {


  const{user, setUser}= useContext(MyContext);
  const [loading, setLoading] = useState(false);

  function handleClickAdd(){
    setLoading(true);
          axios.post("/add-favorites/",{ dressId:dress._id })
          .then(({data})=>{
            setLoading(false);
            setUser(data)
           
console.log(user)
          })
          .catch((err)=>{
            setLoading(false);
            console.log(err)});
         
  }

  const handleClickRemove = ()=>{
    setLoading(true);
    axios.post("/remove-favorites/",{ dressId:dress._id })
    .then(({data})=>{
      setLoading(false);
      setUser(data)
     

    })
    .catch((err)=>{
      setLoading(false);
      console.log(err)});
  };






  const navigate = useNavigate();
  const [show, setShow] = useState(false);
 
  const summaryStyles = {
    display: show ? "block" : "none",
  };
  const styles = {
    backgroundColor: `${dress.color}`,
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    color: `${dress.color}`,
    justifyContent: "center",
    textAlign: "center",
  };







  return (
    <Card className="dress-container">
      <img className="dress-image" src={dress.image} alt={dress.name} />
      <CardContent>
        <div className="dress-specs">
          <h2 className="dress-name">
            {dress.dressname}{" "}
            <IconButton
              color="primary"
              aria-label="info"
              onClick={() => navigate("/dresses/" + id)}
            >
              {<InfoIcon />}
            </IconButton>
            <IconButton
              color="primary"
              aria-label="exand"
              onClick={() => setShow(!show)}
            >
              {show ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
            </IconButton>
          </h2>
          <p className="dress-color" style={styles}>
            .
          </p>
        </div>
        <p style={summaryStyles} className="dress-summary">
          {dress.summary}
        </p>
      </CardContent>
      <CardActions>
      <div>
      {user &&(
                  <>
                  {user.favorites.includes(dress._id) ? (
      <IconButton disabled={loading} aria-label="whislist" onClick={handleClickRemove}>
        <span role="img" aria-label="whislist">
          <FavoriteIcon style={{color:"red"}} fontSize="large" />
        </span>
      </IconButton>
) :(
      <IconButton disabled={loading} aria-label="whislist" onClick={handleClickAdd}>
        <span role="img" aria-label="whislist">
          <FavoriteIcon style={{color:"grey"}}  fontSize="large" />
        </span>
      </IconButton>
 )}
  
 </>
)}
    </div>{deleteButton} {editButton}
      </CardActions>
    </Card>
  );
}





export function WhislistCard({ dress, id,deleteButtonW}){

  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const summaryStyles = {
    display: show ? "block" : "none",
  };
  const styles = {
    backgroundColor: `${dress.color}`,
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    color: `${dress.color}`,
    justifyContent: "center",
    textAlign: "center",
  };

  return (
    <Card className="dress-container">
      <img className="dress-image" src={dress.image} alt={dress.name} />
      <CardContent>
        <div className="dress-specs">
          <h2 className="dress-name">
            {dress.dressname}{" "}
            <IconButton
              color="primary"
              aria-label="info"
              onClick={() => navigate("/dresses/" + id)}
            >
              {<InfoIcon />}
            </IconButton>
            <IconButton
              color="primary"
              aria-label="exand"
              onClick={() => setShow(!show)}
            >
              {show ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
            </IconButton>
          </h2>
          <p className="dress-color" style={styles}>
            .
          </p>
        </div>
        <p style={summaryStyles} className="dress-summary">
          {dress.summary}
        </p>
      </CardContent>
      <CardActions>
        {deleteButtonW}
      </CardActions>
    </Card>


  )
}
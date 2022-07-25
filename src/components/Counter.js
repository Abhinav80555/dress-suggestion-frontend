import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../pages/global";

function Counter() {
    const navigate = useNavigate();

  const [color, setColor] = useState(true);
  const [whis, setWhis] = useState({});

  const favourStyles = {
    color: color ? "grey" : "red"
  };
  const { dressid } = useParams();
  const [dressId, setDressId] = useState(null);


  function handleClick() {
        setColor(!color)    
        fetch(`${API}/whislist/${dressId._id}`, {
        method: "POST",
        body: JSON.stringify(dressId),
        headers: { "Content-Type": "application/json" }
      })
        .then((data) => data.json())
        .then((dr) => console.log(dr))
      }

  return (
    <div>
      <IconButton aria-label="whislist" onClick={handleClick}>
        <span role="img" aria-label="whislist">
          <FavoriteIcon style={favourStyles} fontSize="large" />
        </span>
      </IconButton>
    </div>
  );
  }





export default Counter;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Counter from "./Counter";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

export function Dresses({ dress, id,deleteButton ,editButton}) {
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
        <Counter />{deleteButton} {editButton}
      </CardActions>
    </Card>
  );
}

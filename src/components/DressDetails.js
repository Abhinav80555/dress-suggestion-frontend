import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../pages/global";

export function DressDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [dress, setDress] = useState({});

  useEffect(() => {
    fetch(`${API}/dress/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((dr) => setDress(dr));
  }, [id]);

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
<div>

      <iframe
        width="100%"
        height="570"
        src={dress.info}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    <div className="dress-detail-container">
      <div className="dress-specs">
        <h2 className="dress-name">{dress.dressname}</h2>
        <p className="dress-color" style={styles}>
          .
        </p>
      </div>
      <p className="dress-summary">{dress.summary}</p>
      <Button
        startIcon={<ArrowBackIosNewOutlinedIcon />}
        variant="outlined"
        onClick={() => navigate(-1)}
      >
        back
      </Button>
    </div>
    </div>

  );
}

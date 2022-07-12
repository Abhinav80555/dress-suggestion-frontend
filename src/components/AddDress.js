import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { API } from "../pages/global";
import { useNavigate } from "react-router-dom";


export function AddDress() {
  const [image, setImage] = useState("");
  const [dressname, setDressname] = useState("");
  const [cat, setCat] = useState("");
  const [color, setColor] = useState("");
  const [summary, setSummary] = useState("");
  const [info, setInfo] = useState("");
  const navigate = useNavigate();
  const addDress = () => {
    const newDress = { image, dressname, color, cat, summary, info };

    fetch(`${API}/dress`, {
      method: "POST",
      body: JSON.stringify(newDress),
      headers: { "Content-Type": "application/json" }
    })
      .then(() => navigate("/dresses"));
  };
  return (
    <div>
      <h1>Add Dress</h1>

      <div className="add-dress-form">
        <TextField
          onChange={(event) => setImage(event.target.value)}
          label="image link"
          variant="standard" />
        <TextField
          onChange={(event) => setDressname(event.target.value)}
          label="Dress name"
          variant="standard" />
        <TextField
          onChange={(event) => setCat(event.target.value)}
          label="Dress category "
          variant="standard" />
        <TextField
          onChange={(event) => setColor(event.target.value)}
          label="Dress Colour"
          variant="standard" />
        <TextField
          onChange={(event) => setSummary(event.target.value)}
          label="Summary"
          variant="standard" />
        <TextField
          onChange={(event) => setInfo(event.target.value)}
          label="Information"
          variant="standard" />
        <Button onClick={addDress} variant="contained">
          Add Dress
        </Button>
      </div>
    </div>
  );
}
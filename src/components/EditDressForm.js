import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { API } from "../pages/global";
import { useNavigate } from "react-router-dom";






export function EditDressForm({ dress }) {
  const [image, setImage] = useState(dress.image);
  const [dressname, setDressname] = useState(dress.dressname);
  const [cat, setCat] = useState(dress.cat);
  const [color, setColor] = useState(dress.color);
  const [summary, setSummary] = useState(dress.summary);
  const [info, setInfo] = useState(dress.info);
  const navigate = useNavigate();

  const editDress = () => {
    const updatedDress = { image, dressname, color, cat, summary, info };

    fetch(`${API}/dress/${dress.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedDress),
      headers: { "Content-Type": "application/json" }
    })
      .then(() => navigate("/dresses"));
  };
  return (
    <div>
      <h1>Edit Dress</h1>

      <div className="add-dress-form">
        <TextField
          onChange={(event) => setImage(event.target.value)}
          label="image link"
          variant="standard"
          value={image} />
        <TextField
          onChange={(event) => setDressname(event.target.value)}
          label="Dress name"
          variant="standard"
          value={dressname} />
        <TextField
          onChange={(event) => setCat(event.target.value)}
          label="Dress category "
          variant="standard"
          value={color} />
        <TextField
          onChange={(event) => setColor(event.target.value)}
          label="Dress Colour"
          variant="standard"
          value={cat} />
        <TextField
          onChange={(event) => setSummary(event.target.value)}
          label="Summary"
          variant="standard"
          value={summary} />
        <TextField
          onChange={(event) => setInfo(event.target.value)}
          label="Information"
          variant="standard"
          value={info} />
        <Button onClick={editDress} variant="contained">
          Save
        </Button>
      </div>
    </div>
  );
}

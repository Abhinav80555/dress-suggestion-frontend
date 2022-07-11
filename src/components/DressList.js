import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Dresses } from "./Dresses";
import { API } from "../pages/global";
import { useNavigate,useParams } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";

export function DressList() {
  const [dressList, setDressList] = useState([]);
  const navigate = useNavigate();
const getDress=()=>{
  fetch(`${API}/dress`, {
    method: "GET",
  })
    .then((data) => data.json())
    .then((dr) => setDressList(dr));
}


  useEffect(() =>getDress(), []);

  const deleteDress = (id) => {
    fetch(`${API}/dress/${id}`, { method: "DELETE" })
      .then(() => getDress())
  };

  return (
    <div>
      <div className="dress-list">
        {dressList.map((dr) => (
          <Dresses
            key={dr.id}
            dress={dr}
            id={dr.id}
            
            

            deleteButton={
              <IconButton
                style={{ marginLeft: "auto" }}
                color="error"
                onClick={() => deleteDress(dr.id)}
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            }
            editButton={
              <IconButton
              onClick={() => navigate(`/dress/edit/${dr.id}`)}
                color="secondary"
                aria-label="edit"
              >
                <EditIcon />
              </IconButton>
            }




          />
        ))}
      </div>
    </div>
  );
}

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
      body :JSON.stringify(newDress),
      headers: { "Content-Type": "application/json" }
    })
      .then(() => navigate("/dresses"))
  };
  return (
    <div>
      <h1>Add Dress</h1>

      <div className="add-dress-form">
        <TextField
          onChange={(event) => setImage(event.target.value)}
          label="image link"
          variant="standard"
        />
        <TextField
          onChange={(event) => setDressname(event.target.value)}
          label="Dress name"
          variant="standard"
        />
        <TextField
          onChange={(event) => setCat(event.target.value)}
          label="Dress category "
          variant="standard"
        />
        <TextField
          onChange={(event) => setColor(event.target.value)}
          label="Dress Colour"
          variant="standard"
        />
        <TextField
          onChange={(event) => setSummary(event.target.value)}
          label="Summary"
          variant="standard"
        />
        <TextField
          onChange={(event) => setInfo(event.target.value)}
          label="Information"
          variant="standard"
        />
        <Button onClick={addDress} variant="contained">
          Add Dress
        </Button>
      </div>
    </div>
  );
}





export function EditDress(){

  const { id } = useParams();

  const [dress, setDress] = useState(null);
  useEffect(() => {
    fetch(`${API}/dress/${id}`)
      .then((data) => data.json())
      .then((dr) => setDress(dr));
  }, [id]);


  return(
    <div>
      {/* <pre>{JSON.stringify(dress, null, 2)}</pre>       */}
      {dress?<EditDressForm dress={dress}/>:"Loading..."}
      </div>
    
  )
}





 function EditDressForm({dress}) {
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
      body :JSON.stringify(updatedDress),
      headers: { "Content-Type": "application/json" }
    })
      .then(() => navigate("/dresses"))
  };
  return (
    <div>
      <h1>Edit Dress</h1>

      <div className="add-dress-form">
        <TextField
          onChange={(event) => setImage(event.target.value)}
          label="image link"
          variant="standard"
          value={image}
        />
        <TextField
          onChange={(event) => setDressname(event.target.value)}
          label="Dress name"
          variant="standard"
          value={dressname}
        />
        <TextField
          onChange={(event) => setCat(event.target.value)}
          label="Dress category "
          variant="standard"
          value={color}
        />
        <TextField
          onChange={(event) => setColor(event.target.value)}
          label="Dress Colour"
          variant="standard"
          value={cat}
        />
        <TextField
          onChange={(event) => setSummary(event.target.value)}
          label="Summary"
          variant="standard"
          value={summary}
        />
        <TextField
          onChange={(event) => setInfo(event.target.value)}
          label="Information"
          variant="standard"
          value={info}
        />
        <Button onClick={editDress} variant="contained">
          Save
        </Button>
      </div>
    </div>
  );
}
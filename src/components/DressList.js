import React, { useEffect, useState } from "react";
import { Dresses } from "./Dresses";
import { API } from "../pages/global";
import { useNavigate } from "react-router-dom";
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
            key={dr._id}
            dress={dr}
            id={dr._id}
            
            

            deleteButton={
              <IconButton
                style={{ marginLeft: "auto" }}
                color="error"
                onClick={() => deleteDress(dr._id)}
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            }
            editButton={
              <IconButton
              onClick={() => navigate(`/dress/edit/${dr._id}`)}
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



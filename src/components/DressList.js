import React, { useEffect, useState,useContext } from "react";
import { Dresses, WhislistCard } from "./Dresses";
import { API } from "../pages/global";
import { useNavigate,Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { MyContext } from "../context";
import axios from "../Axios";
export function DressList() {
  const [dressList, setDressList] = useState([]);
  const navigate = useNavigate();

const getDress=()=>{
  fetch(`${API}/dress`, {
    method: "GET",
    headers:{
      "x-auth-token":localStorage.getItem("token"),
    },
  }).then((response)=>{
    if(response.status === 401){
      navigate("/login")}
    return response;
  })
    .then((data) => data.json())
    .then((dr) =>setDressList(dr));
}

  useEffect(() =>getDress(),[]);

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
            {...dr}
            
            

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







 export function Whislist() {
  const [loading, setLoading] = useState(false);
  const {user,setUser}= useContext(MyContext);
  const [favorites , setFavorites] = useState([]);
  useEffect(()=>{
    if(user.favorites.length){
        const requests = user.favorites.map((favorite)=>
        fetch(`${API}/dress/${favorite}`)
        .then((res)=>res.json())
        );
        Promise.all(requests).then((res)=>setFavorites(res));
    }

   },[user]);
   if(!user.favorites.length){
    return(
<div>
<h3>You Don't Have Any Favorites</h3>
<Link to="/dresses">
<button className="color-button"> Add One</button>
    </Link>

</div>
);
}

const handleClickRemove = ()=>{
  setLoading(true);
  axios.post("/remove-favorites/",{ dressId:user.favorites._id })
  .then(({data})=>{
    setLoading(false);
    setUser(data)
    alert("dress removed successfully!");

  })
  .catch((err)=>{
    setLoading(false);
    console.log(err)});
};


  return (
    <div>
      <div className="dress-list">
        {favorites.map ((dr) => (
          <WhislistCard
          key={dr._id}
            dress={dr}
            id={dr._id}
            {...dr}


           
            {...user.favorites.includes(user.favorites._id)?(
           <> deleteButtonW={
              <IconButton
               disabled={loading}
                style={{ marginLeft: "auto" }}
                color="error"
                onClick={handleClickRemove}
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            }</>):(<></>)}
            
       
          />
        ))}
        
      </div>
    </div>
  );
}


import React,{useState} from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import AddColor from './components/AddColor/AddColor';
import { NotFound } from './components/NotFound';
import { DressDetails } from './components/DressDetails';
import { AddDress, DressList } from './components/DressList';
import { Home } from './pages/Home';
import Paper from '@mui/material/Paper';
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

      
const initialdresslist=[
  {
  id: "100",
  cat: "gown",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgB43nuwjpm6Pwnz3A-Cfn6oY5OMGnmu-XkQ&usqp=CAU",
  color: "#A91518",
  summary: "party wear :my friend gifted me for my birthday",
  info: "info 100",
  dressname: "maroon party wear"
  },
  {
  id: "101",
  cat: "bottom",
  image: "data:image/jpeg;base64,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",
  color: "#1F2534",
  summary: "simply wearing for shopping",
  info: "info 101",
  dressname: "Long skirt"
  },
  {
  id: "102",
  cat: "gown",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukj9iY8s63FqaHcGmORe1PwxARrLOXuGxvw&usqp=CAU",
  color: "#B7B316",
  summary: "summary 102",
  info: "info 102",
  dressname: "short gown"
  },
  {
  id: "103",
  cat: "top",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfk__aAKv-gN29FrqwPPfCXK3VfJVmZipxag&usqp=CAU",
  color: "#BFC1AC",
  summary: "summary 103",
  info: "info 103",
  dressname: "kurti"
  },
  {
  id: "104",
  cat: "bottom",
  image: "data:image/jpeg;base64,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",
  color: "#9B0B1D",
  summary: "short skirt purchased at halsa mall",
  info: "info 104",
  dressname: "short skirt"
  },
  {
  id: "105",
  cat: "bottom",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq_y8IKdEsB0r60tvRZ6t6tjm4KefVE1ay3g&usqp=CAU",
  color: "#3E4146",
  summary: "pencil skirt for office use",
  info: "info 105",
  dressname: "Pencil Skirt"
  },
  {
  id: "106",
  cat: "top",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROkkNzugr-x2oB2xewoxvVgwGrZaOo3sVYqA&usqp=CAU",
  color: "#DCDDC8",
  summary: "summary 106",
  info: "info 106",
  dressname: "T-shirt model"
  },
  {
  id: "107",
  cat: "bottom",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQumuzNwl09SwkkooYHSgRAC5gj3aiZNv1XIA&usqp=CAU",
  color: "#5270AD",
  summary: "summary 107",
  info: "info 107",
  dressname: "pant jeans"
  },
  {
  id: "108",
  cat: "top",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgcawx9Dyo0hnAzhZ7C-4bc5BQx_ZhyCmakA&usqp=CAU",
  color: "black",
  summary: "summary 108",
  info: "info 108",
  dressname: "black t-shirt"
  },
  {
  id: "109",
  cat: "gown",
  image: "data:image/jpeg;base64,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",
  color: "#5050C9",
  summary: "summary 109",
  info: "info 109",
  dressname: "Festival wear"
  },

  ]

  

 

function App() {
  const navigate=useNavigate();
  const [dressList,setDressList]=useState(initialdresslist);
  const [mode,setMode]=useState('light');
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (

    <ThemeProvider theme={theme}>
      <Paper elevation={4} style={{minHeight:"100vh"}}>
    <div className="App">

<AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => navigate("/")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => navigate("/dresses")}>
              Dress Collections
              </Button>
              <Button color="inherit" onClick={() => navigate("/dresses/add")}>
              Add Dress collections
              </Button>
              <Button color="inherit" onClick={() => navigate("/color-game")}>
                Color Game
              </Button>
              <Button
                style={{ marginLeft: "auto" }}
                startIcon={
                  mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                }
                color="inherit"
                onClick={() => setMode(mode === "dark" ? "light" : "dark")}
              >
                {mode === "dark" ? "light" : "dark"} mode
              </Button>
              
            </Toolbar>
          </AppBar>


<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/dresses" element={<DressList dressList={dressList} setDressList={setDressList}/>}/>
  <Route path="/dresses/:dressid" element={<DressDetails dressList={dressList}/>}/>
  <Route path="/color-game" element={<AddColor/>}/>
  <Route path="/dresses/add" element={<AddDress dressList={dressList} setDressList={setDressList}/>} />
  <Route path="/404" element={<NotFound/>}/>
  <Route path="*" element={<Navigate replace to="/404"/>}/> 

</Routes>

    </div> </Paper> </ThemeProvider>
  );
}


export default App;

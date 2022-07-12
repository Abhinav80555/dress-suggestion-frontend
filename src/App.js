import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import * as yup from 'yup';
import "./App.css";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import AddColor from "./components/AddColor/AddColor";
import { NotFound } from "./components/NotFound";
import { DressDetails } from "./components/DressDetails";
import { DressList } from "./components/DressList";
import { AddDress } from "./components/AddDress";
import { EditDress } from "./components/EditDress";
import { Home } from "./pages/Home";
import Paper from "@mui/material/Paper";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useFormik } from "formik";

function App() {
  const navigate = useNavigate();

  const [mode, setMode] = useState("light");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={4} style={{ minHeight: "100vh" }}>
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

          <div className="route-container">
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dresses" element={<DressList />} />
            <Route path="/basic-form" element={<BasicForm />} />
            <Route path="/dresses/:dressid" element={<DressDetails />} />
            <Route path="/color-game" element={<AddColor />} />
            <Route path="/dresses/add" element={<AddDress/>}/>
            <Route path="/dress/edit/:id" element={<EditDress/>}/>
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
          </Routes></div>
        </div>{" "}
      </Paper>{" "}
    </ThemeProvider>
  );
}

export default App;




function BasicForm(){
  
  const {values,handleChange,handleSubmit}=useFormik({
    initialValues:{email:"abc@gmail.com",password:"123"},
  onSubmit:(values)=>{
    console.log(values)
  },});
  
  return(
    <form onSubmit={handleSubmit} className="user-form">
    <input type="email" placeholder="Enter email" value={values.email} onChange={handleChange} />
    <input type="password" placeholder="Enter password" value={values.password} onChange={handleChange} />
    <button type="submit">Submit</button>
    <pre>{JSON.stringify(values)}</pre>
    </form>
  )
}
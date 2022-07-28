import React, { useState ,useContext,useEffect} from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import AddColor from "./components/AddColor/AddColor";
import { NotFound } from "./components/NotFound";
import { DressDetails } from "./components/DressDetails";
import { DressList, Whislist } from "./components/DressList";
import { AddDress } from "./components/AddDress";
import { EditDress } from "./components/EditDress";
import { Home } from "./pages/Home";
import Paper from "@mui/material/Paper";
import { BasicForm } from "./components/BasicForm";
import { Login } from "./components/login/Login";
import { Signup } from "./components/signup/Signup";
import { Navbar } from "./Navbar";
import axios from "./Axios"
import { MyContext } from "./context";

function App() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("light");
  const theme = createTheme({
    palette: {
      primary:{main: '#15d3b0'},
      mode: mode,
    },
  });
   
const {user,setUser}= useContext(MyContext);
useEffect(()=>{

 axios.post("/auto-login")
 .then(({data})=>setUser(data));
},[]);


  return (
    <>
        <ThemeProvider theme={theme}>
          <Paper elevation={4} style={{ minHeight: "100vh" }}>
            <div className="App">
            {user==null ? ( <> </> ):(<>{Navbar(navigate, mode, setMode)}</>) }

              <div className="route-container">
                <Routes>
                
                {!user&&(<>  <Route path="/signup" exact element={<Signup />} />
                <Route path="/login" exact element={<Login />} />
                 <Route path="/" element={<Navigate replace to="/login" />} />
                 </>)}



                 {user && ( <Route path="/" element={<Home />} />)}
                 {user && (  <Route path="/dresses" element={<DressList />} />)}
                  {user && (  <Route path="/whislist" element={<Whislist />} />)}
                  <Route path="/basic-form" element={<BasicForm />} />
                  {user && (  <Route path="/dresses/:id" element={<DressDetails />} />)}
                  {user && (  <Route path="/color-game" element={<AddColor />} />)}
                  {user && (  <Route path="/dresses/add" element={<AddDress />} />)}
                  {user && (  <Route path="/dress/edit/:id" element={<EditDress />} />)}
                  <Route path="/404" element={<NotFound />} />
                  <Route path="*" element={<Navigate replace to="/404" />} />
                </Routes>
              </div>
            </div>{" "}
          </Paper>{" "}
        </ThemeProvider>
    </>
  );
}





export default App;
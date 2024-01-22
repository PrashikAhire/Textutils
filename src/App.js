import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

import About from './components/About';



function App() {
  const[mode,setmode]=useState('light');
  const[alert,setalert] = useState(null);
  // const[theme,setTheme] = useState('');



  const showAlert = (message,type)=>{
    setalert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setalert(null);
    },1500);
  }

  // const clor =()=>{
  //   if(mode==='light'){
  //     setmode('dark');
  //     document.body.style.backgroundColor="red";
  //     showAlert("Danger mode is on","danger");
  //   }
  //   else{
  //     setmode('light');
  //     document.body.style.backgroundColor="white";
  //     showAlert("Danger mode has been enabled","success");
  //   }
  // }
  // const removed =()=> {
  //   document.body.classList.remove("bg-success");
  //   document.body.classList.remove("bg-light");
  //   document.body.classList.remove("bg-dark");
  //   document.body.classList.remove("bg-danger");
  //   document.body.classList.remove("bg-warning");
  //   document.body.classList.remove("bg-primary");
  // }

  const toggleMode = (cls)=>{
    // removed();
    // document.body.classList.add('bg-'+cls);
    if(mode==='light'){ 
      setmode('dark');
      document.body.style.backgroundColor="#042743";
      document.body.style.backgroundImage="url('halftone.webp')";
      showAlert("Dark mode has been enabled","success");
      // document.title = "Textutils - Dark mode"
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      document.body.style.backgroundImage="url('pexels-fwstudio-164005.jpg')";
      showAlert("Light mode has been enabled","success");
      // document.title = "Textutils"
    }
  }
  
  return (
    <>
    <Router>
    <Navbar title = 'Textutils' home = "Home"  aboutUs="About" mode = {mode} toggleMode = {toggleMode}/>

    {/* <Navbar title = 'Textutils' mode = {mode} toggleMode = {toggleMode} clor = {clor}/> */}
    <Alert alert={alert} />
     <div className="container my-3">
     
        <Routes>   
          <Route path="/about" element={<About mode = {mode} />} />
          <Route path="/" element={<Textbox showAlert={showAlert} heading = 'TextUtils - Word counter , Character counter' mode = {mode}/>} />
        </Routes>
    
     </div>
     {/* <About/> */}
    
     </Router>
    </>
  );
}

export default App;

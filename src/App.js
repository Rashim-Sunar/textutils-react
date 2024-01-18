import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from "./components/Alert"
import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const[mode,setMode]=useState("light");
  const[alert,setAlert]=useState(null);

  const showAlert = (message,type) => {
    setAlert({
      type : type,
      msg : message
    })

  setTimeout(()=>{
    setAlert(null);
  },1500);
  }
  
  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor='rgb(11, 27, 54)';
      showAlert("Dark mode has been activated","success");
      document.title = "TextUtils-Dark Mode ";
      setInterval(()=>{
        document.title = "TextUtils is amazing mode";
      },2000);
      setInterval(()=>{
        document.title = "Install TextUtils now";
      },1500);
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been activated","success");
      document.title = "TextUtils-Light Mode ";
    }
  }

  return (
   <>
     <Router>
       <Navbar title="textUtils" mode={mode} toggleMode={toggleMode}/>
       <Alert alert={alert}/>
       <div className="container my-5" > 
       <Routes>
             <Route exact path="/about" element={<About mode={mode}/>}/>
             <Route exact path='/' element={ <TextForm showAlert={showAlert} heading="TextUtils - Word counter | character counter | remove extra spaces" mode={mode}/>}/>      
      </Routes>
      </div>
      </Router> 
  </> 
  );
}

export default App;


import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react'
 import Textform from './components/Textform';
 
function App() {
  const[mode,setmode]=useState('light');
  const [alert, setalert] = useState("a");

  const showalert=(message,type)=>{
 setalert({
  msg:message,
  type:type
 })
 setTimeout(() => {
  setalert(null);
 }, 1500);
  }

  const togglemode=()=>
  {
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='#0f0f2b';
      document.body.style.color='white';
      showalert("Dark mode has been enabled","Success");
     
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showalert("Light mode has been enabled","Success");
    }
  }


  
  return (
    <>
   <Navbar title="TextApp" mode={mode} togglemode={togglemode} />
   <Alert alert={alert}/>
   <div className="container"> 
    { <Textform showalert={showalert} heading="enter the text to analyze below" mode={mode}/>  }
    <About mode={mode}/> 
    
   </div>
    </>
  );
}

export default App;

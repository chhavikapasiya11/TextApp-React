import React, { useState } from 'react';

export default function Textform(props) {

  const handleupclick = (event) => {
    event.preventDefault(); // Prevents form submission
    console.log('uppercase was clicked' + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("Converted to uppercase","Success")
  };

  const handleclear = () => {
   
    let newtext = '';
    setText(newtext);
    props.showalert("Text is cleared","Success")
  };

  
  const handleextraspaces = () => {
   
   let newText=text.split(/[ ]+/);
   setText(newText.join(" "));
   props.showalert("Extra space has been removed","Success");

  };
  const handleonchange = (event) => {
    console.log('onchange was clicked');
    setText(event.target.value);
  };

  const [text, setText] = useState(' ');

  return (
    <> 
    <div>
     <div className='container'> 
        <h1> {props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleonchange}
            value={text}
            style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
         
            id="mybox"
            rows="8" 
          ></textarea>
        </div>
        <button
          type="button"
  
          disabled={text.length===0}
          className="btn btn-primary mx-2"
          onClick={handleupclick}
        >
          Convert to Uppercase
        </button>

        <button
          type="button" 
          disabled={text.length===0}
          className="btn btn-primary mx-2"
          onClick={handleclear}
        >
         Clear text
        </button>

        <button
          type="button" 
          disabled={text.length===0}
          className="btn btn-primary mx-2"
          onClick={handleextraspaces}
        >
        remove spaces
        </button>
    
    </div>
    </div>
 <div className="conainer my-3 mx-3">
 <h1>Your text analysis</h1>
 <p>{text.length} are the characters and {text.trim().split(/\s+/).filter(word => word !== "").length} are the words</p>

 <h2>Preview</h2>
 <p>{text}</p>
 </div>
</> 
  );
}

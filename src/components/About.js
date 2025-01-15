import React,{useState} from 'react'

export default function About(props) {
    // const[mystyle,setmystyle]= useState
    // ({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    let mystyle ={
      color: props.mode==='dark'?'white':'black',
      backgroundColor:props.mode==='dark'?'rgb(96 89 89)':'white',
      border:'1px solid white'

    }
  

   
  return (
    <div>
    <div className="container" >
      <h1>About Us</h1>
      <div className="accordion mx-1" id="accordionExample" style={mystyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={mystyle}
            >
              Who We Are
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>We are innovators in text generation and editing technology.</strong> Our mission 
              is to provide users with tools that simplify and enhance how text is created and modified. 
              Whether you're crafting professional content or casual messages, our platform makes it easy 
              to produce high-quality results.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={mystyle}
            >
              What We Do
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>We specialize in intelligent text solutions.</strong> Our app generates high-quality 
              text for various needs, from creative writing to formal communication. Additionally, we offer 
              advanced text modification features, such as rewriting, summarization, tone adjustment, and 
              grammar correction, to help you refine your content effortlessly.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={mystyle}
            >
              Our Vision
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>To empower creativity and productivity through advanced text tools.</strong> Our vision 
              is to make text generation and modification intuitive and accessible for everyone. By leveraging 
              cutting-edge technology, we aim to become the go-to platform for individuals and businesses looking 
              to create impactful, polished content quickly and easily.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

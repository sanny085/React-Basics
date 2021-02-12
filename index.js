import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const fName = "Raja";
const lName = "Kumar Bhardwaj"
const date1 = new Date();

const img1 = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
const img2 = "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80";
const img3 = "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80";
const img4 = "https://images.unsplash.com/photo-1586959244058-3cb7557afc7f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80";



ReactDom.render(
    // h3 is JSX Elements inside rendor method
    //Multiple JSX Elements inside render method 
  <React.Fragment>
    <h1>Netflix Clone</h1>
    <p>I will list here some netflix movie</p>
      <ol>
        <li>Mr Robot(***)</li>
        <li>The Crown</li>
        <li>Ozark</li>
        <li>Lost in Space</li>
        <li>Social Distance</li> 
      </ol>
        
        /*inside {} everything is javascript*/
      <h3 contentEditable = "true">My Name is {fName} {lName}</h3>
      <h2>{`My first Name is : ${fName} and last name is : ${lName}`}</h2>
      <p>Today is the {date1.toLocaleDateString()}</p>
      <p>Today is the {new Date().toLocaleDateString()}</p>
      <p>Today is the {new Date().toLocaleTimeString()}</p>
      

     /*Gallery Card Filter*/
     <h3 className="GalleryText">Our Services</h3>
      <div className="container">
          <a href="http://aictech.co.in/" target="_blank">
            <img className="img1 border border-secondary border-2" src={img1} title="check Image" alt="Background Image"/>
          </a>
        <img className="img1 border border-secondary border-2" src={img2} title="check Image" alt="Background Image"/>
        <img className="img1 border border-secondary border-2" src={img3} title="check Image" alt="Background Image"/>
        <img className="img1 border border-secondary border-2" src={img4} title="check Image" alt="Background Image"/>
      </div>
   <br/>   <br/>   <br/>   <br/>


  </React.Fragment>, document.getElementById("root")

);
 

{/* //   var htmlData = `<div class="operation">
//   <button  class="pBell border-0 bg-none" style="float-left" > <i class="fas fa-bell pBell1"></i></button>
 
// <div style="float: right">
//   <button class="edit border-0 bg-none" > <i class="fas fa-edit edit1"></i></button>
//   <button class="delete border-0 bg-none" > <i class="fas fa-trash-alt trash1"></i></button>
// </div>
// </div>
// <div class="main   "></div>
// <textarea class=" form-control" rows="15" cols="5" name="" id=""  ></textarea>
// `; */}


// var section = document.createElement('div');
// section.innerHTML = htmlData;
// document.getElementById("root").appendChild(section); 

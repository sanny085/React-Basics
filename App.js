import React from 'react';
import Orderlist from './Orderlist';
import Paragraph from './Paragraph';
import {add, sub, mul, divid} from './Calculator';
import NetSection from './NetSection';
import { useState } from 'react';


const fName = "Raja";
const lName = "Kumar Bhardwaj"
const date1 = new Date();

const img1 = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
const img2 = "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80";
const img3 = "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80";
const img4 = "https://images.unsplash.com/photo-1586959244058-3cb7557afc7f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80";

/*css in Object Form (Cabab Case)*/
const GalleryText = {
  color:'rgb(224, 62, 116)',
  textAlign:'center',
  textTransform:'uppercase',
  fontWeight:'bold',
  margin:'20px 0px',
  textShadow:'0px 2px 4px #ffe9c5',
  fontFamily: "'IBM Plex Sans', sans-serif",
  fontSize:'3rem'
};    

{/*Master Page*/}
const App = () => {
   
  const [age, setAge] = useState(0);

  const [ondata, otherDatag]  = useState(20);

  const color = 'red';
  //React Hooks state ckanging
  const [clr, setClr]  = useState(color);
  
  const plus = ()=>{
    let color1 = '#242B2E';
    setClr(color1);
    otherDatag(ondata+5);
  }

  const minus = ()=>{
    otherDatag(ondata-5);
    let color2 = 'green';
    setClr(color2);
  }
  

  return (
    <React.Fragment>

     <div className="card mx-auto  mt-3"  style={{"width":"320px","backgroundColor":"lightblue" }}>
     <div className="card-body">
        <h4 className="card-title text-center text-muted p-4">  {age}  </h4>
        <button className="btn btn-warning d-block mx-auto   " onClick={() => setAge(age + 1)}>
          Click me
        </button>
       </div>
     </div>
       
      



   <h1>Netflix Clone</h1>
   
    {/*component creation*/} 
    <Orderlist/>
    <Paragraph/>

       
          <ul>
            <li>Addition of two number is : {add(6,5)}</li>
            <li>Subtraction of two number is : {sub(34,5)}</li>
            <li>Multiplication of two number is : {mul(3,5)}</li>
            <li>Division of two number is : {divid(20,5)}</li>
          </ul>
      

     {/*h3 is JSX Elements inside App function */} 
    {/*Multiple JSX Elements inside App function */} 
      {/*inside {} everything is javascript */}
      <h3 contentEditable = "true">My Name is {fName} {lName}</h3>
      <h2>{`My first Name is : ${fName} and last name is : ${lName}`}</h2>
      <p>Today is the {date1.toLocaleDateString()}</p>
      <p>Today is the {new Date().toLocaleDateString()}</p>
      <p>Today is the {new Date().toLocaleTimeString()}</p>
      <h3>Evaluate {2+3}</h3>
      <h3>Masic Number is {Math.random()}</h3>

     {/*Gallery Card Filter*/}
     <h3 style={GalleryText}>Our Services</h3>
      <div className="container1" style={{backgroundColor : clr}}>
          <a href="http://aictech.co.in/" target="_blank">
            <img className="img1 border border-secondary border-2" src={img1} title="check Image" alt="Background Image"/>
          </a>
        <img className="img1 border border-secondary border-2" src={img2} title="check Image" alt="Background Image"/>
        <img className="img1 border border-secondary border-2" src={img3} title="check Image" alt="Background Image"/>
        <img className="img1 border border-secondary border-2" src={img4} title="check Image" alt="Background Image"/>
      </div>
   <br/>   <br/>   <br/>   <br/>
   

 <div className="container-fluid">
  <div className="container">
    
    <form>
      
        <input type="text" name="name"/>
      
      <input type="submit" value="Submit" />
    </form>
  
  </div>
 </div>

 <br/>   <br/>
 <h3 style={GalleryText}>Best Collection</h3>
<div className="container-fluid" >
   
    <button type="button" className="btn btn-dark mx-3" onClick={() => plus()}>++</button>
    <button type="button" className="btn btn-dark mx-3" onClick={() => minus()}>--</button>
   {ondata}

   <NetSection/>

</div>
    
   </React.Fragment>
  );
}

export default App;
 
  

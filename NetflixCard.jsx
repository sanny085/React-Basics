import React from 'react';
import   './index.css';  

const cardImageba = {
  height :'200px'
};

function NetflixCard(props){
    return(
  
  <div className="card card1 "  >
 
   <img src={props.imgSrc} className="card-img-top img-fluid d-block cardImageba" style={cardImageba} alt="image"/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.movtype}</p>
      <a href={props.link} className="btn btn-outline-danger">Watch</a>
    </div>
  </div>
         
    
    );
    
   }

export default NetflixCard;
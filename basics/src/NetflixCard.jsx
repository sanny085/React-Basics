import React from 'react';
import './index.css';  
 
function NetflixCard(props){
    return(
      <div className="card card1">
        <img src={props.imgSrc} className="card-img-top img-fluid d-block cardImageba" style={{height:"200px"}} alt="image"/>
          <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">
                {props.movtype1}{', '}
                {props.movtype2}{', '}
                {props.movtype3} 
              </p>
              <a href={props.link} className="btn btn-outline-danger">Watch</a>
              <h5 class="float-right"><span class="badge rounded-pill p-2 bg-warning text-dark">{props.movrat}</span></h5>
          </div>
      </div>
    );    
 }

export default NetflixCard;

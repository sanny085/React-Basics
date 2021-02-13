import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Paragraph from './Paragraph';
 
// 2020,9,4,4 date formate

var time1 = new Date();                                    
time1 = time1.getHours();
 let wish = ' ';
 const colorText = { };
 

 if(time1>=1 && time1<12){
     wish = 'Good Morning';
     colorText.color = "#FFE577";
    
}
   else if(time1>=12 && time1<17){
     wish = 'Good Afternoon';
     colorText.color = "white";
   }
  else if(time1>=17 && time1<19){
     wish = 'Good Evening';
     colorText.color = "#C3727C";
   }
  else{
     wish = 'Good Night';
     colorText.color = "#FFA54C";
  }

 
const tick = ()=> {
  let element =(
      <>
        {new Date().toLocaleTimeString()} 
      </>
    );
  

ReactDOM.render(
  <React.Fragment>
     <center> <Paragraph/> </center>
    <div className="container">
    
      <div className="containerBody" >
       
        <h1 style={colorText}>{element}</h1>
          <h2 className="h2margin">
            <span style={colorText}>{wish}</span>,
            <span className="helloText"> Hello Sanny</span>
          </h2>
       </div>
    </div>
  </React.Fragment>,
  document.getElementById('root')
);
}

setInterval(tick, 1000);
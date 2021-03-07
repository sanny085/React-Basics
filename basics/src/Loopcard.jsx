import NetflixCard from './NetflixCard';
import Moviecollect from './Moviecollect';

// Using Fat arrow function calling function
const ncard = (val,i) => {
   return(
    <div className="col-md-3 col-sm-6 col-lg-3"  >
        <NetflixCard 
           key={i}
           imgSrc={val.posterurl} 
           title={val.title} movtype={val.genres} 
           link={val.link}
        />
     </div> 
   );
}

function Loopcard(){
    // calling ncard function
    // map method comes with key value
   return  Moviecollect.map(ncard);  
}

const AmazLoop = ()=> {
 return(
      <div className="col-md-3 col-sm-6 col-lg-3"  >
        <NetflixCard 
           imgSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTXPFUuoOTA__FSKq8tZZsmvNc-8TG8kq90Q&usqp=CAU' 
           title='WAR' movtype='Action, Terrorist' 
           link='https://www.youtube.com/watch?v=tQ0mzXRk-oM'
        />
     </div> 
   );
}

export {Loopcard, AmazLoop};
 

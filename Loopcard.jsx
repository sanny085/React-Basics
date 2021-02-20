 import NetflixCard from './NetflixCard';
import Moviecollect from './Moviecollect';
 
const ncard =(val,i)=>{
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

export default Loopcard;
 

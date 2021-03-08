import NetflixCard from './NetflixCard';
import Moviecollect from './Moviecollect';

// (Netflix card) Using Fat arrow function calling function
const ncard = (val,i) => {
   return(
    <div className="mb-3 ol-md-3 col-sm-6 col-lg-3"  >
        <NetflixCard 
           key={i}
           imgSrc={val.posterurl} 
           title={val.title} 
           movtype1={val.genres[0]} 
           movtype2={val.genres[1]} 
           movtype3={val.genres[2]} 
           link={val.link}
           movrat={val.imdbRating}
        />
     </div> 
   );
}
function Loopcard(){
    // calling ncard function
    // map method comes with key value
   return  Moviecollect.map(ncard);  
}


//(Amazon Card)
const AmazLoop = ()=> {
   let movarray = ['Science', "Children", 'literature'];
 return(
      <div className="mb-3 col-md-3 col-sm-6 col-lg-3"  >
        <NetflixCard 
           imgSrc='https://www.themoviedb.org/t/p/w1280/9vZJbWmW24GaXFZYAjUowbcEt0e.jpg' 
           title='Flora & ULYSSESS'
           movtype1={movarray[0]} 
           movtype2={movarray[1]} 
           movtype3={movarray[2]} 
           link='https://www.youtube.com/watch?v=tQ0mzXRk-oM'
           movrat='8.5'
        />
     </div> 
   );
}

//(Top Collection)
const topmov = (val, i)=>{
   const rating = val.imdbRating;
   if(rating>=8.5)
   {  
      console.log(rating);
      return(
         <div className="mb-3 col-md-3 col-sm-6 col-lg-3"  >
          <NetflixCard 
               key={i}
               imgSrc={val.posterurl} 
               title={val.title} 
               movtype1={val.genres[0]} 
               movtype2={val.genres[1]} 
               movtype3={val.genres[2]} 
               link={val.link}
               movrat={val.imdbRating}
          />
       </div> 
       );
   }
} 
const Topmovie = ()=>{
   return  Moviecollect.map(topmov);  
}

//Action Movie 
const Actmovie =()=>{
   return Moviecollect.map( (val,i)=>{
      if((val.genres[0] == 'Action') ||(val.genres[1] == 'Action') )
      {
       return(
          <div className="mb-3 col-md-3 col-sm-6 col-lg-3"  >
           <NetflixCard 
                key={i}
                imgSrc={val.posterurl} 
                title={val.title} 
                movtype1={val.genres[0]} 
                movtype2={val.genres[1]} 
                movtype3={val.genres[2]} 
                link={val.link}
                movrat={val.imdbRating}
           />
        </div> 
        );
 
    }
 })

}


export {Loopcard, AmazLoop, Topmovie, Actmovie};
 

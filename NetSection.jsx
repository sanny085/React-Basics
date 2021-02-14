import NetflixCard from './NetflixCard';
 
 function NetSection()
  {
      return(
        <div className="container"> 
        <div className="row ">
         <div className="col-md-3 col-sm-6 col-lg-3">
           <NetflixCard imgSrc="https://storage.googleapis.com/cdn.spoilertv.com/images/headers/the-100.jpg" 
           title="The 100" movtype="2014 ‧ Sci-fi ‧ 7 seasons" />
         </div>
    
      <div className="col-md-3 col-sm-6 col-lg-3">
           <NetflixCard imgSrc="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/84b24359960c53fc83af12127ea67e202489750fc7d0ec3fe7306ef612b2972f._UY500_UX667_RI_V_TTW_.jpg" 
           title="MR. ROBOT" movtype="Science, Cyber-security" 
           link="https://www.imdb.com/video/vi699842329?playlistId=tt4158110&ref_=tt_ov_vi"/>
      </div>
      
      <div className="col-md-3 col-sm-6 col-lg-3"> 
       <NetflixCard imgSrc="https://storage.googleapis.com/cdn.spoilertv.com/images/headers/the-100.jpg" 
       title="The 100" movtype="2014 ‧ Sci-fi ‧ 7 seasons"
       link="https://www.imdb.com/video/vi699842329?playlistId=tt4158110&ref_=tt_ov_vi" />
      </div>
      
      <div className="col-md-3 col-sm-6 col-lg-3">
           <NetflixCard imgSrc="https://storage.googleapis.com/cdn.spoilertv.com/images/headers/the-100.jpg" 
           title="The 100" movtype="2014 ‧ Sci-fi ‧ 7 seasons"
           link="https://www.imdb.com/video/vi699842329?playlistId=tt4158110&ref_=tt_ov_vi" />
      </div>
      
      </div>
      </div>
      );
   
 }

 export default NetSection;
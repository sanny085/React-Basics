import React from 'react';
import './App.css'
import Orderlist from './Orderlist';
import Paragraph from './Paragraph';
import {add, sub, mul, divid} from './Calculator';
import NetSection from './NetSection';
import {useState,useEffect} from 'react';
import Amazon from './Amazon';
import TopCollectMovie from './TopCollectMovie';
import ActionMovie from './ActionMovie';
import ComedyMovie from './ComedyMovie';
import TodoList from './TodoList';
import AddIcon from '@material-ui/icons/Add'; 
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
 



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
var AnoGallery = {
  color:'rgb(224, 162, 116)',
  textAlign:'center',
  textTransform:'uppercase',
  fontWeight:'bold',
  margin:'20px 0px',
  textShadow:'0px 2px 4px #ffe9c5',
  fontFamily: "'IBM Plex Sans', sans-serif",
  fontSize:'3rem'
};  

const smallAnimal = ['Goat', 'Rat', 'Dog', 'Cat'];
const bigAnimal = ['Cow', 'Buffalo', 'Elephant'];

const allAnimal = [...smallAnimal, ...bigAnimal];
console.log(allAnimal);


{/*Master Page*/}
const App = () => {
  
  const [age, setAge] = useState(0);
  const [ondata, otherDatag]  = useState(20);
  
  const color = 'red';
  //React Hooks state ckanging
  const [clr, setClr]  = useState(color);
  
// For Both card Amazon and Netflix
const [visible1, setVisible1]= useState(false);
const [visible2, setVisible2]= useState(false);

// Top movie state 
const [topm, setTopm]= useState(false);

//Action movie
const[action,setAction] = useState(false);

//comedy & Drama Movie
const [comedy, setComedy] = useState(false);

// For Form user input
const [name1, setName1] = useState('');
const [name2, setName2] = useState('');
const [subm, setSub] = useState('');

//Todo Data
const [todo, setTodo] = useState('');
const [subtodo, setSubTodo] = useState([]);

useEffect(() => {
  alert("Do You Want to Watch Action Movie");
  
}, [action] )

const plus = () => {
    let color1 = '#242B2E';
    setClr(color1);
    otherDatag(ondata+5);
};
const minus = () => {
  if(ondata > 0){
    otherDatag(ondata-5);
    let color2 = 'green';
    setClr(color2);
  }
  else{
    otherDatag(0);
    alert('Sorry You Can not Decrement! Number is 0');
  }
   
};  
const sayHello = () => {
    document.getElementById('btPar').innerHTML = "Hello Developer";
};
const amazonFun = () => { 
    setVisible1(true);
    setVisible2 (false);
    setTopm(false);
    setAction(false);
    setComedy(false);
};
const netflixFun = () => { 
    setVisible2 (true);  
    setVisible1(false);
    setTopm(false);
    setAction(false);
    setComedy(false);
};
const topCollec = ()=> {
  console.log("This is Sanny");
  setTopm(true);
  setVisible1(false);
  setVisible2 (false);
  setAction(false);
  setComedy(false);
};
const actionCollect = ()=> {
  setAction(true);
  setVisible1(false);
  setVisible2 (false);
  setTopm(false);
  setComedy(false);
};
const comedyCollect = ()=>{
  setComedy(true);
  setAction(false);
  setVisible1(false);
  setVisible2 (false);
  setTopm(false);
};
//When Call any Event it return pass >>>>OBJECT<<<< (like:- event)
const inpuFun1 = (event) => {
  setName1(event.target.value);
};
const inpuFun2 = (event) => {
  setName2(event.target.value);
};

const submitData = (event) => {
  //event.prevent will not refresh page before submit form 
  event.preventDefault();
  setSub(name1+' '+name2);
  setName1('');
  setName2('');
  
};

//Todo List Item
const todoInput = (event) => {
  setTodo(event.target.value);
}

const todoSubmit = () => {
  let getvalue = todo.trim();
  if(getvalue !== '' )
   {
     setSubTodo( (oldItem) => {
       return [...oldItem, todo];
   });
   setTodo('');
  }

}

const deleteItem = (id) => {
  console.log("Deleted");
  
  setSubTodo( (oldItem) => {
    return oldItem.filter((arrEle, index)=> {
        return index !== id;
    } ) ;
  });
}
//End Todo List Item


 const a = "🔥🔥";
  return ( 
    <React.Fragment>
   {a}
     <div className="card mx-auto mt-3"  style={{"width":"320px","backgroundColor":"lightblue" }}>
        <div className="card-body">
            <h4 className="card-title text-center text-muted p-4"> {age} </h4>
              <button className="btn btn-warning d-block mx-auto" onClick={ () => setAge(age + 1) }>
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
     
  {/*<h3 className={`  ${AnoGallery}`}>Another Services</h3>*/}
  <div className="container1" style={{backgroundColor : clr}}>
      <a href="http://aictech.co.in/" target="_blank">
        <img className="img1 border border-secondary border-2" src={img1} title="check Image" alt="Background Image"/>
      </a>
      <img className="img1 border border-secondary border-2" src={img2} title="check Image" alt="Background Image"/>
      <img className="img1 border border-secondary border-2" src={img3} title="check Image" alt="Background Image"/>
      <img className="img1 border border-secondary border-2" src={img4} title="check Image" alt="Background Image"/>
  </div>
  <br/>  

<center>
  <h5 class="text-info">Click to Change Background Color</h5>
    <button type="button" className="btn btn-dark mx-3" onClick={()=>plus()}>++</button>
    <button type="button" className="btn btn-dark mx-3" onClick={()=>minus()}>--</button>
    {ondata}
</center> 

<br/><br/><br/><br/><br/><br/> 

<div className="container-fluid">
    <div className="container">
      <p class="text-center text-dark"><h4>{subm}</h4></p>
       <div class="d-flex justify-content-center">
         <form onSubmit={submitData}> 
            {/*When Calling onChange Event it passes an OBJECT (x, or any varible can take)*/}
            <input type="text"  placeholder="First Name" onChange={inpuFun1} value={name1}/>
            <input type="text"  placeholder="Last Name" onChange={inpuFun2} value={name2}/>
            <br/>
            <Button variant="contained" color="primary" style={{backgroundColor: '#0062cc'}} type="submit">Submit</Button>
         </form>
        </div>
    </div>
</div>
<br/><br/><br/>  


  <center>
      <Button variant="contained" onClick={sayHello}>Click me!</Button> 
      <p id="btPar">Hello India</p>  
  </center>
<br/><br/><br/><br/>




{/*Todo List*/}
<div className="container-fluid">
    <div className="container">
        <div className="card shadow-sm pt-4  mx-auto d-block" style={{width:"38rem"}}>
        <h3 className="todoHeader">TODO LIST</h3>
            <div className="card-body">
              <div className="row d-flex justify-content-around">
                <form>
                  <div className="col">
                    
                    <input type="text" value={todo} className="inputSty" onChange={todoInput} placeholder="Item" required/>
                  
          {/* <button type="button"  onClick={todoSubmit} className="todoButton">
            <span className="p-4 rounded-circle">+</span>
          </button> */}
             
                    <button type="button" class="btn ml-3 btn-circle btn-lg" onClick={todoSubmit}>
                     <Tooltip title="Add More">   
                      <AddIcon style={{color:"white"}}/>
                     </Tooltip>    
                    </button>
          
                  </div>
                </form>
              </div>

          {/*Card list*/}
          <div className="row d-flex mt-3  ">
              <table class="table table-hover mx-auto">
                  <tbody>
                    {
                    subtodo.map( (itemVal,index) => {
                    return(
                     <TodoList 
                       item={itemVal} 
                       key={index} 
                       id={index} 
                       onSelect={deleteItem}/>
                       ) 
                      } )
                    }
                 </tbody>
              </table>
          </div>

              <br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        </div>
    </div>
</div>
{/*End Todo List*/}




<br/><br/><br/><br/><br/> 
{/*Material UI Card*/}
<Card style={{ maxWidth: "345px"}}>
      <CardActionArea>
        <CardMedia
          style={{height: "140px"}}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
{/*End Material UI Card*/}
<br/><br/><br/><br/><br/> 




<h3 style={GalleryText}>Best Collection</h3>
<div className="container-fluid">
     
<button type="button" className="btn btn-outline-danger mx-3" onClick={()=>amazonFun()}>Amazon Series</button>
<button type="button" className="btn btn-outline-danger mx-3" onClick={()=>netflixFun()}>Netflix Series(All)</button>

<button type="button" className="btn btn-outline-danger mx-3" onClick={()=>topCollec()}>Top Collection</button>
<button type="button" className="btn btn-outline-danger mx-3" onClick={()=>actionCollect()}>Action</button>
<button type="button" className="btn btn-outline-danger mx-3" onClick={()=>comedyCollect()}>Comedy & Drama</button>
{/*<button type="button" className="btn btn-outline-danger mx-3" onClick={()=>amazonFun()}>Science</button>
<button type="button" className="btn btn-outline-danger mx-3" onClick={()=>netflixFun()}>Netflix Series</button>
*/}



    <> 
    <br/> 
    <p class="float-right text-dark">Total{}</p>
    <br/> 
      {window.onload = ()=>amazonFun()}
      {visible1 ? <Amazon/>  : ""}
      {visible2 ?  <NetSection/> : ""}
      {topm ? <TopCollectMovie/> : ""}
      {action ? <ActionMovie/> : ""}
      {comedy ? <ComedyMovie/> : ""}
    </>
      
</div>
    
   </React.Fragment>
  );
}

export default App;
 
  

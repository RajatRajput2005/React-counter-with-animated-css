import logo from './logo.svg';
import './App.css';
 import {useState} from 'react'

function App() {
   let [counter , rajCounter] = useState(15)
  // let counter = 5 
   const addvalue  = () => {
    //  console.log( "value added" ,  counter );

   if( counter < 20){
    counter = counter +1 
   }
    else 
      counter = 15
       rajCounter(counter)
   }
    const subvalue =()=> {
      //  console.log( " value decrease" ,counter)
       if( counter >= 1)
       counter = counter -1 
      else 
      counter = 0 
       rajCounter(counter)
       
    }
    const refresh =()=>
    {
      rajCounter(15)
    }

  return (
    <>
    <div className='App-header'>
    <h1>  "Jai shree  ram 🚩</h1>
<h2> React counter App</h2>
   
    <h3>Counter value : { counter}</h3>
     <button onClick= {addvalue}> <span>Increase value</span> {counter} </button>
     <br/>
     <button onClick ={ subvalue}> <span> Deccrease value</span> {counter} </button>
     <br/>
     <button onClick={refresh} ><span>Refresh</span></button>
     </div>
   
    </>
  );
}

export default App;

import { useState } from "react";
import Statistics from "./Statistics";


const  Feedback_app = () =>{
    
const [good, setgood] = useState(0);
const [neutral , setneutral] = useState(0);
const [bad,setbad ] = useState(0);

const pressgood = () =>{
     setgood(good+1)
}

    const pressnetral = () =>{
        setneutral(neutral+1)
    
    }
    const pressbad = () =>{
        setbad(bad+1)
    
    }
 
  
    


    return (
        <>      
          <h2> Give Feedback </h2>
        <button onClick={pressgood}> good </button>
        <div >
            <h3> 

            </h3>
             </div>
        <button onClick={pressnetral}> neutral </button>
        <div>
        <h3>

        </h3>
        </div>

        <button onClick={pressbad}> bad </button>

            <Statistics good = {good} bad = {bad} neutral = {neutral}/>
    
        </>


    )

}

export default Feedback_app
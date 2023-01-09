import { useState } from "react"
const History_app =()=>{
    const [right, setright] = useState(0)
    const [left,setleft] = useState(0)
    let first = ["hello "]

    const [history , sethistory] = useState(" ");

    const pressright = () =>{
        setright(right+1)
        sethistory(history+" R ")
    }
    const pressleft = () =>{
        setleft(left+1)
        sethistory(history + " L" )
    }
   
       


   
    return (

        <>
        <h4>{left}
        <button onClick={pressleft}>Left</button>
        <button onClick={pressright}>Right</button>
       
        
        {right}
        </h4>
        <h1>
         Button Clicked history :
            {history}
        </h1>
       
        </>
    )
}
export default History_app
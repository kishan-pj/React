const Statistics = ({ good,bad , neutral}) =>{
    
    const all =()=>good+bad+neutral    

    const average  = () => (good - bad )/all()

    

    return(
        <div class ="statistics ">
        <h2> Statistics </h2>
    <h3>good = {good}</h3>
    <h3>netral= {neutral}</h3>
    <h3>bad= {bad}</h3>
    <h3>all= {all()}</h3>
   
    <h3>average= {average()} </h3>
    
    <h4>good percentage = {(good)/(all())*100 }% </h4>
    
    </div>
    )
}

export default Statistics
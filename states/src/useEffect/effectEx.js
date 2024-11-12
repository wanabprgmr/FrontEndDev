import React ,{ useState, useEffect } from "react";
import axios from "axios" 

function EffectTutorial(){

    const [data, setData] = useState("")
    const [count, setCount] = useState(1)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            setData(response.data[count].name);
            console.log("api was called.");
            
           })
    }, [count])

    function increaseCount(){
        setCount(count+1)
    }
return (
    <>
    <h1>useEffect</h1>
      <h1>hello {data}</h1>
      <p>Your roll no is {count}</p>
      <button onClick={increaseCount}>count</button>
      
      <p>------------------------------------------------------</p>
    </>
)
}

export default EffectTutorial
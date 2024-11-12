import React , {useRef, useState}from "react";

function RefTutorial(){
    const inputRef = useRef(null)
    const [value, setValue] = useState("")
    
    function updateP(){
        setValue(inputRef.current.value)
        inputRef.current.value = ""
    }
    function focus(){
        inputRef.current.focus()
    }



    return(
        <>
        <h1>useRef</h1>
        <p>{value}</p>
        <input placeholder="Enter...." ref={inputRef}></input>
        <button onClick={focus}>click to focus</button>
        <div>
        <button onClick={updateP}>Click to update</button>
        </div>
        <p>------------------------------------------------------</p>
        </>
    )
}

export default RefTutorial
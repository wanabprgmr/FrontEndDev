import React , {useRef, useState}from "react";
import UseWriteTofile from "../customHooks/useWriteToFile";

function RefTutorial(){
    const inputRef = useRef(null)
    const fileNameRef = useRef("textfile.txt")
    const [value, setValue] = useState("")
    
    function updateP(){
        setValue(inputRef.current.value)
        inputRef.current.value = ""
    }
    function focus(){
        inputRef.current.focus()
    }
    function saveToFile(){
        UseWriteTofile(inputRef.current.value, fileNameRef.current.value + ".txt")
    }



    return(
        <>
        <h1>useRef</h1>
        <p>{value}</p>
        <input placeholder="Enter...." ref={inputRef}></input>
        <button onClick={focus}>click to focus</button>
        <button onClick={updateP}>Click to update</button>
        <div>
        <input placeholder="Enter file name" ref={fileNameRef}></input>
        <button onClick={saveToFile}>Save to file</button>
        </div>
        <p>------------------------------------------------------</p>
        </>
    )
}

export default RefTutorial
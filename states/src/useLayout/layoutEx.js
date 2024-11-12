import React ,{ useEffect, useLayoutEffect } from "react"

function LayoutTutorial(){

    useLayoutEffect(() => {
        console.log("in use LayoutEffect");
    },[]);

    useEffect(() => {
        console.log("in use effect");
    },[]);

    return (
        <>
        <h1>useLayoutEffect</h1>
         
          
        <p>------------------------------------------------------</p>
        </>
    )
    }


export default LayoutTutorial
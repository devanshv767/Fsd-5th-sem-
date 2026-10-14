import React, { useEffect, useState } from 'react'

export default function MyUseEffect() {

    const [counter, setCounter] = useState(0);
    const [pointer, setPointer] = useState(100);
    
    function increasecounter(){
        setCounter(counter+10);
    }
    function decreasecounter(){
        setPointer(pointer-10);
    }

    useEffect(() => {
        console.log("Counter = " + counter);
        console.log("Pointer = " + pointer);
    },[pointer,counter])

    return (
        <div>
            <h2>Counter App</h2>
            <h1 style = {{color:'red'}}>Counter Value = {counter}</h1>
            <h1 style = {{color:'green'}}>Pointer Value = {pointer}</h1>
            <button onClick = {increasecounter}>Counter</button>
            <button onClick={(decreasecounter)}>pointer</button>
        </div>
    )
}
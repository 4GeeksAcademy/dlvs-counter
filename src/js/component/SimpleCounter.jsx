import React, { useEffect, useState } from 'react';

export const SimpleCounter = () => {
    const [ counter, setCounter ] = useState(0)
    const [ running, setRunning ] = useState(false)

    const handleButton = () => {
        setRunning(!running)
    }
    const handleReset = () => {
        setCounter(0)
    }

    useEffect (() => {
        if(running){
            const newInterval = setInterval(() => setCounter(counter => counter +1), 100)
            return () => clearInterval(newInterval);
                }
        },  [running])

    return (
        <div className="container">
            <h1 className="text-center">Simple Counter</h1>
            <h2 className={"text-danger"}>{'clock'}</h2>
            <div className="big-counter">
            <div>{<i className="fas fa-clock"></i>}</div>
                <div>{Math.floor(counter / 10000000000 % 10)}</div>
                <div>{Math.floor(counter / 1000000000 % 10)}</div>
                <div>{Math.floor(counter / 100000000 % 10)}</div>
                <div>{Math.floor(counter / 10000000 % 10)}</div>
                <div>{Math.floor(counter / 1000000 % 10)}</div>
                <div>{Math.floor(counter / 100000 % 10)}</div>
                <div>{Math.floor(counter / 10000 % 10)}</div>
                <div>{Math.floor(counter / 1000 % 10)}</div>
                <div>{Math.floor(counter / 100 % 10)}</div>
		<div>,</div>
                <div>{Math.floor(counter / 10 % 10)}</div>
                <div>{Math.floor(counter % 10)}</div>
                <div className="gap-2">
                    <button className="btn btn-outline-success me-1" onClick={handleButton} type="button" >
                        {running ? 'Pause' : 'Start'}
                        </button>
                    <button className="btn btn-outline-danger" type="button" onClick={handleReset} >Reset</button>
                </div>
            </div >
        </div >
    )
}
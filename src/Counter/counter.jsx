import { useState } from "react"
import "./conunter.css"

const Counter = () => {
    const [number,setNumber] =useState(0)

    const decreseFun = () => {
        setNumber(number-1)
    }

        const incrseFun = () => {
        setNumber(number+1)
    }
    return(
        <>
        <div className="btn-container">
            <button onClick={decreseFun}>Decrease</button>
            <div className="count">
            {number}
            </div>
                <button onClick={incrseFun}>Increase</button>
        </div>
        </>
    )
}
export default Counter
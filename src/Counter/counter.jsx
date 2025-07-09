import { useState } from "react"

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
        <div>
            <button onClick={decreseFun}>Decrease</button>
            {number}
                <button onClick={incrseFun}>Increase</button>
        </div>
        </>
    )
}
export default Counter
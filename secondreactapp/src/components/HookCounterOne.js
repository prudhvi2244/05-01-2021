import React ,{ useState } from 'react'

function HookCounterOne()
 {

    let [count,setCount]=useState(19)

    return (
        <div>
            <h3>Pizza Store</h3>
            <hr/>
            <h4>Number of Pizza : {count}</h4>
            <button onClick={()=>setCount(count-1)}>Buy Pizza</button><br/>
            <hr/>
            <button onClick={()=>setCount(count-2)}>Buy  2 Pizza's</button><br/>
            <hr/>
            <button onClick={()=>setCount(count+1)}>Add Pizza</button><br/>
            <hr/>
            <button onClick={()=>setCount(count+5)}>Add 5 Pizza's</button><br/>
        </div>
    )
}

export default HookCounterOne

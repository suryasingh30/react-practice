import { useCallback, useMemo, useState } from "react";

// export default function UseMemo(){

//     const [count, setCount] = useState(0);
//     // const [total, setTotal] = useState(0);

//     // function sum(count){
//     //     const t = 0;
//     //     for(let i=0; i<count; i++)
//     //         t += i;
//     //     setTotal(t);
//     // }

//     const sum = useMemo(function(){
//         const t = 0;
//         for(let i=0; i<=count; i++)
//             t += i;
//         return t;
//     }, [count]);

//     const 

//     return ( 
//         <>
//             <input type="number" name="count" value={count} onChange={(e)=>setCount(e.target.value)}></input>

//             <label>
//                 Sum- {sum}
//             </label>
//         </>
//     )

// }

export default function UseCallback(){

    const [count, setCount] = useState(0);
    const [updateOnClick, setUpdateOnClick] = useState(0);

    const onClick = useCallback(()=>{
        console.log("clicked");
    }, []);

    return <div>
        <Child onClick={onClick}></Child>
        <button onClick={()=>{
            setCount(count+1);
        }}>Click {count}</button>
    </div>
}

const Child = memo(({onClick})=>{
    console.log("child rendered")

    return <div>
        <button onClick={onClick}>Button clicked</button>
    </div>
})
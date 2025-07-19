import react from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {

    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);

    function Random(){
        return Math.random();
    }

    function increment(currCount){
        // setCount(prevCount => prevCount+1);
        return function(){
            setCount(currCount+1);
        }
    }

    useEffect(()=>{
        const update = async () => {
            const num = Random();
            setNum(num);
        };
        update();
    },[]);

    return <>
        This is Home
        <p></p>
        num = {num}
        <p></p>
        count = <button onClick={increment(count)}>{count}</button>
    </>
}

export default Home;
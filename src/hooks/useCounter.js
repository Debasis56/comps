import { useEffect, useState } from 'react'
function useCounterAndLog(initialCount){
    const [count, setCount] = useState(initialCount);
    useEffect(()=>{
        console.log(count);
    }, [count])

    function handleClick (){
        setCount(count+1);
    }

    return {
        count,
        handleClick
    }

}
export default useCounterAndLog;

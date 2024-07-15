import { useState } from 'react';

/**
 * useState를 사용하는 Hook
 * @param {*} initialValue
 */
function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);   // count이라는 state 생성
    
    const increaseCount = () => setCount((count) => count + 1); // count state 값을 1 더한다.
    const decreaseCount = () => setCount((count) => Math.max(count - 1 , 0));   // count state 값을 1 빼지만 0 이하는 내려가지 않는다.

    return [count, increaseCount, decreaseCount];
}

export default useCounter;
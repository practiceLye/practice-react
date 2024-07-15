import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);    // isFull이라는 state 생성
    const [count, increaseCount, decreaseCount] = useCounter(0);    // useCounter에서 state를 불러옴

    useEffect(() => {
        console.log("====================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    }); // 의존성 배열이 없는 useEffect, 컴포넌트가 mount 될 때와 update될때 호출

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY); // isFull state에 count가 10이상인지 아닌지 여부(true/false)를 저장
        console.log(`Current count value: ${count}`);
    }, [count]); // 의존성 배열이 있는 useEffect, 컴포넌트가 mount 될 때와 count 값이 변경될때 호출

    return (
        <div style={{ padding: 16 }}>
            <p>{`총 ${count}명 수용했습니다.`}</p>
            
            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>} {/* isFull이 true일 경우, 표시 */}
        </div>
    );
    
}

export default Accommodate;
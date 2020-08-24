import React, {useState} from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };
  const onDecrease = () => {
    setNumber((prevNumber) => prevNumber - 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>1</button>
      <button onClick={onDecrease}>-1</button>
      {/*  reandering할때 호출되는게아니라 
        클릭했을떄 호출해야하므로 함수()사용하면안됨 */}
    </div>
  );
}

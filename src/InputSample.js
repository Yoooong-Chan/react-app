import React, {useState, useRef} from 'react';

//구조 => name : value / name을 ul에 표현하려면 value값이 필요

export default function InputSample() {
  const [inputs, setInputs] = useState({
    name: '', // '' 사이의 값을 value
    nickname: '',

    // 각 input의 name을통해서 id처럼 특정한곳을위해서
    // 사용할수있음
  });
  const nameInput = useRef();
  const {name, nickname} = inputs;

  const onChange = (e) => {
    const {name, value} = e.target;

    setInputs({...inputs, [name]: value});
    // e.target.name : e.target.value
    console.log(name);
    console.log(value);
  };
  // 객체를 update할땐 기존에 객체를 복사하고 (...스프레드사용)
  // [name] 사용해서 객체의 name을 value로 사용하겠단의미
  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
    nameInput.current.focus();
  };
  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
        ref={nameInput}
      />

      <button onClick={onReset}>초기화</button>
      <div>
        <b>값:</b>
        {name} :{nickname}
      </div>
    </div>
  );
}

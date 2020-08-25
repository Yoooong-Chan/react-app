import React, {useRef, useState} from 'react';

import ArraySample from './ArraySample';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const {username, email} = inputs;
  const onChange = (e) => {
    const {name, value} = e.target;
    console.log(e.target.name, e.target.value);
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'kimchan',
      email: 'gogo@naver.com',
    },
    {
      id: 2,
      username: 'tester',
      email: 'banana@naver.com',
    },
    {
      id: 3,
      username: 'zeus',
      email: 'khna@naver.com',
    },
  ]);
  const nextId = useRef(4);
  // useRef => 특정 dom 생성 / 어떤 변수를 기억하고싶을때 (리랜더링되도 기억함)

  // useRef로 로하면 값이 바껴도 컴포넌트가 리랜더링 되지않는다는것.

  // push splice sort x 배열의 불변성을 지키면서 항목추가해야함
  // 1. sperad 방식사용하기
  // 2. concat함수 사용하기
  const onCreate = (e) => {
    const user = {
      id: nextId.current,
      username,
      email,
      // user 객체만듬
    };
    setUsers(users.concat(user));
    //  users의 배열을 user에 합쳐짐 => 두개가합쳐짐

    // setUsers([...users, user]);
    // // 기본 배열을 복사하고 user을 추가하면
    // // 원본에 user 객체가 추가됨
    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  };

  return (
    <div>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <ArraySample users={users} />;
    </div>
  );
}

export default App;

import React from 'react';

export default function CreateUser({username, email, onChange, onCreate}) {
  // onCreate => 새로운 항목을 등록
  // 필요한 값들을 props로 받아와서 사용

  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

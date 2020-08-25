import React from 'react';

function User({user}) {
  // users.map의 value가 파라미터 user에 들어있음
  return (
    <div>
      <b>{user.username}</b>
      <span>({user.email})</span>
    </div>
  );
}

export default function ArraySample() {
  const users = [
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
  ];

  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
      {/*  map ( user , index )  => users의 값들을 파라미터 user로 전달함  
      => 각 user마다 key값을 할당해줘야 성능면에서좋아짐 
      => map을 사용할때 key값을 꼭사용해야함
      */}
    </div>
  );
}

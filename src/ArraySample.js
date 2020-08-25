import React from 'react';

function User({user, onRemove}) {
  // users.map의 value가 파라미터 user에 들어있음
  // {} 있어야함
  const {username, email, id} = user;
  return (
    <div>
      <b>{user.username}</b>
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

export default function ArraySample({users, onRemove}) {
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} onRemove={onRemove} />
      ))}
      {/*  map ( user , index )  => users의 값들을 파라미터 user로 전달함  
      => 각 user마다 key값을 할당해줘야 성능면에서좋아짐 
      => map을 사용할때 key값을 꼭사용해야함
      */}
    </div>
  );
}

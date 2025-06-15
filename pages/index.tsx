import React from 'react';
export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Fantasy AI Helper</h1>
      <button onClick={() => alert("캐릭터 추가")}>캐릭터 추가</button>
    </div>
  );
}
import React, { useState } from 'react';

type Character = {
  name: string;
  trait: string;
};

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [input, setInput] = useState('');
  const [trait, setTrait] = useState('');

  const handleAdd = () => {
    if (input && trait) {
      setCharacters([...characters, { name: input, trait }]);
      setInput('');
      setTrait('');
    }
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>Fantasy AI Helper</h1>
      <div>
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="캐릭터 이름" />
        <input value={trait} onChange={e => setTrait(e.target.value)} placeholder="성격" />
        <button onClick={handleAdd}>캐릭터 추가</button>
      </div>
      <ul>
        {characters.map((char, i) => (
          <li key={i}>{char.name} - {char.trait}</li>
        ))}
      </ul>
      <hr />
      <p><strong>🗺 지도 생성:</strong> 이 영역에 중세풍 지도가 표시될 예정입니다.</p>
      <p><strong>🎤 음성 입력:</strong> 브라우저 음성 인식 API 연결 예정입니다.</p>
    </main>
  );
}
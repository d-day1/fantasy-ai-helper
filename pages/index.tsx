import React, { useState } from 'react';
import CharacterForm from '../components/CharacterForm';

export default function Home() {
  const [characters, setCharacters] = useState([]);

  const addCharacter = (character: any) => {
    setCharacters([...characters, character]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Fantasy AI Helper</h1>
      <CharacterForm onAdd={addCharacter} />
      <h2>캐릭터 목록</h2>
      <ul>
        {characters.map((c, i) => (
          <li key={i}>{c.name} - {c.trait}</li>
        ))}
      </ul>
    </div>
  );
}
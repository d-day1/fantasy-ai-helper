import React, { useState } from 'react';

export default function CharacterForm({ onAdd }: any) {
  const [name, setName] = useState('');
  const [trait, setTrait] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (name && trait) {
      onAdd({ name, trait });
      setName('');
      setTrait('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="캐릭터 이름"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        placeholder="성격/특징"
        value={trait}
        onChange={e => setTrait(e.target.value)}
        required
      />
      <button type="submit">추가</button>
    </form>
  );
}
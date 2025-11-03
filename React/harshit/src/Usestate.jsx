import React, { useState } from 'react';

function Usestate() {
  const [color, setColor] = useState('blue');
  const [text, setText] = useState('Click Me');

  function change() {
    if (color === 'blue') {
      setColor('green');
      setText('Now I am Green');
    } else {
      setColor('blue');
      setText('Now I am Blue');
    }
  }

  return (
    <div>
      <button
        onClick={change}
        style={{
          backgroundColor: color,
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        {text}
      </button>
    </div>
  );
}

export default Usestate;

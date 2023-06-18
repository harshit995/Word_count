import React, { useState } from 'react';
import './App.css'

function App() {
  const [text, setText] = useState('');
  const wordCount = text.trim().split(/\s+/).length;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (

    <div id='word'>
      <div id='hi'>
        <h1>Responsive Paragraph count</h1>
        <textarea
          rows="9"
          cols="50"
          placeholder="Type your paragraph here...."
          value={text}
          onChange={handleChange}
        />
        <p>Word Count: {wordCount}</p>
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react'
import './App.css'

function App(){

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetchQuote();
  }, [])

  const fetchQuote = async function(){
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  }

  return (
    <div className="App">
      <div className="quote-container">
        <p className="quote">{quote}</p>
        <p className="author">- {author}</p>
        <button onClick={fetchQuote}>New Quote</button>
      </div>
    </div>
  )
}

export default App;
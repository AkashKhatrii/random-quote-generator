import React, { useState, useEffect } from 'react'
import './App.css'

function App(){

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetchQuote();
  }, [])

  const fetchQuote = async () => {
    const apiKey = 'sT4ExKHqKF+NpxCJOBbRmg==jPBOTZf4EKbS8lhF';
    const url = 'https://api.api-ninjas.com/v1/quotes?category=happiness';

    try {
      const response = await fetch(url, {
        headers: {
          'X-Api-Key': apiKey,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.length > 0) {
        setQuote(data[0].quote);
        setAuthor(data[0].author);
      } else {
        setQuote('No quote found.');
        setAuthor('');
      }
    } catch (error) {
      console.error('Error fetching the quote:', error);
      setQuote('Failed to fetch the quote. Please try again later.');
      setAuthor('');
    }
  };


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
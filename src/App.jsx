import { useEffect, useState } from 'react'

import axios from 'axios'

import './App.css'

function App() {
  const [crossword, setCrossword] = useState([]);

    useEffect(() => {
      axios.get("https://raw.githubusercontent.com/doshea/nyt_crosswords/master/1980/01/01.json")
        .then(response => {
          setCrossword(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);

  const [guesses] = useState(() => {
    return JSON.parse(localStorage.getItem('guesses')) || []
  })

  useEffect(() => {
    window.localStorage.setItem('guesses', JSON.stringify(guesses));
  }, [guesses]);

  return (
    <div className="App">
      <div className='container'>
        {crossword.grid ? (
          crossword.grid.map((item, index) => (
            <div key={index} className={`cell ${item === '.' ? 'empty' : ''}`}>
              {`${item}`}
            </div>
          ))
        ) : null}
      </div>
    </div>
  )
}

export default App

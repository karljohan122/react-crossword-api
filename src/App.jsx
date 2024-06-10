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

    console.log(crossword)
  // const [guesses] = useState(() => {
  //   return JSON.parse(localStorage.getItem('guesses')) || []
  // })

  // useEffect(() => {
  //   window.localStorage.setItem('guesses', JSON.stringify(guesses));
  // }, [guesses]);

  return (
    <div className="App">
      N
    </div>
  )
}

export default App

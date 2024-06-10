import { useEffect, useState } from 'react'

import Crossword from '@jaredreisinger/react-crossword'

import './App.css'

function App() {
  const [crossword, setCrossword] = useState([]);
    useEffect(() => {
      fetch('https://github.com/doshea/nyt_crosswords/blob/master/1976/01/01.json')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setCrossword(data);
        });
    }, []);

  // const [guesses] = useState(() => {
  //   return JSON.parse(localStorage.getItem('guesses')) || []
  // })

  // useEffect(() => {
  //   window.localStorage.setItem('guesses', JSON.stringify(guesses));
  // }, [guesses]);

  return (
    <div className="App">

    </div>
  )
}

export default App

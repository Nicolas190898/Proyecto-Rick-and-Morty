import { useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards.jsx';
import React from 'react';
import axios from 'axios';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import { Routes, Route , useLocation } from 'react-router-dom'
import Form from './components/Form/Form';

function App() {
  const location = useLocation();


  const [characters, setCharacters] = useState([]);
  const onSearch = (id) => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          const existingCharacter = characters.find(
            (character) => character.id === data.id
          );
          if (existingCharacter) {
            window.alert("La carta ya ha sido agregada.");
            return;
          }
          setCharacters((oldChars) => [...oldChars, data]);
         
        }

      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          window.alert("Existen solo 826 personajes");
        }
      });
  };
  const onClose = (id) => {
    const charactersFiltered = characters.filter(character =>
      character.id !== id)
    setCharacters( charactersFiltered);
    
  }
 

  return (
    <div className="App">
      {
        location.pathname !== '/'
          ? <Nav onSearch={onSearch} />
          : null
      }
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
          />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/' element={<Form/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

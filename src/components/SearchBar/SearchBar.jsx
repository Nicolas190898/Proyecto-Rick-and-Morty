import style from "./searchBar.module.css";
import { useState } from "react";
export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");
  const [existingIds, setExistingIds] = useState([]);
  const handleChange = (event) => {
    setId(event.target.value);
  };
  const handleSearch = () => {
    setExistingIds([...existingIds, id]);
    onSearch(id);
    
    
  };
  const handleRandom = () => {
    const randomId = Math.floor(Math.random() * 826);
    setId(randomId);
    onSearch(id)
  };
  
  return (
    <div className={style.container}>
      <input type="search" onChange={handleChange} value={id} />
     <button className={style.button} onClick={() => { handleSearch(); setId('')}}>Agregar personaje </button>
      <button className={style.button} onClick={() => handleRandom()}>Personaje Random</button>
    </div>
        );
}

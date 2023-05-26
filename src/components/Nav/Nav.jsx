import SearchBar from "../SearchBar/SearchBar";
import style from './Nav.module.css'
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Nav({ onSearch }) {
  //  const location = useLocation();
  //  if (location.pathname === "/") {
  //    return null;
  //  } esta es una forma de usarlo.
  return (
    <nav className={style.contenedor}>
        <button className={style.button}>
          <NavLink to="/about" className={style.navbutton}>About</NavLink>
        </button>
        <button>
          <NavLink to="home" className={style.navbutton}>Home</NavLink>
        </button>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}
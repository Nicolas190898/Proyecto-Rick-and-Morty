import { useState } from 'react'
import style from './Form.module.css' 
const Form = () => {
  const [userData, setUserData ] = useState({
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value // Usamos bracket notacion porque tenemos varios input acc x name
     })
  }
  return (
    <form className={style.form}>
      <img
        className={`${style.img} ${style.blinking}`} 
        src="https://img1.freepng.es/20180818/qyk/kisspng-rick-sanchez-rick-and-morty-season-3-sichuan-cui-rick-and-morty-portal-wallet-multicolour-5b77e95301ca10.8815974515345851710073.jpg"
        alt="img-rick and morty"
      />
      <label htmlFor="email" className={style.label}>
        <span className={style.span}>EMAIL</span>
        <input
          type="email"
          name="email"
          placeholder="Email..."
          className={style.input}
          value={userData.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="password" className={style.label}>
        <span className={style.span}>PASSWORD</span>
        <input
          type="password"
          name="password"
          className={style.input}
          value={userData.password}
          onChange={handleChange}
        ></input>
      </label>
      <button className={style.button}>Submit</button>
    </form>
  );
}

export default Form;



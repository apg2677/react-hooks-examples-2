import "./App.css";
import { useEffect, useState, useContext, createContext } from "react";

const LanguageContext = createContext();

function App() {
  const [language, setLanguage] = useState('en')

  const changeLanguage = (lang) => {
    setLanguage(lang)
  }
  return (
    
  );
}

function Header() {
  return (
    <header>
      <h1>{language === 'en'? 'Hello': 'Hola'}</h1>
      <button onClick={changeLanguage}>English</button>
      <button onClick={changeLanguage}>Spanish</button>
    </header>
  )
}

export default App;

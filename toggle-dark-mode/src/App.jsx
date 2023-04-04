import './App.css'
import { createContext, useState } from 'react'

import LoginForm from './components/LoginForm'
import ToggleTheme from './components/ToggleTheme'

const themeContext = createContext(undefined);
const setThemeContext = createContext(undefined)

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div className={ `App ${theme}` }>
      <themeContext.Provider value={ theme }>
        <setThemeContext.Provider value={ setTheme }>
          <ToggleTheme />
          <LoginForm />
        </setThemeContext.Provider>
      </themeContext.Provider>
    </div>
  )
}

export { App, themeContext, setThemeContext }

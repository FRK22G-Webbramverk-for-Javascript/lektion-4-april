import './App.css'
import { createContext, useState } from 'react'

const UserContext = createContext(undefined);
const ChangeUserContext = createContext(undefined);

import DisplayUsername from './components/DisplayUsername';
import ChangeUsername from './components/ChangeUsername';

function App() {
  const [username, setUsername] = useState('Ada Lovelace');

  return (
    <div className="App">
      <UserContext.Provider value={ username }>
        <ChangeUserContext.Provider value={ setUsername }>
          <DisplayUsername />
          <ChangeUsername />
        </ChangeUserContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export { App, UserContext, ChangeUserContext }

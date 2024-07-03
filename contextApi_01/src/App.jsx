import './App.css'

import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Welcome from './components/Welcome'
function App() {
  return (
    <UserContextProvider>
      <Login/>
      <Welcome/>
    </UserContextProvider>
  )
}

export default App

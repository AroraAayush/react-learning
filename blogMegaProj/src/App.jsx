
import './App.css'
import conf from './conf/config'
function App() {
  console.log(conf.appwritecollectionid) // "123"
// console.log(import.meta.env) // undefined
  return (
    <>
    <h3>This is a Mega Blog Project</h3>
    </>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Greeting from './Gretting.jsx'


//We can write functions here also
function SayHello()
{
   let username="Aayush!!!!"
   return (
      <div>
      Hello to react fam!!! {username}
      </div>
   )
}

const Ele=(<a  href='https://google.com' target='_blank'>
   This is latest created React element
</a>)


const AnotherEle=React.createElement('a',{href:'https://google.com', target:'_blank'},"This is another react A tag element using createElement")

ReactDOM.createRoot(document.getElementById('root')).render(
  
   <>
   <SayHello/>
  <Greeting />
   {/* <App/> */}
  
  </>
// Ele
// AnotherEle
)


// Can pass in render function in many ways :
// 1. Pass a function enclosed in </> which returns a HTML 
// 2. Directly write a HTML element enclosed in () 
// 3. Create a element using React.createElement and then pass it in render function 
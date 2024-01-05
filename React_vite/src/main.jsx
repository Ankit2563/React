import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    // parsing happen  to change in other form 
    <div>
      <h1>Custom App</h1>
    </div>
  )
}
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
  
  
  // MyApp()
  // <MyApp/>
  // reactElement
  anotherElement

    
 
)

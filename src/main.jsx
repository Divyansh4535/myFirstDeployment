import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// function MyApp() {
//   return (
//     <div>
//       <h1>Custom react app </h1>
//</div>
//   )
// }

const anotherElement = (
  <a href="https://google.com" target="_blank">visit Google </a>
)
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click to visit Google"
)

createRoot(document.getElementById('root')).render(

<StrictMode>
    <App />
  </StrictMode>
)

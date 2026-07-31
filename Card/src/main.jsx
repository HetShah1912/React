import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  );
}

// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click me to Visit Google'
// }

const anotherUser = "Shah";
const ReactElement = React.createElement(
  'a', //Tag
  {href: 'https://www.google.com', target: '_blank'}, //Properties
  "Click me to Visit Google",
  anotherUser // Evaluated Expressions
)

const AnotherElement = (
  <a href="https://www.google.com" target="_blank">Click me to Visit Google</a>
)
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  //   <MyApp />
  // </StrictMode>,
  
  // MyApp() : Valid
  // ReactElement(Object Type) : Invalid, Wrong Syntax
  // AnotherElement : Valid
  ReactElement //(Through React.createElement) : Valid
  

)

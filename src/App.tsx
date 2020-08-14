import React from 'react'
import { render } from 'react-dom'
import { GlobalStyle,Wrap } from './styles/GlobalStyle'
import 'antd/dist/antd.css';
import './styles/reset.css'
import Greetings from './components/Greetings'
import Codehost from './components/Codehost'


const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {
  return (
    <>
      <GlobalStyle/>
        <Wrap>
          <Greetings />
          <Codehost />
        </Wrap>
        
    </>
  )
}

render(<App />, mainElement)

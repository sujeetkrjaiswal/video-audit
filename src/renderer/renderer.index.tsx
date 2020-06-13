import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader'
import '../../public/index.scss'
import App from './App'

console.log(
  '👋 This message is being logged by "renderer.tsx", included via webpack',
)

ReactDOM.render(
  <ReactHotAppContainer>
    <App />
  </ReactHotAppContainer>,
  document.getElementById('root'),
)

import { systemPreferences } from 'electron'
import React, { FC } from 'react'

console.log('Can prompt touch Id', systemPreferences?.canPromptTouchID())

const App: FC = () => (
  <div>
    <h1>Renderer - test2</h1>
    <p>Some text</p>
  </div>
)

export default App

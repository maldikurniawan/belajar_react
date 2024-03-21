import { useState } from 'react'
import Sidenav from './components/sidenav'
import Main from './components/main'
import Work from './components/work'

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
    </div>
  )
}

export default App

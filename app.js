import React from 'react'
import ReactDOM from 'react-dom/client' // React 18+ uses 'react-dom/client'

const Parent = () => (
  <h1 className="msg" tabIndex={2}>
    hello world
  </h1>
)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Parent />)

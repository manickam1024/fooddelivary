import React from 'react'
import ReactDOM from 'react-dom/client' // React 18+ uses 'react-dom/client'

const Title = <h1>hello world </h1>

const Body = () => (
  <div>
    {Title}
    <h1>this is component composition</h1>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Body />)

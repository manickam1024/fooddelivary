import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header'
import Footer from './components/footer'
import Body from './components/Body'

const root = ReactDOM.createRoot(document.getElementById('root'))

export const App = () => (
  <div className="App">
    <Header />
    <Body />
    <Footer />
  </div>
)
root.render(<App />)

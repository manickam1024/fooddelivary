import React from 'react'
import ReactDOM from 'react-dom/client' // React 18+ uses 'react-dom/client'

// - Create a `Nested header Element` using `React.createElement`(h1,h2,h3 inside a div with class "title")

const h1 = React.createElement('h1', {}, 'this is h1 root1')
const h2 = React.createElement('h2', {}, 'this is h2')
const h3 = React.createElement('h2', {}, 'this is h3')

const div = React.createElement('div', { className: 'title' }, h1, h2, h3)
const ele1 = React.createElement('h2', {}, 'hello world! mani')

const root = ReactDOM.createRoot(document.getElementById('root1'))

root.render(div)
// - Create the `same element using JSX`

const head1 = <h1>this is h1 root2</h1>
const head3 = <h2>this is h2</h2>
const head2 = <h3>this is h3</h3>
const div1 = (
  <div>
    {head1}
    {head2}
    {head3}
  </div>
)

const root2 = ReactDOM.createRoot(document.getElementById('root2'))

root2.render(div1)

// - Create a `functional component of the same with JSX`

const Heading1 = () => <h1>this is h1 root3</h1>
const Heading2 = () => <h2>this is h2</h2>
const Heading3 = () => <h3>this is h3</h3>

const Div2 = () => (
  <div className="parent">
    <Heading1 />
    <Heading2 />
    <Heading3 />
  </div>
)

const root3 = ReactDOM.createRoot(document.getElementById('root3'))

root3.render(<Div2 />)

// - `Pass attribute` into the tag in `JSX`

const name = 'manickam'

const fullname = <h1>hello im {name} root4</h1>

const root4 = ReactDOM.createRoot(document.getElementById('root4'))

root4.render(fullname)

// - `Composition of Component` (Add a component inside another)

const Comp2 = () => <a href="https://www.google.com/"> clickhere😁</a>

const Comp3 = () => <span> this is a span </span>

const Comp1 = () => (
  <h1>
    {' '}
    click on the link <Comp2 />
    <Comp3 />
  </h1>
)

const root5 = ReactDOM.createRoot(document.getElementById('root5'))

root5.render(<Comp1 />)

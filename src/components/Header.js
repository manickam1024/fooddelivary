import { useState } from 'react'
import { IMG_LOGO } from '../utils/srcs'
const Header = () => {
  const [s, news] = useState('login')
  return (
    <div className="header">
      <img src={IMG_LOGO} className="logo" />
      <div className="name">
        <h2>food ordering app</h2>
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <i className="material-icons"> passkey</i>
            <a
              onClick={() => {
                s === 'login' ? news('logout') : news('login')
              }}
            >
              {s}
            </a>
          </li>
          <li>
            <i className="material-icons">home</i>
            <a href="">Home</a>
          </li>

          <li>
            <i className="material-icons">arrow_back_ios</i>

            <a href="">About us</a>
          </li>
          <li>
            <i className="material-icons"> shopping_cart</i>
            <a href="">Cart</a>
          </li>

          <li>
            <i className="material-icons"> person </i>
            <a href="">Profiles</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header

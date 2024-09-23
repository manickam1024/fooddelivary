import { useEffect, useState } from 'react'
import { IMG_LOGO } from '../utils/srcs'
import { Link } from 'react-router-dom'
const Header = () => {
  const [s, news] = useState('login')

  return (
    <div className="header">
      <img
        src={IMG_LOGO}
        className="logo"
        style={{ position: 'relative', left: '20px' }}
      />
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
            <Link to="/">Home</Link>
          </li>

          <li>
            <i className="material-icons">arrow_back_ios</i>

            <Link to="/about">About us</Link>
          </li>
          <li>
            <i className="material-icons"> shopping_cart</i>
            <Link to="/Cart">cart</Link>
          </li>

          <li>
            <i className="material-icons"> person </i>
            <Link to="/Profile">Profiles</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header

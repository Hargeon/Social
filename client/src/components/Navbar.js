import React from 'react'
import './navbar.css'

class Navbar extends React.Component {
  render() {
    return(
      <div>
        <ul>
          <li><a>Home</a></li>
          <li><a>News</a></li>
          <li><a>Contact</a></li>
          <li><a>About</a></li>
        </ul>
      </div>
    )
  }
}

export default Navbar

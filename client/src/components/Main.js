import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './main.css'
import Posts from './posts/Posts'

class Main extends React.Component {
  render() {
    return(
      <div className="main">
       <Switch>
         <Route exact path='/' component={Posts} />
       </Switch>
      </div>
    )
  }
}

export default Main

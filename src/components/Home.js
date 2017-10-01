import React, { Component } from 'react'
import PreSearch from './protected/preSearch'
import { Button, Jumbotron} from 'react-bootstrap'

export default class Home extends Component {
  render () {
    return (
      <div>
      <Jumbotron>
      <h1>Welcome to the Club!</h1>
      <h3> Find local teammates and matches, fast </h3>
      <p>Join the community of sports lovers and athletes who are playing
      your favorite sports now</p>
      <p><Button bsStyle="primary">Sign In</Button></p>
      </Jumbotron>
      </div>
    )
  }
}

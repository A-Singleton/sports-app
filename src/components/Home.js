import React, { Component } from 'react'
import PreSearch from './protected/preSearch'
import { Button, Jumbotron, Grid} from 'react-bootstrap'
import Background from './images/a-day-at-the-courts.jpg';



export default class Home extends Component {
  render () {

    const backImg = {

       //rightMargin: '150px',
        backgroundSize: 'cover',
        backgroundImage: `url(${Background})`,
        padding: '200px'
    }

    // const call = {
    //   background: 'white',
    //   padding: '10px',
    //   //opacity: '0.3',
    //   color: 'orange',
    // }
    // <Grid style={backImg}>
    // </Grid>

    return (

      <div style={backImg}>
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

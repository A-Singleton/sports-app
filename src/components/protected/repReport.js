import React, { Component } from 'react'
import ReactStars from 'react-stars'
import { Form,  FormGroup, FormControl, Col, Button, ControlLabel, Row} from 'react-bootstrap'
import { submiteRep } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/helpers/auth.js'
import StarCentered from './starCentered'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import Index from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/components/index.js'

export default class RepReport extends Component {
  constructor(){
    super()
this.state = {
  rating: 5,
  fireRedirect: false,
  bool: true
}
}

// Need list of all players other than reviewer
  componentDidMount(){



  }


  ratingChanged = (newRating) => {
    console.log(newRating)
    this.setState({rating: newRating})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("submitted")
    //submitRep(this.props.opp, this.state.rating)
    this.setState({ fireRedirect: true })
}

  render () {

    const divStyle = {
      display: 'block',
      textAlign: 'center',
      background: "#eee",
      padding: "5px",
      margin: "5px",
    };

    const starStyle = {
      //float: 'right'
      display: 'block',
      justifyContent: 'center',
      alignItems: 'center',
      // marginLeft: '10000px'
    }

    const divCheckbox = {
      textAlign: 'center',
      display: 'inlineBlock',
    }

    const checkboxLabel =  {
      display: 'inlineBlock'
  }

  const checkbox = {
    margin: "5px",
display: 'inlineBlock',
  width: '100%',

  }

//  const { from } = this.props.location.state || '/'
  var { fireRedirect } = this.state.fireRedirect
  console.log(this.state.fireRedirect)
  console.log(this.state.bool)


  // send thumbnail info to fill appropraite fields

    var rateOpener = "Rate your Opponent's Sportsmanship"
    var rateExplanation = "Your rating is anonymous, but will help other players find good sports to play with"

    return(
      <div style={divStyle}>
        <h2> { rateOpener } </h2>
          <div style={divCheckbox}>
          <StarCentered
          style={starStyle}
          value={this.state.rating}
          half={false}
          count={5}
          onChange={this.ratingChanged}
          size={80}
          color2={'#ffd700'} />
          </div>
        <h5> { rateExplanation } </h5>
        <h3> You Rate Them: </h3>
        <h3> { this.state.rating } / 5 stars </h3>
        <Form onSubmit={this.handleSubmit}>
        <Button bsStyle="success" type="submit">
           Rate
        </Button>
        </Form>


        {this.state.fireRedirect && (
          <Redirect to={'/postRenderReport'} />
        )}

      </div>
    )
  }
}
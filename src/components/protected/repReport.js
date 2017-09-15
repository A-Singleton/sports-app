import React, { Component } from 'react'
import ReactStars from 'react-stars'
import { Form,  FormGroup, FormControl, Col, Button, ControlLabel, Row} from 'react-bootstrap'
import { submiteRep } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/helpers/auth.js'
import StarCentered from './starCentered'

export default class RepReport extends Component {
  constructor(){
    super()
this.state = {
  rating: 5
}
}

  ratingChanged = (newRating) => {
    console.log(newRating)
    this.setState({rating: newRating})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("submitted")
    // submitRep(this.props.opp, this.state.rating)
    // BirthMonth: this.month.value,
    // // BirthDay: this.day.value,
    // // BirthYear: this.year.value
    // const updatedInfo = {
    //   FirstName: this.state.fName,
    //   LastName: this.state.lName,
    //   Email: this.state.email,
    //   Gender: this.state.gender
}

  render () {

    const divStyle = {
      display: 'block',
      textAlign: 'center',
      background: "#eee",
      padding: "5px",
      margin: "5px",
      //width: "550px",
      //justifyContent: 'center'
      //alignItems: 'flex',
      //justifyContent: 'flex',
      //alignSelf: 'flex',
    //  color: 'blue',
    //  backgroundImage: 'url(' + imgUrl + ')',
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
      //display: 'table',
      //justifyContent: 'center',
    //  float: 'left',
      display: 'inlineBlock',
    //  marginRight: '155px'
      //margin: '0 auto'
    }

    const checkboxLabel =  {
      //display: 'table-row'
      display: 'inlineBlock'
  }

  const checkbox = {
//    padding: "100px",
    margin: "5px",
//  display: 'table-row',
display: 'inlineBlock',
  width: '100%',
//    width: '200px'
  }

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
      </div>
    )
  }
}

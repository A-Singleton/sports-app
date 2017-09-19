import React, { Component } from 'react'
import {ProgressBar, Button} from 'react-bootstrap'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'

export default class postRenderReport extends Component {
  constructor () {
     super();
     this.state = {
       fireRedirect: false
     }
   }



  handleSubmit = (e) => {
    e.preventDefault()
    console.log("submitted")
    //

    //this.setState({ fireRedirect: true })
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

    const { from } = this.props.location.state || '/'
    const { fireRedirect } = this.state

    return(
      <div style={divStyle}>
        <h3> Good game, keep it up! </h3>
          <div>
            <h4> You scored: </h4>
            <h4> 1,386 points! </h4>
          </div>
          <div>
            <h4> Score Report: </h4>
              <h5> Win Bonus: 1000 </h5>
              <h5> Opponent Skill Bonus: 386 </h5>
              <h4> Moved Up 3 Ranks! 346th in division A </h4>
          </div>
          <ProgressBar active now={73} bsStyle="warning" />
          <div className="pull-right"> 37 </div>
          <div className="pull-left"> 36 </div>
          <h4> Just 114 Points to go to 37 </h4>
          <Button bsStyle="success" type="submit" onSubmit={this.handleSubmit}>
          Back to Dashboard
          </Button>

          {fireRedirect && (
            <Redirect to={from || '/dashboard'}/>
          )}

      </div>
    )
  }
}

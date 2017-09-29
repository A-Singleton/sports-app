import React, { Component } from 'react'
import {ProgressBar, Button, Form} from 'react-bootstrap'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import { add2Stats, recordMatch } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/helpers/auth.js'
import { firebaseAuth, db } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'
import AnimatedBar from './animatedBar'

export default class postRenderReport extends Component {
  constructor () {
     super();
     this.state = {
       fireRedirect: false,
       winBonus: 500,
       gameBonus: 1000,
       mysteryBonus: Math.floor(Math.random()*500),
       winOrLose: '',
       profit: 0,
       levelBarrier: 0,
       lowerBarrier: 0,
       current_earnings: 0,
       level: 0
     }
   }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("submitted")
    this.addStats()
    this.setState({ fireRedirect: true })
}

  addStats = () => {
    console.log("add stats")
    const user = firebaseAuth().currentUser.uid
  console.log(user)
  add2Stats(this.state.current_earnings, this.state.level,
                                                this.state.levelBarrier, user)
  recordMatch(this.props.matches)
  }

  componentDidMount() {
    //download level, current earnings sum, $ to next level
    // take: level barrier increase by 5%
    //


    const user = firebaseAuth().currentUser.uid


      db.ref(`users/${user}/account-info/stats`).on('value', (snapshot)=> {

        var stats = snapshot.val()
        //var levelStart = stats.levelStart
        var levelBarrier = stats.nextLevel
        var lowerBarrier = (stats.nextLevel/1.03)
      ///  var levelBarrier = 800
        var level = stats.level
      //  var level = 1
        var next_level = level + 1
        var profit = this.state.gameBonus +  this.state.mysteryBonus
      //  var new_earnings = stats.current_earnings + profit
        var new_earnings = this.state.current_earnings + profit

        if (levelBarrier < new_earnings) {
            level = next_level
            levelBarrier = levelBarrier*1.03
            //current_earnings = current_earnings + this.state.profit
            //next_level = next_level + 1
        }

        this.setState({ level,
                        current_earnings: new_earnings,
                        profit,
                        levelBarrier,
                        lowerBarrier
          })
      })
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

    // console.log(this.props.stuff)
    // console.log(this.props.stuffMine)
    //const { from } = this.props.location.state || '/'
    //const { fireRedirect } = this.state
    //console.log(this.state.fireRedirect)
    // { this.state.fireRedirect && (
    //   <Redirect to={'/dashboard'}/>
    // )}

//  <ProgressBar active now={73} bsStyle="warning" />
    // Need to add these to stats

    // TODO: need some way of determing winner or loser
    // also need level, current points, points to next level
    // const winBonus = 500
    // const gameBonus = 1000
    // var mysteryBonus = Math.floor(Math.random()*500)

      console.log(this.state.level)
      console.log(this.state.current_earnings)
      console.log(this.state.profit)
      console.log(this.state.levelBarrier)
      console.log(this.state.lowerBarrier)


    return(
      <div style={divStyle}>
        <h3> Good game, keep it up! </h3>
          <div>
            <h4> You Earned: </h4>
            <h4> ${ this.state.gameBonus + this.state.mysteryBonus}! </h4>
          </div>
          <div>
            <h4> Earnings Report: </h4>
              <h5> Game Bonus: ${ this.state.gameBonus } </h5>
              <h5> Mystery Bonus: ${ this.state.mysteryBonus } </h5>
          </div>

          { this.state.lowerBarrier === 0 ? '' :
          <AnimatedBar
            profit={this.state.profit}
            pointsLower={this.state.lowerBarrier}
            pointsHigher={this.state.levelBarrier}
            level={this.state.level}
            earnings={this.state.current_earnings}
            /> }

          <div className="pull-right"> {this.state.level + 1} </div>
          <div className="pull-left"> {this.state.level} </div>
          <h4> Just 114 Points to go to 37 </h4>
          <Form onSubmit={this.handleSubmit}>
          <Button bsStyle="success" type="submit">
          Back to Dashboard
          </Button>
          </Form>
      </div>
    )
  }
}

import React, { Component } from 'react'
import MatchRender from './matchRender'
import {getScheduledMatches} from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/helpers/auth.js'
import MatchPosts from './MatchPosts'
import { ref, firebaseAuth, firebaseStorageRef, taskEvent, db } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'

export default class matchFeed extends Component {

  constructor(props){
    super(props)
    this.state = {
        allMatches: [],
        User: ''
    }
  }

componentDidMount(){
  //const user = firebaseAuth().currentUser
  // const fbMatches = getScheduledMatches()
  //const fbMatches = getScheduledMatches()
    db.ref(`matches/`).on('value', (snapshot)=> {

    var allMatchesCopy = this.state.allMatches
    var matches = snapshot.val()
    var keys = Object.keys(matches)

        for (var i =0; i < keys.length; i++) {
          var k = keys[i];
          var skill = matches[k].skill;
          var sport = matches[k].sport;
          var date = matches[k].gameDate;
          var creator_query = matches[k].creator;
          var players = matches[k].players;
          var creator_first_name = matches[k].creator_first_name;
          var creator_last_name = matches[k].creator_last_name;

    var nextMatch = {
      id: k,
      skill: skill,
      sport: sport,
      date:  date,
      players: players,
      creator: creator_query,
      creatorName: creator_first_name + " " + creator_last_name
    }
    allMatchesCopy.push(nextMatch)
  //  this.setState({allMatches: allMatchesCopy})
  }
  this.setState({allMatches: allMatchesCopy})
  })
  //
  // console.log('allMatches')
  // console.log(fbMatches)
  // this.setState({ allMatches: fbMatches})
  // console.log('state allMatches')
  // console.log(this.state.allMatches)
}

  render(){

    console.log('render allMatches')
    console.log(this.state.allMatches)
      // var stateVar = this.state.allMatches
      // console.log('render stateVar')
      // console.log(stateVar)
  //     var posts = this.state.allMatches.map((match, i) => {
  //   //var posts = stateVar.map((match, i) => {
  //       return <MatchRender key={match.id} match={match} />
  //  })
  //    { posts }

    return(
     <div>
       <h4> Local Matches </h4>
       <MatchPosts matches={this.state.allMatches}/>
     </div>
)}
}

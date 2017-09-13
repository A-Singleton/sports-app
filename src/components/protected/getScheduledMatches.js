import React, { Component } from 'react'
import { ref, firebaseAuth, firebaseStorageRef, taskEvent, db } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'
import ScheduledMatch from './scheduledMatch'

export default class GetScheduledMatches extends Component {

     constructor(props, context){
      super(props, context)
      //  this.changeList = this.changeList.bind(this)
      this.state = {
          joinedMatches: []
         }
        }

componentWillReceiveProps(nextProps) {
  console.log('props')
  console.log(nextProps.keyCodes)
  const allMatches = []
  var k = 0
  const that = this
  nextProps.keyCodes.forEach(function(element) {
  //console.log(user.uid)
  db.ref(`matches/${element}`).on('value', (snapshot)=> {

  var matches = snapshot.val()
  console.log(matches)
  var keys = Object.keys(matches)
  console.log(keys)
// Since this is a special case of 1 time loop, hardcoding 1
  //    for (var i =0; i < 1; i++) {

        var id = k;
        var skill = matches.skill;
        var sport = matches.sport;
        var date = matches.gameDate;
        var creator_query = matches.creator;
        var players = matches.players;
        var creator_first_name = matches.creator_first_name;
        var creator_last_name = matches.creator_last_name;

  var nextMatch = {
    id: id,
    skill: skill,
    sport: sport,
    date:  date,
    players: players,
    creator: creator_query,
    creatorName: creator_first_name + " " + creator_last_name
  }
//  }
  console.log('nextMatch')
  console.log(nextMatch)
  k++
  console.log('k')
  console.log(k)
  allMatches.push(nextMatch)
  console.log(allMatches)
  that.setState({joinedMatches: allMatches})
  })
  })

  }


componentDidMount(){
  console.log('entered comp did mount')
const user = firebaseAuth().currentUser
console.log(this.props.keyCodes)
}

render(){
  console.log(this.props.keyCodes)
  console.log('keys')
  console.log(this.state.joinedMatches)
  console.log(Object.keys(this.state.joinedMatches))
  console.log(JSON.stringify(this.state.joinedMatches))
var yourScheduledMatches = ''

if(this.state.joinedMatches){
  var yourScheduledMatches = this.state.joinedMatches.map((match, i) => {
    console.log('entered match loop')
    console.log(match)
    console.log(i)
    return(
      <ScheduledMatch
      key={i}
      match={match}
      />
    )
  })
}

  return(
    <div>
    { yourScheduledMatches }
    </div>
  )
}
}

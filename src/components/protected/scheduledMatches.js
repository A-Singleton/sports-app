import React, { Component } from 'react'
import { ref, firebaseAuth, firebaseStorageRef, taskEvent, db } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'
import GetScheduledMatches from './getScheduledMatches'

export default class scheduledMatches extends Component {


     constructor(props, context){
      super(props, context)
      //  this.changeList = this.changeList.bind(this)
      this.state = {
          keys: []
         }
        }

componentDidMount(){
const user = firebaseAuth().currentUser
console.log(user.uid)
db.ref(`users/${user.uid}/account-info/joinedGames`).on('value', (snapshot)=> {

var matches = snapshot.val()
console.log(matches)
var keys = Object.keys(matches)
console.log(keys)
this.setState({keys})
//     for (var i =0; i < keys.length; i++) {
//       var k = keys[i];
//       var skill = matches[k].skill;
//       var sport = matches[k].sport;
//       var date = matches[k].gameDate;
//       var creator_query = matches[k].creator;
//       var players = matches[k].players;
//       var creator_first_name = matches[k].creator_first_name;
//       var creator_last_name = matches[k].creator_last_name;
//
// var nextMatch = {
//   id: k,
//   skill: skill,
//   sport: sport,
//   date:  date,
//   players: players,
//   creator: creator_query,
//   creatorName: creator_first_name + " " + creator_last_name
// }
//
// }

//allMatches.push(nextMatch)
})
}

render(){
  console.log('keys')
  console.log(this.state.keys)
  const scheduledMatches = ''
if (this.state.keys) {
  //  const scheduledMatches = this.state.keys.map((fbKey, i) => {
    console.log('entered key loop')
    //console.log(fbKey)
    return(
    <GetScheduledMatches
    keyCodes={this.state.keys}/>
  )
}
//)}


  return(
    <div>
    { scheduledMatches }
    </div>
  )
}

}

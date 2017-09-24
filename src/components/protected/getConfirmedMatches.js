import React, { Component } from 'react'
import { ref, firebaseAuth, firebaseStorageRef, taskEvent, db } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'
import PendingMatchRender from './pendingMatchRender'

export default class getConfirmedMatches extends Component {
  constructor(){
    super()
    this.state = {
      allPendingMatches: []
    }
  }


componentWillReceiveProps(nextProps) {
  var that = this
nextProps.keys.forEach(function(element) {
ref.child(`/pendingMatches/${element}`).on("value", (snapshot)=> {
console.log("Entered pending Matches")
  // var allPendingMatchesCopy = this.state.allPendingMatches
  var allPendingMatchesCopy = that.state.allPendingMatches

  const data = snapshot.val()
  console.log(data)
  var keys = Object.keys(data)
  console.log(data)
  //console.log(keys)

//for (var i =0; i < data.length; i++) {
//if(user === data[keys[i]].awayID){
  var nextMatch = {
     awayID: data.awayID,
     awayScore: data.awayScore,
     date: data.date,
     hostID: data.hostID,
     hostScore: data.hostScore,
     matchID: data.matchID,
     sport: data.sport,
     pendingMatchID: keys,
     stackID: data.idStack
   }
    console.log('nextMatch')
    console.log(nextMatch)

    allPendingMatchesCopy.push(nextMatch)
  //}
//}

    that.setState({ allPendingMatches: allPendingMatchesCopy })
})
})
}

render () {

  //var yourConfirmedMatches = ''

  // if(this.state.joinedMatches){
  //   var yourScheduledMatches = this.state.joinedMatches.map((match, i) => {
  //     console.log('entered match loop')
  //     console.log(match)
  //     console.log(i)
  //     return(
  //       <ScheduledMatch
  //       key={i}
  //       match={match}
  //       />
  //     )
  //   })
  // }

  var pendingMatches = ''

  if (this.state.allPendingMatches) {
    //  const scheduledMatches = this.state.keys.map((fbKey, i) => {
      console.log('entered key loop')
      var pendingMatches = this.state.allPendingMatches.map((match, i) => {
      //console.log(fbKey)
      return(
      <PendingMatchRender
      key={i}
      matches={ match }
      />
    )
  })
}


  return(
  <div>
  { pendingMatches }
  </div>
)
}
}

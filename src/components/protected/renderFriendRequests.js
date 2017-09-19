import React, { Component } from 'react'
import AddDeclineFriend from './addDeclineFriend'

export default class renderFriendRequests extends Component {
  constructor(props){
    super(props)
    this.state = {
      pendingFriends: []
      }


  componentDidMount(){
    console.log("Con Report did mount")
    var user =  firebaseAuth().currentUser.uid
    console.log(user)
    //const userTest = "q2xlsIvehieukIw1QYOi6LxGUp33"
    //var queryRef = db.ref("pendingMatches")
    var that = this
  //queryRef.orderByChild(`awayID`).equalTo(userTest).on("value", (snapshot)=> {
  db.ref(`matches/${element}`).on('value', (snapshot)=> {

    var pendingFriendsCopy = this.state.pendingFriends

    const data = snapshot.val()
    var keys = Object.keys(data)
    console.log(data)
    console.log(keys)

  for (var i =0; i < keys.length; i++) {

    var nextFriend = {
      //  awayID: data[keys[i]].awayID,
      //  awayScore: data[keys[i]].awayScore,
      //  date: data[keys[i]].date,
      //  hostID: data[keys[i]].hostID,
      //  hostScore: data[keys[i]].hostScore,
      //  matchID: data[keys[i]].matchID,
      //  sport: data[keys[i]].sport,
      //  pendingMatchID: keys[i]
     }
    //  console.log("data")
      console.log('nextMatch')
      console.log(nextMatch)

      allPendingMatchesCopy.push(nextFriend)
  }
      this.setState({ allPendingMatches: allPendingMatchesCopy })
  })
  }


  render () {
    var yourPendingFriends = ''

    if(this.state.pendingFriends){
      var yourPendingFriends = this.state.pendingFriends.map((friendRequest, i) => {
        console.log('entered match loop')
        console.log(match)
        console.log(i)
        return(
          <addDeclineFriend
          key={i}
          friendRequest={friendRequest}
          />
        )
      })
    }

    return(
      <div> { yourPendingFriends } </div>
    )
  }
}

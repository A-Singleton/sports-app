import React, { Component } from 'react'
import AddDeclineFriend from './addDeclineFriend'
import { firebaseAuth, firebaseStorageRef, ref, db } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'

export default class RenderFriendRequests extends Component {
  constructor(props){
    super(props)
    this.state = {
      pendingFriends: []
      }
    }

  componentDidMount(){
    console.log("Con Report did mount")
    //var user =  firebaseAuth().currentUser.uid
    console.log(this.props.user)
    const userTest = "q2xlsIvehieukIw1QYOi6LxGUp33"
    //var queryRef = db.ref("pendingMatches")
    var that = this
  //  var otherUser2 = "6Vm6eVPj3aNS3GM8dr2CVDVbtaL2"
  //queryRef.orderByChild(`awayID`).equalTo(userTest).on("value", (snapshot)=> {
  db.ref(`users/${this.props.user}/account-info/friendRequests`).on('value', (snapshot)=> {

    var pendingFriendsCopy = this.state.pendingFriends

    var data = snapshot.val()
    console.log(data)
    var keys = Object.keys(data)

    console.log(keys)

  for (var i =0; i < keys.length; i++) {

    var nextFriend = {
      //  awayID: data[keys[i]].awayID,
        // user: data[keys[i]].user,
      //   name: data[keys[i]].name
         userID: data[keys[i]].user,
         name: data[keys[i]].name

     }
    //  console.log("data")
      console.log('nextMatch')
      console.log(nextFriend)

      pendingFriendsCopy.push(nextFriend)
  }
      this.setState({ pendingFriends: pendingFriendsCopy })
  })
  }


  render () {
    var yourPendingFriends = ''

    if(this.state.pendingFriends){
      var yourPendingFriends = this.state.pendingFriends.map((friendRequest, i) => {
        console.log('entered pending friends loop')
        console.log(friendRequest)
        console.log(i)
        return(
          <AddDeclineFriend
          key={i}
          friendRequest={friendRequest}
          userName={this.props.name}
          />
        )
      })
    }

    return(
      <div> { yourPendingFriends } </div>
    )
  }
}

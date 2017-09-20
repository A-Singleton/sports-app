import React, { Component } from 'react'
import addDeclineFriend from './addDeclineFriend'

export default class FriendRequests extends Component {
    constructor(props){
      super(props)
      this.state = {
        allPendingFriends: []
      }
    }

    componentDidMount(){
      
    }

  render () {

    var pendingFriends = ''

    if (this.state.allPendingFriends) {
        console.log('entered friends loop')
        var pendingFriends = this.state.allPendingFriends.map((friend, i) => {
        //console.log(fbKey)
        return(
        <AddDeclineFriend
        key={i}
        friendID={friend}
        />
      )
    })
  }


    return(
      <div>
          { pendingFriends }
      </div>
    )
  }
}

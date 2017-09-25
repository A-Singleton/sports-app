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
        userName: '',
        friendsList: [],
    }
  }

componentDidMount(){
  const user = firebaseAuth().currentUser.uid

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
          var players = matches[k].homePlayers;
          var players2 =  matches[k].awayPlayers;
          var creator_first_name = matches[k].creator_first_name;
          var creator_last_name = matches[k].creator_last_name;
          var idStack = matches[k].idStack

    var nextMatch = {
      id: k,
      skill: skill,
      sport: sport,
      date:  date,
      players: players,
      creator: creator_query,
      creatorName: creator_first_name + " " + creator_last_name,
      players2: players2,
      idStack: idStack
    }
    console.log(nextMatch)
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

  db.ref(`users/${user}/account-info/friends`).on('value', (snapshot)=> {
      const friends = snapshot.val()
      var keys = Object.keys(friends)
      var allFriendsCopy = this.state.friendsList
          for (var i =0; i < keys.length; i++) {

            var friend = friends[keys[i]]
            console.log(friend)
            allFriendsCopy.push(friend.requester)
          }
      this.setState({ friendsList: allFriendsCopy })
  })


  db.ref(`users/${user}/personal-info`).on('value', (snapshot)=> {

    var profile = snapshot.val()
    const f_name = profile.FirstName
    const l_name = profile.LastName
    const full_Name = f_name + " " + l_name
    console.log(JSON.stringify(full_Name))

    this.setState({
      userName: full_Name
    })
  })

}

  render(){

    console.log('render allMatches')
    console.log(this.state.allMatches)
    console.log(this.state.friendsList)
    console.log(this.state.userName)
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
       <MatchPosts matches={this.state.allMatches}
       friends={this.state.friendsList} userName={this.state.userName}/>
     </div>
)}
}

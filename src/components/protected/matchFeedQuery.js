import React, { Component } from 'react'
import MatchRender from './matchRender'
import {getScheduledMatches} from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/helpers/auth.js'
import MatchPosts from './MatchPosts'
import { ref, firebaseAuth, firebaseStorageRef, taskEvent, db } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'

export default class matchFeedQuery extends Component {

  constructor(props){
    super(props)
    this.state = {
        allMatches: [],
        userName: '',
        friendsList: [],
    }
  }

componentDidMount(){

  var sport = this.props.sport
  console.log(sport)

  let ref_1 = db.ref(`matches/`);
  ref_1.orderByChild(`sport`).equalTo(`${sport}`).on('value', snapshot => {
    console.log(snapshot.val())

    var allMatchesCopy = []
    console.log(snapshot.val())
    var matches = snapshot.val()
    console.log(matches)
    if (typeof matches !== null && typeof matches !== "undefined"){
    var keys = Object.keys(matches)

        for (var i =0; i < keys.length; i++) {
          var k = keys[i];
          var skill = matches[k].skill;
          var sport = matches[k].sport;
          var date = matches[k].gameDate;
          var creator_query = matches[k].creator;
          var players = matches[k].homePlayers;
          var players2 =  matches[k].awayPlayers;
          var players3 =  matches[k].players3;
          var players4 =  matches[k].players4;
          var creator_first_name = matches[k].creator_first_name;
          var creator_last_name = matches[k].creator_last_name;
          var idStack = matches[k].idStack;
          var maxPlayers = matches[k].maxPlayers;
          var location = matches[k].mapDataAddress;

    var nextMatch = {
      id: k,
      skill: skill,
      sport: sport,
      date:  date,
      players: players,
      creator: creator_query,
      creatorName: creator_first_name + " " + creator_last_name,
      players2: players2,
      idStack: idStack,
      players3: players3,
      players4: players4,
      maxPlayers,
      location
    }
    console.log(nextMatch)
    allMatchesCopy.push(nextMatch)
  //  this.setState({allMatches: allMatchesCopy})
  }
}
    this.setState({allMatches: allMatchesCopy})

  });

  const user = firebaseAuth().currentUser.uid
  //
  //   db.ref(`matches/`).on('value', (snapshot)=> {
  //
  //   var allMatchesCopy = this.state.allMatches
  //   var matches = snapshot.val()
  //   var keys = Object.keys(matches)
  //
  //       for (var i =0; i < keys.length; i++) {
  //         var k = keys[i];
  //         var skill = matches[k].skill;
  //         var sport = matches[k].sport;
  //         var date = matches[k].gameDate;
  //         var creator_query = matches[k].creator;
  //         var players = matches[k].homePlayers;
  //         var players2 =  matches[k].awayPlayers;
  //         var players3 =  matches[k].players3;
  //         var players4 =  matches[k].players4;
  //         var creator_first_name = matches[k].creator_first_name;
  //         var creator_last_name = matches[k].creator_last_name;
  //         var idStack = matches[k].idStack;
  //         var maxPlayers = matches[k].maxPlayers;
  //
  //   var nextMatch = {
  //     id: k,
  //     skill: skill,
  //     sport: sport,
  //     date:  date,
  //     players: players,
  //     creator: creator_query,
  //     creatorName: creator_first_name + " " + creator_last_name,
  //     players2: players2,
  //     idStack: idStack,
  //     players3: players3,
  //     players4: players4,
  //     maxPlayers
  //   }
  //   console.log(nextMatch)
  //   allMatchesCopy.push(nextMatch)
  // //  this.setState({allMatches: allMatchesCopy})
  // }
  //   this.setState({allMatches: allMatchesCopy})
  // })
  //
  // //
  // console.log('allMatches')
  // console.log(fbMatches)
  // this.setState({ allMatches: fbMatches})
  // console.log('state allMatches')
  // console.log(this.state.allMatches)

  db.ref(`users/${user}/account-info/friends`).on('value', (snapshot)=> {
      const friends = snapshot.val()
      var keys = Object.keys(friends)
      var allFriendsCopy = []
          for (var i =0; i < keys.length; i++) {

            var friend = friends[keys[i]].user
            var name = friends[keys[i]].name

            var nextFriend = {
              friend,
              name
            }

            console.log(nextFriend)
            allFriendsCopy.push(nextFriend)
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

componentWillReceiveProps(nextProps){
console.log(nextProps)
var sport = nextProps.sport

let ref_1 = db.ref(`matches/`);
ref_1.orderByChild(`sport`).equalTo(`${sport}`).on('value', snapshot => {
  console.log(snapshot.val())

  var allMatchesCopy = []
  var matches = snapshot.val()
  if (typeof matches !== null && typeof matches !== "undefined"){
  var keys = Object.keys(matches)

      for (var i =0; i < keys.length; i++) {
        var k = keys[i];
        var skill = matches[k].skill;
        var sport = matches[k].sport;
        var date = matches[k].gameDate;
        var creator_query = matches[k].creator;
        var players = matches[k].homePlayers;
        var players2 =  matches[k].awayPlayers;
        var players3 =  matches[k].players3;
        var players4 =  matches[k].players4;
        var creator_first_name = matches[k].creator_first_name;
        var creator_last_name = matches[k].creator_last_name;
        var idStack = matches[k].idStack;
        var maxPlayers = matches[k].maxPlayers;

  var nextMatch = {
    id: k,
    skill: skill,
    sport: sport,
    date:  date,
    players: players,
    creator: creator_query,
    creatorName: creator_first_name + " " + creator_last_name,
    players2: players2,
    idStack: idStack,
    players3: players3,
    players4: players4,
    maxPlayers
  }
  console.log(nextMatch)
  allMatchesCopy.push(nextMatch)
//  this.setState({allMatches: allMatchesCopy})
}
}
  this.setState({allMatches: allMatchesCopy})

});
}

componentDidUpdate(){
  console.log("Did update")
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
     <h3> Your Results </h3>
       <MatchPosts matches={this.state.allMatches}
       friends={this.state.friendsList} userName={this.state.userName}/>
     </div>
)}
}

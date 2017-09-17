import React, { Component } from 'react'
import { Form,  FormGroup, FormControl, Col, Button, ControlLabel} from 'react-bootstrap'
import { firebaseAuth, firebaseStorageRef, ref, db } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'
import { recordMatch } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/helpers/auth.js'
import PendingMatchRender from './pendingMatchRender'

export default class ConfirmReport extends Component {

  constructor(){
    super()
    this.state = {
      allPendingMatches: [],
      awayID: '',
      awayScore: '',
      date: '',
      hostID: '',
      hostScore: '',
      matchID: '',
      sport: ''
    }
  }

  componentDidMount(){
    console.log("Con Report did mount")
    var user =  firebaseAuth().currentUser.uid
    console.log(user)
    const userTest = "q2xlsIvehieukIw1QYOi6LxGUp33"
  var queryRef = db.ref("pendingMatches")
  var that = this
  queryRef.orderByChild(`awayID`).equalTo(userTest).on("value", (snapshot)=> {
  //ref.child(`pending-matches`).on("child_added", function(snapshot) {
// add link in user to list of pendingMatches? Query is easier...if worked..
  //  var pending = "pending-matches"
    var allPendingMatchesCopy = this.state.allPendingMatches

    const data = snapshot.val()
    var keys = Object.keys(data)
    console.log(data)
    console.log(keys)

  for (var i =0; i < keys.length; i++) {

    var nextMatch = {
       awayID: data[keys].awayID,
       awayScore: data[keys].awayScore,
       date: data[keys].date,
       hostID: data[keys].hostID,
       hostScore: data[keys].hostScore,
       matchID: data[keys].matchID,
       sport: data[keys].sport,
     }
    //  console.log("data")
      console.log('nextMatch')
      console.log(nextMatch)

      allPendingMatchesCopy.push(nextMatch)
  // //  var query = data.orderByChild(`awayID`).equalTo(user)
  // console.log("snapshot.key")
  // console.log(snapshot.key);
  }
      this.setState({ allPendingMatches: allPendingMatchesCopy })
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
    }


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


    // var yourScheduledMatches = ''
    //
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

    return(
      <div style={divStyle}>
        { pendingMatches }
       </div>
    )
  }
}

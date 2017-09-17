import React, { Component } from 'react'
import { Form,  FormGroup, FormControl, Col, Button, ControlLabel} from 'react-bootstrap'
import { firebaseAuth, firebaseStorageRef, ref, db } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'
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

    var allPendingMatchesCopy = this.state.allPendingMatches

    const data = snapshot.val()
    var keys = Object.keys(data)
    console.log(data)
    console.log(keys)

  for (var i =0; i < keys.length; i++) {

    var nextMatch = {
       awayID: data[keys[i]].awayID,
       awayScore: data[keys[i]].awayScore,
       date: data[keys[i]].date,
       hostID: data[keys[i]].hostID,
       hostScore: data[keys[i]].hostScore,
       matchID: data[keys[i]].matchID,
       sport: data[keys[i]].sport,
       pendingMatchID: keys[i]
     }
    //  console.log("data")
      console.log('nextMatch')
      console.log(nextMatch)

      allPendingMatchesCopy.push(nextMatch)
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

    return(
      <div style={divStyle}>
        { pendingMatches }
       </div>
    )
  }
}

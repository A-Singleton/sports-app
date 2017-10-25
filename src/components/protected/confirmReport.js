import React, { Component } from 'react'
import { Form,  FormGroup, FormControl, Col, Button, ControlLabel} from 'react-bootstrap'
import { firebaseAuth, firebaseStorageRef, ref, db } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'
import GetConfirmedMatches from './getConfirmedMatches'

export default class ConfirmReport extends Component {

  constructor(){
    super()
    this.state = {
      allPendingMatches: [],
      keys: []
    }
  }

  //
  //   componentDidMount(){
  //     console.log("Con Report did mount")
  //     //var user =  firebaseAuth().currentUser.uid
  //     console.log(this.props.user)
  //     var user = this.props.user
  //     //const userTest = "q2xlsIvehieukIw1QYOi6LxGUp33"
  //   var queryRef = db.ref("pendingMatches")
  //   var that = this
  //   queryRef.orderByChild(`awayID`).equalTo(user).on("value", (snapshot)=> {
  //
  //     var allPendingMatchesCopy = this.state.allPendingMatches
  //
  //     const data = snapshot.val()
  //     var keys = Object.keys(data)
  //     console.log(data)
  //     console.log(keys)
  //
  //   for (var i =0; i < keys.length; i++) {
  //
  //     var nextMatch = {
  //        awayID: data[keys[i]].awayID,
  //        awayScore: data[keys[i]].awayScore,
  //        date: data[keys[i]].date,
  //        hostID: data[keys[i]].hostID,
  //        hostScore: data[keys[i]].hostScore,
  //        matchID: data[keys[i]].matchID,
  //        sport: data[keys[i]].sport,
  //        pendingMatchID: keys[i]
  //      }
  //     //  console.log("data")
  //       console.log('nextMatch')
  //       console.log(nextMatch)
  //
  //       allPendingMatchesCopy.push(nextMatch)
  //   }
  //       this.setState({ allPendingMatches: allPendingMatchesCopy })
  //  })
  // }

componentWillReceiveProps(nextProps){
  console.log("Con Report did mount")
  console.log("this.props.user")
  console.log(nextProps.user)
  //db.ref(`users/${user.uid}/account-info/joinedGames`).on('value', (snapshot)=> {
  db.ref(`users/${nextProps.user}/account-info/pendingMatches/`).on('value', (snapshot)=> {

  var matches = snapshot.val()
  console.log(matches)
  var keys = Object.keys(matches)
  console.log(keys)
  this.setState({keys})
  })

//var user =  firebaseAuth().currentUser.uid
//console.log(nextProps.user)
//var user = nextProps.user

  //const userTest = "q2xlsIvehieukIw1QYOi6LxGUp33"
//var queryRef = db.ref("pendingMatches")
//queryRef.orderByChild(`idStack`).on("value", (snapshot)=> {
//var that = this

}



  render () {

    const divStyle = {
      display: 'block',
      textAlign: 'center',
      background: "white",
      padding: "0px",
      margin: "0px",
      width: "46%",
      borderRadius: '5px'
      //marginTop: "-700px"
      //width: "550px",
      //justifyContent: 'center'
      //alignItems: 'flex',
      //justifyContent: 'flex',
      //alignSelf: 'flex',
    //  color: 'blue',
    //  backgroundImage: 'url(' + imgUrl + ')',
    }

//{ pendingMatches }

//<GetConfirmedMatches keys={this.state.keys}/>

    return(
      <div style={divStyle}>
        <GetConfirmedMatches keys={this.state.keys}/>
       </div>
    )
  }
}

import React, { Component } from 'react'
import { getProfileInfo, getKeyStats } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/helpers/auth.js'
import { firebaseAuth, firebaseStorageRef, ref } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'
import ScheduledMatches from './scheduledMatches'
import ConfirmReport from './confirmReport'
import MatchReport from './MatchReport'
import RenderFriendRequests from './renderFriendRequests'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Table, Button, Form,  FormGroup, FormControl, Col,  ControlLabel, Grid, Row} from 'react-bootstrap'

//TODO: profile pic + url in upper corner
//1. Add error handling to fb queries
//3. Component for recent activity

export default class profile extends Component {
  constructor(props){
    super(props)
  this.state = {
    profInfo: '',
    LastName: '',
    FirstName: '',
    rep: 0,
    aboutMe: '',
    sports: '',
    location: '',
    favSports: [],
    userID: ''
  }
}

  componentWillReceiveProps(nextProps){
  console.log("Recieved Props")
  //  var that = this
  console.log('nextProps')
  console.log(nextProps)

  //var that = this
  var user =  firebaseAuth().currentUser.uid



  ref.child(`users/${nextProps.userID}/personal-info`).on('value', (snapshot)=> {

  const profInfo = snapshot.val()
  if (profInfo !== null) {
  console.log('profInfo')
   console.log(profInfo)
   console.log(profInfo.FirstName)
   console.log(profInfo.JoinTime)
   //var joinTime = profInfo.joinTime
   //var clippedJoin = joinTime.slice(4, 14)
   //console.log(clippedJoin)
   //profileInfo.push(persInfo)
   this.setState({
     profInfo,
     FirstName: profInfo.FirstName,
     LastName: profInfo.LastName,
     aboutMe: profInfo.aboutMe,
     favSports: profInfo.favSports,
     userID: nextProps.userID,
     location: profInfo.location
   })
   }
  })



    // Create a reference to the file we want to download
  //var starsRef = firebaseStorageRef.child('profilePics/Classic_Singleton.png');
  var starsRef = firebaseStorageRef.child(`profilePics/${nextProps.userID}`)

  // Get the download URL
  starsRef.getDownloadURL().then(function(url) {
    // Insert url into an <img> tag to "download"
    var img = document.getElementById('myimg');
  //  var imgBar = document.getElementById('imgBar');
    //imgBar.src = url
    img.src = url;
  }).catch(function(error) {

    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/object_not_found':
        // File doesn't exist
        break;

      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;

      case 'storage/canceled':
        // User canceled the upload
        break;

      case 'storage/unknown':
        // Unknown error occurred, inspect the server response
        break;
    }
  });

  // //ref.child(`users/${user.uid}/personal-info`).on('value', (snapshot)=> {
  // ref.child(`users/${nextProps.userID}/personal-info`).on('value', (snapshot)=> {
  //
  // const profInfo = snapshot.val()
  // console.log('profInfo')
  //  console.log(profInfo)
  //  console.log(profInfo.FirstName)
  //
  //  //    profInfo.aboutMe
  //  //    profInfo.sports
  //  //    profInfo.location
  //
  //  this.setState({
  //    profInfo,
  //    FirstName: profInfo.FirstName,
  //    LastName: profInfo.LastName
  //  })
  // })

  //ref.child(`users/${user.uid}/personal-info`).on('value', (snapshot)=> {

  ref.child(`users/${nextProps.userID}/account-info/rep`).on('value', (snapshot)=> {

  const rep = snapshot.val()
   console.log('rep')
   console.log(rep)
   console.log(rep)

    var rep_sum = 0
    var keys = Object.keys(rep)

    for (var i =0; i < keys.length; i++) {
      var k = keys[i];
      var this_rep = rep[k];

      console.log(this_rep.this_rep)
      rep_sum = rep_sum + this_rep.this_rep

    }
      console.log((rep_sum/keys.length))
      this.setState({ rep: Math.round(100*(rep_sum/(5*keys.length))) })
  })


  }

  componentDidMount(){
    //logic for handling whether it is own users or someone else's
    var that = this
    var propsUser = this.props.userID
    console.log('propsUser')
    console.log(propsUser)
    firebaseAuth().onAuthStateChanged(function(user) {
      console.log(propsUser)
if (user) {

  // Create a reference to the file we want to download
//var starsRef = firebaseStorageRef.child('profilePics/castling kids.png');
var starsRef = firebaseStorageRef.child(`profilePics/${user.uid}`)

// Get the download URL
starsRef.getDownloadURL().then(function(url) {
  // Insert url into an <img> tag to "download"
  var img = document.getElementById('myimg');
  var imgBar = document.getElementById('imgBar');
  imgBar.src = url
  img.src = url;
}).catch(function(error) {

  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
  switch (error.code) {
    case 'storage/object_not_found':
      // File doesn't exist
      break;

    case 'storage/unauthorized':
      // User doesn't have permission to access the object
      break;

    case 'storage/canceled':
      // User canceled the upload
      break;

    case 'storage/unknown':
      // Unknown error occurred, inspect the server response
      break;
  }
});

// retrieve personal-info

//ref.child(`users/${user.uid}/personal-info`).on('value', (snapshot)=> {
ref.child(`users/${user.uid}/personal-info`).on('value', (snapshot)=> {

const profInfo = snapshot.val()
if (profInfo !== null) {
console.log('profInfo')
 console.log(profInfo)
 console.log(profInfo.FirstName)
 console.log(profInfo.JoinTime)
 //var joinTime = profInfo.joinTime
 //var clippedJoin = joinTime.slice(4, 14)
 //console.log(clippedJoin)
 //profileInfo.push(persInfo)
 that.setState({
   profInfo,
   FirstName: profInfo.FirstName,
   LastName: profInfo.LastName,
   aboutMe: profInfo.aboutMe,
   favSports: profInfo.favSports,
   userID: user.uid,
   location: profInfo.location
 })
 }
})

ref.child(`users/${user.uid}/account-info/rep`).on('value', (snapshot)=> {

const rep = snapshot.val()
 console.log('rep')
 console.log(rep)
 console.log(rep)

  var rep_sum = 0
  var keys = Object.keys(rep)

  for (var i =0; i < keys.length; i++) {
    var k = keys[i];
    var this_rep = rep[k];

    console.log(this_rep.this_rep)
    rep_sum = rep_sum + this_rep.this_rep

  }
    console.log((rep_sum/keys.length))
    that.setState({ rep: Math.round(100*(rep_sum/(5*keys.length))) })
})

  //set consts to state, pass as props to rendering comps
} else {
  // No user is signed in.
}
})
}


  render () {

    const profileStyle = {
      border: '1px solid #000',
      padding: '10px',
      marginRight: '55%'
    }

    const profileText = {
      margin: '0px',
      marginLeft: '230px',
      marginTop: "-200px"
    }

    const headerStyle3 = {
      color: 'white',
      background: "SteelBlue",
      textAlign: 'center',
      padding: "3px",
      width: "90%",
      //whiteSpace: 'nowrap',
      border: '1px solid #000',
      padding: '20px',
      marginTop: '23px'
    }

    const stats ={
      marginTop: "40px",
      marginLeft: "10px"
    }

    const scheduledMatches = {
      marginTop: "-450px",
      marginLeft: "600px",
      //width: "1000px"
    }

    const activityFeed = {
      marginTop: "-35px",
      width: "33%",
      marginLeft: '-15px',

      //margin
    }

    console.log('this.state.profInfo')
    console.log(this.state.FirstName)
     console.log('this.props.userID')
     var user =  firebaseAuth().currentUser.uid
  //   console.log(this.props.userID)
  //<img className="img-square avatar" src="http://placehold.it/48x38" alt=""/>


  // <div className="activity-feed">
  // <h3 ><strong> Recent Activity </strong></h3>
  // <Grid>
  // <RenderFriendRequests user={this.state.userID} name={this.state.FirstName + " " + this.state.LastName}/>
  // <ConfirmReport user={this.state.userID}/>
  // </Grid>
  // </div>

return (

<div className="profile-page">
  <div className="profile" style={profileStyle}>
   <div className= "image">
    <img className="img-square avatar"  id="myimg" src="http://placehold.it/48x38" alt="" height="200" width="200"/>
   </div>
   <div className="title h5" style={profileText}>
    <h3><strong> {this.state.FirstName + " " + this.state.LastName} </strong> </h3>
    <h4> {this.state.location} </h4>
    <h4> Sports: </h4>
    <h4> {this.state.favSports} </h4>
    <h4> About Me: </h4>
    <h5> {this.state.aboutMe} </h5>
    { this.state.userID === user ? <h4> <Link to={`/protected/editProfile/`}>Edit Profile</Link> </h4> : ''}
   </div>
   <div style={stats} className="key stats">
    <h3><strong> Key Stats: </strong></h3>
    <h4> Trophies Won: 0 </h4>
    <h4> Games played: 0 </h4>
    <h4> Reputation: {this.state.rep}% </h4>
    <h4> Member since: August 3, 2017 </h4>
    <h5 className="text-muted time">See Full Stats</h5>
   </div>
   </div>

  <div style={scheduledMatches} className="scheduled-matches">
  <h3 style={headerStyle3}><strong> Your Scheduled Matches </strong></h3>
  <ScheduledMatches user={this.state.userID}/>
  </div>

  <div style={activityFeed} className="activity-feed">
  <h3> <strong> Recent Activity </strong> </h3>
  <Grid>
  { this.state.userID === user ? <ConfirmReport user={this.state.userID}/> : ''}
  </Grid>
  </div>

  </div>
)
}
}

import React, { Component } from 'react'
import { getProfileInfo, getKeyStats } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/helpers/auth.js'
import { firebaseAuth, firebaseStorageRef, ref } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'
import ScheduledMatches from './scheduledMatches'
import ConfirmReport from './confirmReport'
import MatchReport from './MatchReport'
import RenderFriendRequests from './renderFriendRequests'

//TODO: profile pic + url in upper corner
//1. Add error handling to fb queries
//3. Component for recent activity
//
export default class profile extends Component {
  constructor(props){
    super(props)
  this.state = {
    profInfo: '',
    LastName: '',
    FirstName: ''
  }
}

  componentWillReceiveProps(nextProps){
  console.log("Recieved Props")
  //  var that = this
  console.log('nextProps')
  console.log(nextProps)
    // Create a reference to the file we want to download
  //var starsRef = firebaseStorageRef.child('profilePics/Classic_Singleton.png');
  var starsRef = firebaseStorageRef.child(`profilePics/${nextProps.userID}`)

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
  ref.child(`users/${nextProps.userID}/personal-info`).on('value', (snapshot)=> {

  const profInfo = snapshot.val()
  console.log('profInfo')
   console.log(profInfo)
   console.log(profInfo.FirstName)
   //profileInfo.push(persInfo)
   this.setState({
     profInfo,
     FirstName: profInfo.FirstName,
     LastName: profInfo.LastName
   })
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
var starsRef = firebaseStorageRef.child(`profilePics/${propsUser}`)

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
ref.child(`users/${propsUser}/personal-info`).on('value', (snapshot)=> {

const profInfo = snapshot.val()
console.log('profInfo')
 console.log(profInfo)
 console.log(profInfo.FirstName)
 //profileInfo.push(persInfo)
 that.setState({
   profInfo,
   FirstName: profInfo.FirstName,
   LastName: profInfo.LastName
 })
})

  //set consts to state, pass as props to rendering comps
} else {
  // No user is signed in.
}
})
}

// componentWillReceiveProps(nextProps) {
//   if(user)
// }

  render () {

    const profileStyle = {
      border: '1px solid #000',
      padding: '20px'
    }

    const profileText = {
      margin: '0px',
      marginLeft: '250px'
    }

    const headerStyle3 = {
      color: 'white',
      background: "SteelBlue",
      textAlign: 'center',
      padding: "3px",
      margin: "40px",
      width: "158x",
      whiteSpace: 'nowrap',
      border: '1px solid #000',
      padding: '20px',
      marginTop: '80px'
    }

    console.log('this.state.profInfo')
    console.log(this.state.FirstName)
     console.log('this.props.userID')
     console.log(this.props.userID)

return (
<div className="profile-page">
  <div className="profile" style={profileStyle}>
   <div className="pull-left image">
    <img className="img-square avatar"  id="myimg" src="" alt="" height="200" width="200"/>
   </div>
   <div className="pull-right">
    <h3><strong> Key Stats: </strong></h3>
    <h4> Trophies Won: 2 </h4>
    <h4> Games played: 86 </h4>
    <h4> Reputation: 99% </h4>
    <h4> Member since: August 3, 2017 </h4>
    <h5 className="text-muted time">See Full Stats</h5>
   </div>
   <div className="title h5" style={profileText}>
    <h3><strong> {this.state.FirstName + " " + this.state.LastName} </strong> <img className="img-square avatar" src="http://placehold.it/48x38" alt=""/></h3>
    <h4> Springfield, IN USA </h4>
    <h4> Sports: </h4>
    <h4> Tennis, Squash </h4>
    <h4> About Me: </h4>
    <h5> I am a competitive racket player, watch out! </h5>
   </div>
  </div>
  <div className="pull-left activity-feed">
  <h3 style={headerStyle3}><strong> Recent Activity </strong></h3>
  <RenderFriendRequests user={this.props.userID}/>
  <ConfirmReport user={this.props.userID}/>
  <h4> Jimbo won a Tennis Match, something to something </h4>
  <h4> Jimbo creted a Tennis Match, for October 1st </h4>
  </div>
  <div className="pull-right scheduled-matches">
  <h3 style={headerStyle3}><strong> Scheduled Matches </strong></h3>
  <ScheduledMatches user={this.props.userID}/>
  </div>
</div>
)
}
}

import React, { Component } from 'react'
//import { firebaseAuth } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'
import ChatRoom from './ChatRoom'
import ChatButton from './ChatButton'
import { removeMatchBackend, joinMatch } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/helpers/auth.js'
import { firebaseAuth, firebaseStorageRef, ref } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'
import MatchReport from './MatchReport'

export default class MatchRender extends Component {

  constructor(props){
    super(props)
    this.state = {
      joined: false,
      playerList: [],
      url: ""
      }
  this.renderjoin = this.renderjoin.bind(this)
  this.handleJoin = this.handleJoin.bind(this)
  this.removeMatch = this.removeMatch.bind(this)
  }


// TODO: fix src url for each prof pic
//componentWillReceiveProps(nextProps){
componentDidMount(){
  // console.log("Recieved Props")
  // //  var that = this
  // console.log('nextProps')
  // //console.log(nextProps)
  console.log("nextProps")
//  console.log(nextProps)
    // Create a reference to the file we want to download
  var starsRef = firebaseStorageRef.child('profilePics/Classic_Singleton.png');
  console.log("afterRef")
  // Get the download URL
  starsRef.getDownloadURL().then(function(url) {
    // Insert url into an <img> tag to "download"
    var img = document.getElementById('myimg');
    img.src = url;
    console.log("url")
    console.log(url)
    this.setState({url})
    console.log("Done image")
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
}

handleJoin(){
const user = firebaseAuth().currentUser
const players = this.props.match.players
const matchID = this.props.match.id
// Writes data to backend
joinMatch(user, players, matchID)
this.setState({joined: true})
}


removeMatch(e){
       e.preventDefault();
       console.log("Removing Match")
    const players = this.props.match.players
    // Call to firebase
    removeMatchBackend(players)
   }

renderjoin(e){
  e.preventDefault()
  return <div> No function yet </div>
}

  render(){
    console.log('entered match Render')
    const user = firebaseAuth().currentUser.uid
    let button = null

    if( this.props.match.creator === user) {
      button = <div> Your match </div>
    }
     else if (this.props.match.players.includes(user)) {
      button = <div> You Joined the match </div>
    } else if(this.props.match.creator !== user){
      button = <button onClick={this.handleJoin} className="btn btn-primary">Join Match</button>
    }
    // else{
    //   button = <button />
    // }

    let matchRemark = null

    if (this.props.match.creator === user.uid){
      matchRemark = ' Your Match '
    }
    else if (this.state.joined){
      matchRemark = ' You Joined this Match! '
    }
//id="myimg"

  console.log(this.state.url)

    return(
      <div className="col-sm-12">
        <div className="panel panel-white post panel-shadow">
          <div className="post-heading">
            <div className="pull-left image">
              <img className="img-circle avatar" src="https://firebasestorage.googleapis.com/v0/b/add-users-to-app.appspot.com/o/profilePics%2FClassic_Singleton.png?alt=media&token=cacccb2e-3200-4dba-94b9-1d71ec491cd9" alt="" height="48" width="48"/>
            </div>
            <div className="pull-right "><button onClick={this.removeMatch} className="fa fa-remove">Cancel Match</button></div>
            <div className="pull-left meta">
              <div className="title h5">
               <h4>  <strong> {this.props.match.creatorName} </strong> made a Match </h4>
               <br/>
               {matchRemark}
              </div>
              <h6 className="text-muted time">An hour ago</h6>
              </div>
            </div>
          </div>
          <div className="col-md-12 post-description">
          <br/>
            <h3>  {this.props.match.sport} </h3>
            <br/>
            <h3> Level: {this.props.match.skill} </h3>
            <br/>
            <h3> Date: {this.props.match.date} </h3>
            <br/>
            <h3> Players: {this.props.match.players.length} </h3>
            <br/>
            </div>
            {button}
            <div className="actions">
        </div>

        <ChatButton matchkey={this.props.match.id}/>
        <MatchReport match={this.props.match}/>


      </div>
    )
  }
}

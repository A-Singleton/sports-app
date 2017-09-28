import React, { Component } from 'react'
import ChatRoom from './ChatRoom'
import ChatButton from './ChatButton'
import { removeMatchBackend, joinMatch, addFriend } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/helpers/auth.js'
import { firebaseAuth, firebaseStorageRef, ref } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'
import MatchReport from './MatchReport'
import { Button } from 'react-bootstrap'
import JoinGrid from './joinGrid'
import Thumbnail from './thumbnail'

export default class MatchRender extends Component {

  constructor(props){
    super(props)
    this.state = {
      joined: false,
      playerList: [],
      url: "",
      f_name: '',
      l_name: ''
      }

//  this.renderjoin = this.renderjoin.bind(this)
  this.handleJoin = this.handleJoin.bind(this)
  this.removeMatch = this.removeMatch.bind(this)
  }

// TODO: fix src url for each prof pic
//componentWillReceiveProps(nextProps){
componentDidMount(){
  console.log("nextProps")
//  console.log(nextProps)
//const user = firebaseAuth().currentUser.uid
var thisUser = this.props.match.creator
console.log(thisUser)
    // Create a reference to the file we want to download
  //var starsRef = firebaseStorageRef.child('profilePics/Classic_Singleton.png');
var starsRef = firebaseStorageRef.child(`profilePics/${thisUser}`)

  console.log("afterRef")
  // Get the download URL
  starsRef.getDownloadURL().then(function(url) {

    // Insert url into an <img> tag to "download"
  //  var img = document.getElementById('myimg');
  var img =  document.getElementsByClassName(`img-circle avatar ${thisUser}`)

  for (var i = 0; i < img.length; i++) {
    img[i].src = url
}

    //img[i].src = url;
    console.log("url")
    console.log(url)
    //this.setState({url})
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

handleJoin() {
const user = firebaseAuth().currentUser
const players = this.props.match.players
const matchID = this.props.match.id

joinMatch(user, players, matchID, this.props.userName)
this.setState({joined: true})
}

removeMatch(e) {
    e.preventDefault();
    console.log("Removing Match")
    const players = this.props.match.players

    removeMatchBackend(players)
   }

// renderjoin(e){
//   e.preventDefault()
//   return <div> No function yet </div>
// }

friendRequest = (event) => {
  console.log(this.props.match.creator)
  const user = firebaseAuth().currentUser.uid
  console.log(this.props.match)
  console.log(this.props.userName)
  addFriend(this.props.match.creator, this.props.match.creatorName,
                                                   user, this.props.userName)
}

  render(){
    console.log('entered match Render')
    const user = firebaseAuth().currentUser.uid

    //
    let button = null
    if (this.props.match.creator === user) {
      button = <div> Your match </div>
    }
    else if (this.props.match.idStack.includes(user)) {
      button = <div> You Joined the match </div>
      }
    else if(this.props.match.creator !== user){
      button = <button onClick={this.handleJoin} className="btn btn-primary">Join Match</button>
    }

    //
    let friendButton = null
    if(!this.props.friends.includes(this.props.match.creator) &&
        this.props.match.creator !== user) {
    friendButton = <Button bsStyle="success" onClick={this.friendRequest}>Send Friend Request</Button> }
    //console.log(!this.props.friends.includes(`${this.props.match.creator}`))

    //
    let cancelButton = null
    if (this.props.match.creator === user.uid){
    cancelButton = <Button bsStyle="danger" onClick={this.removeMatch} className="fa fa-remove">Cancel Match</Button>
    }

    //
    let matchRemark = null
    if (this.props.match.creator === user.uid){
      matchRemark = ' Your Match '
    }
    else if (this.state.joined){
      matchRemark = ' You Joined this Match! '
    }

    var url = `https://firebasestorage.googleapis.com/v0/b/add-users-to-app.appspot.com/o/profilePics%${this.props.match.creator}?alt=media&token=cacccb2e-3200-4dba-94b9-1d71ec491cd9`
    console.log(url)
    var classNameImg = `img-circle avatar ${this.props.match.creator}`
    console.log(classNameImg)

    return(
      <div className="col-sm-12">
        <div className="panel panel-white post panel-shadow">
          <div className="post-heading">
            <div className="pull-left image">
              <img className={classNameImg} id="myimg" src="" alt="" height="48" width="48"/>
            </div>
            <div className="pull-right "> { cancelButton } </div>
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
            <h3> {this.props.match.sport} </h3>
            <br/>
            <h3> Level: {this.props.match.skill} </h3>
            <br/>
            <h3> Date: {this.props.match.date} </h3>
            <br/>
            <h3> Players: {this.props.match.players.length} </h3>
            <br/>
            {friendButton}
            </div>
            {button}
            <div className="actions">
        </div>

        <JoinGrid
        sport={this.props.match.sport}
        players={this.props.match.players}
        players2={this.props.match.players2}
        players3={this.props.match.players3}
        players4={this.props.match.players4}
        matchID={this.props.match.id}
        userName={this.props.userName}
        idStack={this.props.match.idStack}
        maxPlayers={this.props.match.maxPlayers}
        />

        <ChatButton matchkey={this.props.match.id}/>

        <MatchReport
        match={this.props.match}
        players={this.props.match.players}
        players2={this.props.match.players2}
        players3={this.props.match.players3}
        players3={this.props.match.players4}
        />

      </div>
    )
  }
}

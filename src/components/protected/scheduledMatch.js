import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { firebaseAuth, firebaseStorageRef, ref } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'

export default class ScheduledMatch extends Component {
  constructor(props){
    super(props)
    this.state = {
      joined: false
      }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  componentDidMount() {
    console.log('Mounted last')

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

  render(){
    console.log('entered match Render')
    console.log('this.props')
    console.log(this.props.match)
  //  const user = firebaseAuth().currentUser.uid
    let button = null
    var thisUser = this.props.match.creator
    var classNameImg = `img-circle avatar ${thisUser}`
    //            <h5> Tomorrow, 5:00 PM </h5>

    const background = {
      background: 'white',
      marginBottom: '15px',
      borderRadius: '5px'
      //paddingTop: '300px'
    }

    const space = {
      background: '#eee'
    }

    return(
      <div style={background} className="col-sm-12">
        <div className="panel panel-white post panel-shadow">
          <div className="post-heading">
            <div className="pull-left image">
              <img className={classNameImg} src="" height="48" width="48" alt=""/>
            </div>
            <div className="pull-left meta">
              <div className="title h5">
              <h4> <strong> Host: </strong> <Link to={`/protected/profileIndex/${this.props.match.creator}`}>{this.props.match.creatorName} </Link> </h4>
               <br/>
              </div>
              </div>
            </div>
          </div>
          <div className="col-sm-8 post-description">
          <br/>
            <h3>  {this.props.match.sport} </h3>
            <br/>
            <h3> Level: {this.props.match.skill} </h3>
            <br/>
            <h3> Date: {this.props.match.date} </h3>
            <br/>
            <h3> Players: {this.props.match.homePlayers.length} </h3>
            <br/>
            </div>
            <div className="actions">
        </div>
      </div>
    )
  }
}

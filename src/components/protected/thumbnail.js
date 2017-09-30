import React, { Component } from 'react'
import { firebaseStorageRef } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'

export default class Thumbnail extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      url: ''
    }
  }

componentWillReceiveProps(nextProps) {
console.log("Thumbnail Next Props")
console.log(JSON.stringify(nextProps))
console.log(JSON.stringify(nextProps.player))
var test = nextProps.player.user
console.log(test);
  // Create a reference to the file we want to download
//var starsRef = firebaseStorageRef.child(`profilePics/${nextProps.player.this_user}`);
var starsRef = firebaseStorageRef.child(`profilePics/${nextProps.player.user}`);

// Get the download URL
starsRef.getDownloadURL().then(function(url) {
  // Insert url into an <img> tag to "download"
//  var img = document.getElementById('myimg');
  //var imgBar = document.getElementById('imgBar')
//  var img = document.getElementById('myimg')
  var img =  document.getElementsByClassName(`img-circle avatar ${nextProps.player.user}`)
//  imgBar.src = url
  //console.log("thumbnail")
  //console.log(url)

  for (var i = 0; i < img.length; i++) {
  //  console.log(img[i])
    img[i].src = url
}
  //this.setState({url})
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

  componentDidMount() {
    // Create a reference to the file we want to download
    console.log(this.props.player.user)
  var starsRef = firebaseStorageRef.child(`profilePics/${this.props.player.user}`);

  // Get the download URL
  starsRef.getDownloadURL().then(function(url) {
    // Insert url into an <img> tag to "download"
  //  var img = document.getElementById('myimg');
    //var imgBar = document.getElementById('imgBar')
  //  var img = document.getElementById('myimg')
    var img =  document.getElementsByClassName(`img-circle avatar ${this.props.player.user}`)
  //  imgBar.src = url
    console.log("thumbnail")
    console.log(url)

    for (var i = 0; i < img.length; i++) {
      img[i].src = url
  }
    //this.setState({url})
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

  render () {

    const horInput = {
      padding: "2px",
      width: '40px',
      margin: "10px",
    }

    var classNameImg = `img-circle avatar ${this.props.player.user}`

    return(
      <div>
      <label> <img className={classNameImg} id="myimg" src="" alt="" height="48" width="48"/>
      { this.props.player.name } </label>
      </div>
    )
  }
}

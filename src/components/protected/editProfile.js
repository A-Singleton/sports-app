import React, { Component } from 'react'
import { Form,  FormGroup, FormControl, Col, Button, ControlLabel} from 'react-bootstrap'
import ImageUpload from './ImageUpload'
import { updateProfile, getProfileInfo } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/helpers/auth.js'
import { firebaseAuth, ref, firebaseStorageRef } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'

//To do:
// 1. Seperate Image change (probably)
// 2. Add BirthDay changes
// 3. Multi Selection support
// 4. Lock glyphicons w/ private popup
// 5. Instructional gray bottom text
// 6. Prepopulate info

export default class editProfile extends Component {

constructor(props){
  super(props)
  this.state = {
    fName: '',
    lName: '',
    email: '',
    gender:'',
    location: '',
    favSports: [],
    aboutUser: '',
    profInfo: ''
  }
}

componentDidMount(){
  const that = this
  firebaseAuth().onAuthStateChanged(function(user) {
if (user) {
// User is signed in.

    ref.child(`users/${user.uid}/personal-info`).on('value', (snapshot)=> {

    const persInfo = snapshot.val()
     console.log(persInfo)
     that.setState({
    fName: persInfo.FirstName,
    lName: persInfo.LastName,
    email: persInfo.email,
    gender: persInfo.Gender,
     })
    })

    // Create a reference to the file we want to download
  var starsRef = firebaseStorageRef.child('profilePics/castling kids.png');

  // Get the download URL
  starsRef.getDownloadURL().then(function(url) {
    // Insert url into an <img> tag to "download"
  //  var img = document.getElementById('myimg');
    var imgBar = document.getElementById('imgBar')
    var img = document.getElementById('myimg')
    imgBar.src = url
    img.src = url
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

//set consts to state, pass as props to rendering comps
} else {
// No user is signed in.
}
})

}

handleChangeFname = (event) => {
  console.log(event.target.value)
    this.setState({ fName: event.target.value });
  };

  handleChangeLname = (event) => {
    console.log(event.target.value)
      this.setState({ lName: event.target.value });
    };

    handleChangeEmail = (event) => {
      console.log(event.target.value)
        this.setState({ email: event.target.value });
      };

      handleChangeGender = (event) => {
        console.log(event.target.value)
          this.setState({ gender: event.target.value });
        };

        handleChangeLocation = (event) => {
          console.log(event.target.value)
            this.setState({ location: event.target.value });
          };

        handleChangeSports = (event) => {
          console.log(event.target.value)
            this.setState({ sports: event.target.value });
          };

          handleChangeAboutUser = (event) => {
            console.log(event.target.value)
              this.setState({ aboutUser: event.target.value });
            };

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.fName)
    console.log(this.state.lName)
    console.log(this.state.email)
    console.log(this.state.gender)

    const updatedInfo = {
      FirstName: this.state.fName,
      LastName: this.state.lName,
      Email: this.state.email,
      Gender: this.state.gender
}
//  const user = firebaseAuth().currentUser
//  updateProfile(updatedInfo, user)
}

  render () {

    const profileText = {
      margin: '0px',
      marginLeft: '250px'
    }

return (
  <div>
  {this.state.profInfo.fName}
  <div className="title h5" style={profileText}>
   <h3><strong> Edit Your Profile </strong> </h3>
   </div>
  <img className="img-square avatar" id="myimg" src="" alt="" height="200" width="200"/>
  <ImageUpload />
  <br/>
  <Form horizontal onSubmit={this.handleSubmit}>
  <FormGroup controlId="formHorizontalFname">
    <Col componentClass={ControlLabel} sm={2}>
      First Name
    </Col>
    <Col sm={10}>
      <FormControl type="text" value={this.state.fName} onChange={this.handleChangeFname} />
    </Col>
  </FormGroup>

  <FormGroup controlId="formHorizontalLname">
    <Col componentClass={ControlLabel} sm={2}>
      Last Name
    </Col>
    <Col sm={10}>
      <FormControl type="text" value={this.state.lName} onChange={this.handleChangeLname}/>
    </Col>
  </FormGroup>

<FormGroup controlId="formHorizontalEmail">
  <Col componentClass={ControlLabel} sm={2}>
    Email
  </Col>
  <Col sm={10}>
    <FormControl type="email" value={this.state.email} onChange={this.handleChangeEmail} />
  </Col>
</FormGroup>

<FormGroup controlId="formHorizontalLocation">
  <Col componentClass={ControlLabel} sm={2}>
    Location
  </Col>
  <Col sm={10}>
    <FormControl type="text" value={this.state.location} onChange={this.handleChangeLocation} />
  </Col>
</FormGroup>

<FormGroup controlId="formControlsSelectMultiple">
  <ControlLabel>Played Sports</ControlLabel>
  <FormControl componentClass="select" multiple>
    <option value="select">select (multiple)</option>
    <option value="other">...</option>
  </FormControl>
</FormGroup>

<FormGroup controlId="formControlsTextarea">
  <ControlLabel>About Me</ControlLabel>
  <FormControl componentClass="textarea" value={this.state.aboutUser} onChange={this.handleChangeAboutUser} />
</FormGroup>

<FormGroup>
  <Col smOffset={10} sm={10}>
    <Button bsStyle="warning" type="submit">
      Save Changes
    </Button>
  </Col>
</FormGroup>
</Form>
</div>
)
}
}

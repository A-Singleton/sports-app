import React, { Component } from 'react'
import { Form,  FormGroup, FormControl, Col, Button, ControlLabel} from 'react-bootstrap'
import ImageUpload from './ImageUpload'
import { updateProfile, getProfileInfo } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/helpers/auth.js'
import { firebaseAuth } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'

//To do:
// 1. Seperate Image change (probably)
// 2. Add BirthDay changes
// 3. Multi Selection support
// 4. Lock glyphicons w/ private popup
// 5. Instructional gray bottom text

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
    aboutUser: ''
  }
}

componentDidMount(){
  firebaseAuth().onAuthStateChanged(function(user) {
if (user) {
// User is signed in.
const profileInfo = getProfileInfo(user)

console.log(profileInfo)
profileInfo.forEach(function(item){
  console.log(item.FirstName)
})

const test = profileInfo.map((info, i) => {
  console.log('info')
  console.log(i)
   console.log(info)
   console.log(info.FirstName)
  return(
    null
  )
})


//const test = profileInfo.map(info, i)
//console.log(info.FirstName)
//this.setState({fName: profileInfo.FirstName})
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
    // BirthMonth: this.month.value,
    // BirthDay: this.day.value,
    // BirthYear: this.year.value
    const updatedInfo = {
      FirstName: this.state.fName,
      LastName: this.state.lName,
      Email: this.state.email,
      Gender: this.state.gender
}
  const user = firebaseAuth().currentUser
  updateProfile(updatedInfo, user)
}

  render () {

    const profileText = {
      margin: '0px',
      marginLeft: '250px'
    }

return (
  <div>
  <div className="title h5" style={profileText}>
   <h3><strong> Edit Your Profile </strong> </h3>
   </div>
  <img className="img-square avatar" src="http://placehold.it/200x200" alt=""/>
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

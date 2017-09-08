import React, { Component } from 'react'
import { Form,  FormGroup, FormControl, Col, Button, ControlLabel} from 'react-bootstrap'

export default class editProfile extends Component {

  render () {
return (
  <div>
  <img className="img-square avatar" src="http://placehold.it/200x200" alt=""/>
  <ImageUpload />
  <br/>
  <Form horizontal>
  <FormGroup controlId="formHorizontalFname">
    <Col componentClass={ControlLabel} sm={2}>
      First Name
    </Col>
    <Col sm={10}>
      <FormControl type="text" placeholder="this.props.fname" />
    </Col>
  </FormGroup>

  <FormGroup controlId="formHorizontalLname">
    <Col componentClass={ControlLabel} sm={2}>
      Last Name
    </Col>
    <Col sm={10}>
      <FormControl type="text" placeholder="this.props.lname" />
    </Col>
  </FormGroup>

<FormGroup controlId="formHorizontalEmail">
  <Col componentClass={ControlLabel} sm={2}>
    Email
  </Col>
  <Col sm={10}>
    <FormControl type="email" placeholder="Email" />
  </Col>
</FormGroup>

<FormGroup controlId="formHorizontalLocation">
  <Col componentClass={ControlLabel} sm={2}>
    Location
  </Col>
  <Col sm={10}>
    <FormControl type="text" placeholder="this.props.location" />
  </Col>
</FormGroup>

<FormGroup controlId="formHorizontalCountry">
  <Col componentClass={ControlLabel} sm={2}>
    Country
  </Col>
  <Col sm={10}>
    <FormControl type="text" placeholder="this.props.country" />
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
  <FormControl componentClass="textarea" placeholder="this.props.about" />
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

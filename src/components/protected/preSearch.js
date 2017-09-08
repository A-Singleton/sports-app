import React, { Component } from 'react'

export default class preSearch extends Component {

  render () {
return (
<Navbar style={navbarHeader} inverse collapseOnSelect>
<Navbar.Header>
<Navbar.Brand>
 <a href="#">Find Matches</a>
</Navbar.Brand>
<Navbar.Toggle />
</Navbar.Header>
<Navbar.Collapse>
<Nav >
 <NavItem eventKey={1} href="#">Schedule Matches</NavItem>
 <NavItem eventKey={2} href="#">Tournament Maker</NavItem>
 <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
   <MenuItem eventKey={3.1}>Action</MenuItem>
   <MenuItem eventKey={3.2}>Another action</MenuItem>
   <MenuItem eventKey={3.3}>Something else here</MenuItem>
   <MenuItem divider />
   <MenuItem eventKey={3.3}>Separated link</MenuItem>
 </NavDropdown>
</Nav>
</Navbar.Collapse>
</Navbar>

<FormGroup>
<Radio name="radioGroup" inline>
Public - Ranked
</Radio>
{'  '}
<Radio name="radioGroup" inline>
Public - Unranked
</Radio>
{' '}
<Radio name="radioGroup" inline>
Private - Invite Only
</Radio>
</FormGroup>

<Grid style={backImg}>

<Row className="show-grid">
<Col xs={12} md={7}> <FormGroup style={pushTopMargin} controlId="initial-search">
    <ControlLabel> Where? </ControlLabel>
    <FormControl type="search" placeholder="this.props.location"/>
</FormGroup></Col>
<Col xs={6} md={4}>
<FormGroup style={pushRightMargin} controlId="limit-search">
<Checkbox inline>
Only matches on today
</Checkbox>
</FormGroup>
</Col>
</Row>

<Row className="show-grid">
<Col xs={12} md={7}>
<FormGroup controlId="select" multiple>
<ControlLabel>What Sport?</ControlLabel>
<FormControl componentClass="select" multiple>
  <option value="select">select (multiple)</option>
  <option value="select">Tennis</option>
  <option value="select">Squash</option>
  <option value="other">...</option>
</FormControl>
</FormGroup></Col>
<Col xs={6} md={4}>
<FormGroup controlId="start-search">
<Button style={pushRightMargin} bsStyle="success" type="submit">
  SEARCH MATCHES
</Button>
</FormGroup>
</Col>
</Row>

<div className="pull-left activity-feed">
<h3 style={headerStyle3}><strong> Tournament Activity </strong></h3>
<h4> Jimbo won a Tennis Match, something to something </h4>
<h4> Jimbo creted a Tennis Match, for October 1st </h4>
</div>
<div className="pull-right scheduled-matches">
<h3 style={headerStyle3}><strong> Friend Feed </strong></h3>
<h4> Tennis: 10-3-2017 at 11:00am </h4>
<h4> Jimbo creted a Tennis Match, for October 1st </h4>
</div>

</Grid>
)
}
}

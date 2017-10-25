import React, { Component } from 'react'
import { getProfileInfo, getKeyStats } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/helpers/auth.js'
import { firebaseAuth } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'
import { Cell, Box, Checkbox, Grid, Row, Radio, Form,  FormGroup, FormControl, Col, Button, ControlLabel, Navbar, NavDropdown, NavItem, Nav, MenuItem} from 'react-bootstrap'
import Background from '../images/tennis_background.jpg';
import MatchFeedQuery from './matchFeedQuery'

//1. Friend Feed component
//2. Interesting News Component
export default class preSearch extends Component {
  constructor(props){
    super(props)
    this.state = {
      sport: "Golf",
      sportQuery: null
  }
}

onSportChanged = (event) => {
  event.preventDefault()
  console.log(event.target.value)
  this.setState({sport: event.target.value})
}

onSubmit = (e) => {
  e.preventDefault()
  this.setState({sportQuery: this.state.sport})
  console.log("Submitted")
}

  render () {

    const divStyle = {
      display: 'block',
      textAlign: 'center',
      background: "#eee",
      padding: "5px",
      margin: "5px",
      //width: "550px",
      //justifyContent: 'center'
      //alignItems: 'flex',
      //justifyContent: 'flex',
      //alignSelf: 'flex',
    //  color: 'blue',
    //  backgroundImage: 'url(' + imgUrl + ')',
    };

    const divCheckbox = {
      textAlign: 'center',
      //display: 'table',
      //justifyContent: 'center',
    //  float: 'left',
      display: 'inlineBlock',
    //  marginRight: '155px'
      //margin: '0 auto'
    }

    const checkboxLabel =  {
      //display: 'table-row'
      display: 'inlineBlock'
  }

  //  const inputLen = {
  //     display: 'table-row',
  //     width: '100%',
  // }

    const matchLabel = {
    //  marginRight: "40px"
    //  color: 'blue',
    //  backgroundImage: 'url(' + imgUrl + ')',
    };

    const stdInput = {
    width: '200px',
  //  display: 'inlineBlock',
    //textAlign: 'center',
    //border: '1px'
    //solid #000
    padding: '5px'
  }

    const headerStyle2 = {
      color: 'white',
      background: "SteelBlue",
      textAlign: 'center',
      padding: "13px",
      margin: "5px",
      width: "5256x"
    };

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
    };

    const checkbox = {
  //    padding: "100px",
      margin: "5px",
  //  display: 'table-row',
      display: 'inlineBlock',
      width: '100%',
//    width: '200px'
    };

    const horInput = {
      padding: "2px",
      width: '40px',
      margin: "10px",
    }

    const h2 = {
      textAlign: 'center',
    }

    const profile = {
      border: '1px solid #000',
      padding: '20px'
    }

    const profileText = {
      margin: '0px',
      marginLeft: '250px'
    }

    const PRODUCTS = [
      {category: 'Best Friends', rank: '1239', stocked: true, name: 'Jim Rogers'},
      {category: 'Best Friends', rank: '566', stocked: true, name: 'Kay Winslett'},
      {category: 'Best Friends', rank: '21', stocked: true, name: 'Yuan Wang'},
    ]

    const navbarHeader = {
    color: 'black',
  //   background: "turquoise"
}

const navItem = {
  color: 'white'
}

const backImg = {
   width: "100%",
   height: "270px",
   border: '2px solid #000',
   borderRadius: '5px',
   //rightMargin: '150px',
   backgroundSize: 'cover',
   backgroundImage: `url(${Background})`
}

const blue = {
  primary:'blue'
}

const pushTopMargin = {
  marginTop: ' 30px '
}

const pushRightMargin = {
  marginTop: ' 60px '
}

const pushDownButton = {
  marginTop: ' 15px '
}

// <div className="pull-left activity-feed">
// <h3 style={headerStyle3}><strong> Tournament Activity </strong></h3>
// <h4> Jimbo won a Tennis Match, something to something </h4>
// <h4> Jimbo creted a Tennis Match, for October 1st </h4>
// </div>
// <div className="pull-right scheduled-matches">
// <h3 style={headerStyle3}><strong> Friend Feed </strong></h3>
// <h4> Tennis: 10-3-2017 at 11:00am </h4>
// <h4> Jimbo creted a Tennis Match, for October 1st </h4>
// </div>
console.log(this.state.sport)
console.log(this.state.sportQuery)

return (
  <div>
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
<Form onSubmit={this.onSubmit} >
<Row className="show-grid">
<Col xs={12} md={7}> <FormGroup style={pushTopMargin} controlId="initial-search">
    <ControlLabel> Where? </ControlLabel>
    <FormControl type="search" placeholder="Where would you like to play?"/>
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
<FormGroup controlId="select">
<ControlLabel>What Sport?</ControlLabel>
<FormControl onChange={this.onSportChanged} componentClass="select">
<option disabled value>Sport</option>
<option value="Golf">Golf</option>
<option value="Squash - Singles">Squash - Singles</option>
<option value="Squash - Doubles">Squash - Doubles</option>
<option value="Tennis - Singles">Tennis - Singles</option>
<option value="Tennis - Doubles">Tennis - Doubles</option>
<option value="Badminton - Singles">Badminton - Singles</option>
<option value="Badminton - Doubles">Badminton - Doubles</option>
<option value="Basketball">Basketball</option>
<option value="Soccer - 5 a Side">Soccer - 5 a Side</option>
<option value="Soccer - 11 a Side">Soccer - 11 a Side</option>
<option value="Softball">Softball</option>
<option value="Quidditch"> Quidditch </option>
</FormControl>
</FormGroup></Col>
<Col xs={12} md={12}>
<FormGroup controlId="start-search">
<Button style={pushDownButton} bsStyle="success" type="submit">
  SEARCH MATCHES
</Button>
</FormGroup>
</Col>
</Row>
</Form>
</Grid>
{ this.state.sportQuery === null ? "Search for a Sport!" :
<MatchFeedQuery sport={this.state.sportQuery}/>}
</div>
)
}
}

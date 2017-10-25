import React, { Component } from 'react'
import {Checkbox, CheckboxGroup} from 'react-checkbox-group'
import { firebaseAuth } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'
import matchFeed from './matchFeed'
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-bootstrap-time-picker';
import Maps from './Maps'
import ImageUpload from './ImageUpload'
import { saveMatch } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/helpers/auth.js'
import Tournament from './Tournament'
import Background from '../images/tennis_background.jpg';


// TODO: Show success of submission message, with invite to make another match
// Redirect to success page, with invite link back to make another. modal with refresh?

export default class MakeMatch extends Component {

  constructor(props){
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      matchKey: '',
      time: 0,
      mapDataAddress: null,
      mapDataLat: null,
      mapDataLng: null,
      startDate: null,
      skill: [],
      totalPlayers: 'Default',
      newProfile: {
        sports : null,
        formatDate: null,
        User: null
      }
    }
     this.handleChange = this.handleChange.bind(this);
     this.handleTimeChange = this.handleTimeChange.bind(this);
     this.handleChangeUser = this.handleChangeUser.bind(this)
     this.handleChangeGuest = this.handleChangeGuest.bind(this)
  }

  skillChanged = (event) => {
    console.log(event)
    this.setState({
      skill: event
    });
  }

  onChange(value) {
    this.setState({
      age: value
    });
    }

    playersChange = (event) => {
      this.setState({})
    }

  handleChange(event){
     this.setState({startDate: event.target.value
     });
  }

  handleTimeChange(time) {
    console.log(time);     // <- prints "3600" if "01:00" is picked
    this.setState({ time });
  }

  handleChangeUser(value){
    value.preventDefault()
  }

  handleChangeGuest(value){
    value.preventDefault()
  }

  myCallback = (dataFromMaps) => {
      //  [...we will use the dataFromChild here...]
    //  console.log(dataFromMaps.address)
      this.setState({mapDataAddress: dataFromMaps.address,
                     mapDataLat: dataFromMaps.lat,
                     mapDataLng: dataFromMaps.lng
      })
    }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("Created Match!")
    const matchData =  {
    sport: this.sport.value,
    players: this.players.value,
    gameDate: this.state.startDate,
    skill: this.state.skill,
    matchTime: this.state.time,
    mapDataAddress: this.state.mapDataAddress,
    mapDataLat: this.state.mapDataLat,
    mapDataLng: this.state.mapDataLng
  }

  firebaseAuth().onAuthStateChanged(function(user) {
  if (user) {

  // External function, handles upload to firebase
  saveMatch(matchData, user)

  } else {
  // No user is signed in. Cannot perform upload.
  }
  });
  }


  render(){


    const divStyle = {
      display: 'block',
      textAlign: 'center',
      //background: "white",
      background: 'White',
      padding: "5px",
      margin: "5px",
      borderRadius: '5px',
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
      height: '30px',
    width: '200px',
    //  display: 'inlineBlock',
    //textAlign: 'center',
    //border: '1px'
    //solid #000
    //padding: '5px'
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

    const halfWidthLeft = {
    width: ' 40% ',
    display: 'inlineBlock',
    padding: '0px',
    marginRight: '15px'
    }

    const halfWidthRight = {
    width: ' 40% ',
    display: 'inlineBlock',
    padding: '0px',
    marginLeft: '15px'
    }

    console.log(this.state.startDate)
    console.log(this.state.skill)
    //console.log(this.players.value)

  return(
<div style={divStyle}>

<h2 style={headerStyle2}> Create a Match! </h2>

<form onSubmit={this.handleSubmit}>
<label style={matchLabel}>1. Sport</label>
<div className="form-group">
<select style={stdInput} id="sport" ref={(sport) => this.sport = sport}>
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
</select>

<br/>
<label> # of Total Players </label>
<div className="form-group">
<select id="birthday_day" ref={(players) => this.players = players}>
<option disabled value>Players</option>
<option value="Default">Default</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
<option value="17">17</option>
<option value="18">18</option>
<option value="19">19</option>
<option value="20">20</option>
<option value="21">21</option>
<option value="22">22</option>
<option value="23">23</option>
<option value="24">24</option>
<option value="25">25</option>
<option value="26">26</option>
<option value="27">27</option>
<option value="28">28</option>
<option value="29">29</option>
<option value="30">30</option>
<option value="31">31</option>
</select>
</div>

</div>

<label htmlFor="date" className="col-2 col-form-label">2. Date and Time</label>
<div className="form-inline">
  <input style={halfWidthLeft} className="form-control" type="date" id="date"
  onChange={this.handleChange}/>
<TimePicker style={halfWidthRight} onChange={this.handleTimeChange}
value={this.state.time}
start="6:00" end="23:30"/>
</div>

<br/>
<label className="col-2 col-form-label">3. Where</label>
<Maps callbackFromParent={this.myCallback}/>
<br/>

<label style={matchLabel}> 4. Preferred Opponent Skill Level</label>

<CheckboxGroup
   name="preferred opponent skill level"
   value={this.state.skill}
   onChange={this.skillChanged}>
       <div style={divCheckbox}>
       <label style={checkboxLabel}><Checkbox style={checkbox} value="Beginner"/> Beginner</label>
       <label style={checkboxLabel}><Checkbox style={checkbox} value="Intermediate"/> Intermediate</label>
       <label style={checkboxLabel}><Checkbox style={checkbox} value="Advanced"/> Advanced</label>
       </div>
     </CheckboxGroup>
     <br/>
<button type="submit" className="btn btn-primary">Create Match</button>
</form>
</div>
)
}
}

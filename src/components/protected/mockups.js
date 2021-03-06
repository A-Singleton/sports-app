import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Checkbox, CheckboxGroup} from 'react-checkbox-group'
import { firebaseAuth } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'
import matchFeed from './matchFeed'
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-bootstrap-time-picker';
import Maps from './Maps'
import ImageUpload from './ImageUpload'
import { saveMatch } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/helpers/auth.js'
import Tournament from './Tournament'
import FinalFriendsComp from './FinalFriendsComp'
import Background from '../images/tennis_background.jpg';

export default class Mockups extends Component {
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

  sportsChanged(newSports) {
    this.setState({
      sports: newSports
    });
  }

  onChange(value) {
    this.setState({
      age: value
    });
    }

  handleChange(date){

    //console.log(date)
     this.setState({startDate: date
                  //  formatDate: date.format("MM/DD/YYYY")
     });
     console.log(this.startDate)
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

    const matchData =  {
    sport: this.sport.value,
    gameDate: this.state.formatDate,
    skill: this.skill.value,
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

return(
<div>
<div>
<h1> Welcome!</h1>
<h2> Please fill in your profile so we can instantly
  match you with games near you! </h2>

        <CheckboxGroup
           name="favoriteSports"
           value={this.state.sports}
           onChange={this.sportsChanged.bind(this)}>
               <label><Checkbox value="tennis"/> Tennis</label>
               <label><Checkbox value="badminton"/> Badminton</label>
               <label><Checkbox value="basketball"/> Basketball</label>
               <label><Checkbox value="soccer"/> Soccer</label>
               <label><Checkbox value="softball"/> Softball</label>
             </CheckboxGroup>
             <input type="submit" value="Update Profile" />
             </div>
<br />
<br />
     <h2 style={h2}> Mockups </h2>
     <div style={divStyle}>

     <h2 style={headerStyle2}> Create a Match! </h2>

     <form onSubmit={this.handleSubmit}>
     <label style={matchLabel}>1. Sport</label>
     <div className="form-group">
     <select style={stdInput} id="sport" ref={(sport) => this.sport = sport}>
     <option disabled value>Sport</option>
     <option value="Tennis">Tennis</option>
     <option value="Badminton">Badminton</option>
     <option value="Basketball">Basketball</option>
     <option value="Soccer">Soccer</option>
     <option value="Softball">Softball</option>
     </select>

     </div>

     <label htmlFor="example-datetime-local-input" className="col-2 col-form-label">Date and time</label>
       <input className="form-control" type="datetime-local" value="2011-08-19T13:45:00" id="example-datetime-local-input"
       onChange={this.handleChange}/>
<br/>
      <div>
     <label style={checkboxLabel}>3. Match Start Time </label>
     <TimePicker  onChange={this.handleTimeChange}
     value={this.state.time}
     start="6:00" end="23:30"/>
     </div>

     <br/>
     <Maps callbackFromParent={this.myCallback}/>
     <br/>

     <label style={matchLabel}> 4. Preferred Opponent Skill Level</label>

     <CheckboxGroup
        name="preferred opponent skill level"
        value={this.state.sports}
        onChange={this.sportsChanged.bind(this)}>
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
   <Tournament />


   <div style={divStyle}>

   <h2 style={headerStyle2}> How did the match go? </h2>

   <label> <img className="img-circle avatar" src="http://placehold.it/48x48" alt=""/> You <input style={horInput} className="match-report-user" type="number"
   onChange={this.handleChangeUser}/></label>
   to
   <label> <input style={horInput} className="match-report-guest" type="number"
   onChange={this.handleChangeGuest}/> Your Guest <img className="img-circle avatar" src="http://placehold.it/48x48" alt=""/></label>
   <br/>
    <button type="submit" className="btn btn-primary">Submit the Result</button>
   </div>

   <h2 style={h2}> Invite to Match demo </h2>
   <FinalFriendsComp products={PRODUCTS}/>

</div>


)
}
}

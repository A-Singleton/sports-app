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

export default class Mockups extends Component{

render(){
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

<h3> Update Profile Picture </h3>
<ImageUpload />

<br />

<li><Link to="/protected/matchFeed">Click here to see the Match Feed</Link></li>
      <Route path="/protected/matchFeed" component={matchFeed}/>
<div>
</div>
<Router>
<div>
     </div>
     </Router>

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

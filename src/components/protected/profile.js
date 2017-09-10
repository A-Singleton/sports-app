import React, { Component } from 'react'
import { getProfileInfo, getKeyStats } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/helpers/auth.js'
import { firebaseAuth } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'


//1. Add error handling to fb queries
//2. Component for scheduled matches
//3. Component for recent activity
export default class profile extends Component {

  componentDidMount(){
    firebaseAuth().onAuthStateChanged(function(user) {
if (user) {
  // User is signed in.
  const profileInfo = getProfileInfo(user)
  const statInfo = getKeyStats(user)

  //set consts to state, pass as props to rendering comps
} else {
  // No user is signed in.
}
})
}

  render () {

    const profileStyle = {
      border: '1px solid #000',
      padding: '20px'
    }

    const profileText = {
      margin: '0px',
      marginLeft: '250px'
    }

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
    }

return (
<div className="profile-page">
  <div className="profile" style={profileStyle}>
   <div className="pull-left image">
    <img className="img-square avatar" src="http://placehold.it/200x200" alt=""/>
   </div>
   <div className="pull-right">
    <h3><strong> Key Stats: </strong></h3>
    <h4> Trophies Won: 2 </h4>
    <h4> Games played: 86 </h4>
    <h4> Reputation: 99% </h4>
    <h4> Member since: August 3, 2017 </h4>
    <h5 className="text-muted time">See Full Stats</h5>
   </div>
   <div className="title h5" style={profileText}>
    <h3><strong> Jimbo Neutron </strong> <img className="img-square avatar" src="http://placehold.it/48x38" alt=""/></h3>
    <h4> Springfield, IN USA </h4>
    <h4> Sports: </h4>
    <h4> Tennis, Squash </h4>
    <h4> About Me: </h4>
    <h5> I am a competitive racket player, watch out! </h5>
   </div>
  </div>
  <div className="pull-left activity-feed">
  <h3 style={headerStyle3}><strong> Recent Activity </strong></h3>
  <h4> Jimbo won a Tennis Match, something to something </h4>
  <h4> Jimbo creted a Tennis Match, for October 1st </h4>
  </div>
  <div className="pull-right scheduled-matches">
  <h3 style={headerStyle3}><strong> Scheduled Matches </strong></h3>
  <h4> Tennis: 10-3-2017 at 11:00am </h4>
  <h4> Jimbo creted a Tennis Match, for October 1st </h4>
  </div>
</div>
)
}
}

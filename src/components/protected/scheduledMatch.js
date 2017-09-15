import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import { firebaseAuth } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'
//import ChatRoom from './ChatRoom'
//import ChatButton from './ChatButton'
//import { removeMatchBackend, joinMatch } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/helpers/auth.js'

export default class ScheduledMatch extends Component {

  constructor(props){
    super(props)
    this.state = {
      joined: false
      }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  componentWillMount(nextProps) {
    console.log('Mounted last')
  }

  render(){
    console.log('entered match Render')
    console.log('this.props')
    console.log(this.props.match)
  //  const user = firebaseAuth().currentUser.uid
    let button = null

    return(
      <div className="col-sm-6">
        <div className="panel panel-white post panel-shadow">
          <div className="post-heading">
            <div className="pull-left image">
              <img className="img-circle avatar" src="https://firebasestorage.googleapis.com/v0/b/add-users-to-app.appspot.com/o/profilePics%2FClassic_Singleton.png?alt=media&token=cacccb2e-3200-4dba-94b9-1d71ec491cd9" height="48" width="48" alt=""/>
            </div>
            <div className="pull-left meta">
              <div className="title h5">
              <h4> <Link to={`/protected/profileIndex/${this.props.match.creator}`}>This Users Test Link</Link> </h4>
               <h4>  <strong> Host: {this.props.match.creatorName} </strong>  </h4>
               <br/>
              </div>
              <h5> Tomorrow, 5:00 PM </h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 post-description">
          <br/>
            <h3>  {this.props.match.sport} </h3>
            <br/>
            <h3> Level: {this.props.match.skill} </h3>
            <br/>
            <h3> Date: {this.props.match.date} </h3>
            <br/>
            <h3> Players: {this.props.match.players.length} </h3>
            <br/>
            </div>
            <div className="actions">
        </div>
      </div>
    )
  }
}

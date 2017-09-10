import React, { Component } from 'react'
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
              <img className="img-circle avatar" src="http://placehold.it/48x48" alt=""/>
            </div>
            <div className="pull-left meta">
              <div className="title h5">
               <h4>  <strong> {this.props.match.creatorName} </strong> made a Match </h4>
               <br/>
              </div>
              <h6 className="text-muted time">An hour ago</h6>
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

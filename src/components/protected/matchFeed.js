import React, { Component } from 'react'
import MatchRender from './MatchRender'
import {getScheduledMatches} from 'C:/Users/Duwan_000/Documents/GitHub/react-router-firebase-auth/src/helpers/auth.js'

export default class matchFeed extends Component {

  constructor(props){
    super(props)
    this.state = {
        allMatches: [],
        User: ''
    }
  }

componentDidMount(){
  //const user = firebaseAuth().currentUser
  const allMatches = getScheduledMatches()
  console.log('allMatches')
  console.log(allMatches)
    this.setState({ allMatches: allMatches})
    console.log('state allMatches')
    console.log(this.state.allMatches)
}

  render(){

    console.log('render allMatches')
    console.log(this.state.allMatches)
      // var stateVar = this.state.allMatches
      // console.log('render stateVar')
      // console.log(stateVar)
      var posts = this.state.allMatches.map((match, i) => {
    //var posts = stateVar.map((match, i) => {
        return <MatchRender key={match.id} match={match} />
   })
    return(
       <div>  Local Matches
                { posts }
          </div>
)}
}

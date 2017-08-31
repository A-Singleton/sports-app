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
    console.log('allMatches')
    console.log(allMatches)
}

  render(){
      const posts = this.state.allMatches.map((match, i) => {
        return <MatchRender key={match.id} match={match} />
   })
    return(
       <div>  Local Matches
                { posts }
          </div>
)}
}

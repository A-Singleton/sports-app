import React, { Component } from 'react'
import MatchRender from './matchRender'
import {getScheduledMatches} from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/helpers/auth.js'
import MatchPosts from './MatchPosts'

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
  const fbMatches = getScheduledMatches()
  console.log('allMatches')
  console.log(fbMatches)
    this.setState({ allMatches: fbMatches})
    // console.log('state allMatches')
    // console.log(this.state.allMatches)
}

  render(){

    console.log('render allMatches')
    console.log(this.state.allMatches)
      // var stateVar = this.state.allMatches
      // console.log('render stateVar')
      // console.log(stateVar)
  //     var posts = this.state.allMatches.map((match, i) => {
  //   //var posts = stateVar.map((match, i) => {
  //       return <MatchRender key={match.id} match={match} />
  //  })
  //    { posts }

    return(
     <div>
       <h4> Local Matches </h4>
       <MatchPosts matches={this.state.allMatches}/>
     </div>
)}
}

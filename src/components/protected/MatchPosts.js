import React, { Component } from 'react'
import MatchRender from './matchRender'

export default class Messages extends Component{

constructor(props){
  super(props)
  this.state = { matches: []}
}


componentWillReceiveProps(nextProps) {
  console.log("Comp recieved props")
  if (nextProps.matches !== this.props.matches) {
    this.setState({ matches: nextProps.matches });
  }
}

  render() {
    console.log("this.state.matches")
    console.log(this.state.matches)
    console.log('this.props.matches')
    console.log(this.props.matches)

    var keys = Object.keys(this.props.matches)
    console.log(keys)
    //
    // for (var i =0; i < keys.length; i++) {
    //   console.log("For loop")
    //   console.log(this.props.matches[0])
    //
    // }
//const matches = this.props.matches
    var theMatches = this.props.matches.map((match, i) => {
  //  var theMatches = this.state.matches.map((match, i) => {
    //  console.log(message[0])
      console.log('match')
      console.log(i)
       console.log(match)
      return(
        <MatchRender
         key={match.id}
         match={match}
        />
      )
    })

    return(
      <div>
      { theMatches }
      </div>
    )
  }
}

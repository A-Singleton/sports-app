import React, { Component } from 'react'
import MatchRender from './matchRender'

export default class Messages extends Component{

constructor(props){
  super(props)
  this.state = { matches: []}
}


componentWillReceiveProps(nextProps) {
  console.log("Comp recieved props")
//  if (nextProps.matches !== this.props.matches) {
    this.setState({ matches: nextProps.matches });
//  }
}

  render() {
    console.log("this.state.matches")
    console.log(this.state.matches)
    console.log('this.props.matches')
    console.log(this.props.matches)

    var keys = Object.keys(this.props.matches)
    console.log(keys)

    var theMatches = this.props.matches.map((match, i) => {

      console.log('match Posts')
      console.log(i)
       console.log(match)

      return(
        <MatchRender
         key={match.id}
         match={match}
         friends={this.props.friends}
         userName={this.props.userName}
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

import React, { Component } from 'react'
import Profile from './profile'

export default class profileIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      Id : ''
    }
  }

  render () {
    console.log('profileIndex')
    console.log(this.props.match.params.value)
    return(
      <div> <Profile userID={this.props.match.params.value}/> </div>
    )
  }
}

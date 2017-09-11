import React, { Component } from 'react'
import Profile from './profile'

export default class profileIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      Id : ''
    }
  }
// this.props.id 
  render () {
    console.log('profileIndex')
    return(
      <div> <Profile /> </div>
    )
  }
}

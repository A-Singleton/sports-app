import React, { Component } from 'react'
import Profile from './profile'


//TODO: Cut out this middleman

export default class profileIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      Id : null
    }
  }

  componentDidMount() {
  console.log("Did mount")
    this.setState({ Id: this.props.match.params.value})
  }

  componentWillReceiveProps(nextProps){
    console.log("Recieve Props")
    console.log(nextProps)
      console.log(nextProps.match.params.value)
    this.setState({ Id: nextProps.match.params.value})
  }

  render () {
    console.log('profileIndex')
    console.log(this.props.match)
    console.log(this.props.match.params.value)
    console.log(this.state.Id)
    return(
      <div> <Profile userID={this.state.Id}/> </div>
    )
  }
}

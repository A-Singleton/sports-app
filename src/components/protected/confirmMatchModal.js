import React, { Component } from 'react'
import RepReport from './repReport'
import PostRenderReport from './postRenderReport'
import AllRepReports from './allRepReports'

export default class ModalRender extends Component {
  constructor(props){
    super(props)
    this.state = {
      step: 1
    }
  }

nextStep = (e) => {
  this.setState({ step : this.state.step + 1 })
}

  render () {

var rendering = ''

    this.state.step === 1 ? rendering = <AllRepReports match={this.props.players} nextStep={this.nextStep}/> : rendering = <PostRenderReport matches={this.props.players}/>

  console.log(this.props.players)

    return(
      <div>
      {rendering}
      </div>
    )
  }
}

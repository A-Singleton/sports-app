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

  // case 3:
  //   return <Confirmation />
  // case 4:
  //   return <Success />

nextStep = (e) => {
  this.setState({ step : this.state.step + 1 })
}

  render () {

var rendering = ''

    this.state.step === 1 ? rendering = <RepReport nextStep={this.nextStep}/> : rendering = <PostRenderReport />
  // var rendering =  switch (this.state.step) {
  //         case 1:
  //           return <RepReport />
  //         case 2:
  //           return <PostRenderReport />
  //         }
  //{ rendering }
  console.log(this.props.players)

    return(
      <div>
      <AllRepReports match={this.props.players}/>
      </div>
    )
  }
}

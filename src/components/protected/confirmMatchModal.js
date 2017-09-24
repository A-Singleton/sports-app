import React, { Component } from 'react'
import RepReport from './repReport'
import PostRenderReport from './postRenderReport'

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

  render () {
    return(
      <div>

      switch (this.state.step) {
      			case 1:
      				return <RepReport />
      			case 2:
      				return <PostRenderReport />

      </div>
    )
  }
}

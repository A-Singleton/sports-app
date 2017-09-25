import React, { Component } from 'react'
var ProgressBar = require('react-progressbar.js')
var Line = ProgressBar.Line;

export default class animatedBar extends Component {
  constructor(){
    super()
  this.state = {
    progress: 0.8
  }
}

render() {
  var options = {
            strokeWidth: 10
        };

  var containerStyle = {
              width: '200px',
              height: '200px'
          };

  return(
    <Line
    progress={this.state.progress}
    text={'test'}
    options={options}
    initialAnimate={true}
    containerStyle={containerStyle}
    containerClassName={'.progressbar'} />
)
}
}

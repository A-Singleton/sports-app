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
            strokeWidth: 8,
            textAlign: 'center',
            display:  'inlineBlock',
        };

  var containerStyle = {
              // width: '200px',
              // height: '200px',
              // textAlign: 'center',
              // display:  'inlineBlock',
          };

      //    text={'test'}

  return(
    <Line
    progress={this.state.progress}
    options={options}
    initialAnimate={true}
    containerStyle={containerStyle}
    containerClassName={'.progressbar'} />
)
}
}

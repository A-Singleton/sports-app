import React, { Component } from 'react'

export default class Thumbnail extends Component {

  render () {

    const horInput = {
      padding: "2px",
      width: '40px',
      margin: "10px",
    }

    return(
      <div>
      <label> <img className="img-circle avatar" src="http://placehold.it/48x48" alt=""/> You </label>
      </div>
    )
  }
}

import React, { Component } from 'react'
import PreSearch from './protected/preSearch'

export default class Home extends Component {
  render () {
    return (
      <div>
        Welcome to ProvaSport! Join the Club!
        <PreSearch />
      </div>
    )
  }
}

import React, { Component } from 'react'
//var ProductTable = React.createClass({

export default class FriendSearcher extends Component{
constructor(props){
  super(props)
  this.handleChange = this.handleChange.bind(this)
}
//var SearchBar = React.createClass({

  handleChange() {
    this.props.onUserInput(
      this.refs.filterTextInput.value,
      this.refs.inStockOnlyInput.checked
    )
  }

  render() {
    return (
      <form>
      <h4> Invite Your Friends </h4>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    )
  }
}

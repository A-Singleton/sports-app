import React, { Component } from 'react'

export default class FriendSearcher extends Component{
constructor(props){
  super(props)
  this.handleChange = this.handleChange.bind(this)
}

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
          Show only friends that play this sport
        </p>
      </form>
    )
  }
}

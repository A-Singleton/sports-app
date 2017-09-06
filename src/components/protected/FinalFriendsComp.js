import React, { Component } from 'react'
import FriendSearcher from './FriendSearcher'
import FilterLogic from './FilterLogic'
  //var ProductTable = React.createClass({

export default class FinalFriendsComp extends Component{

constructor(props){
  super(props)
  this.state ={
    filterText: '',
    inStockOnly: false
  }
  this.handleUserInput = this.handleUserInput.bind(this)
}
  // getInitialState() {
  //   return {
  //     filterText: '',
  //     inStockOnly: false
  //   }
  // }

  handleUserInput(filterText, inStockOnly) {
    this.setState({
      filterText: filterText,
      inStockOnly: inStockOnly
    })
  }

  render() {
    return (
      <div>
        <FriendSearcher
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onUserInput={this.handleUserInput}
        />
        <FilterLogic
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    )
  }
}

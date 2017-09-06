import React, { Component } from 'react'
import FriendCategoryRow from './FriendCategoryRow'
import FriendRowInfo from './FriendRowInfo'

export default class FilterLogic extends Component{

  render() {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function(product) {
      if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<FriendCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<FriendRowInfo product={product} key={product.name} />);
      lastCategory = product.category;
    }.bind(this));

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

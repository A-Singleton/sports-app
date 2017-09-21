import React, { Component } from 'react'

export default class JoinGrid extends Component {


  renderPerson(person, index) {
    return (
      <tr key={index}>
        <td>{person.name}</td>
        <td>{person.address}</td>
        <td>{person.age}</td>
      </tr>
    )
  }

  render () {
    return(
      <div>

      <Table striped condensed hover>
  <thead>
    <tr>
      <th></th>
      <th>Name</th>
      <th>Address</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    {personArray.map(this.renderPerson)}
  </tbody>
</Table>

      </div>
    )
  }
}

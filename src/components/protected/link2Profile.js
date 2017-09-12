import React, { Component } from 'react'
import { Route, Router, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import ProfileIndex from './profileIndex'

export default class link2Profile extends Component {

  render () {
    console.log(this.props)
    var props = this.props
    const ThisProfilePage = (props) => {
      console.log(props)
          return (
            // <ProductPage
            //   toggleSidebarOn={this.toggleSidebarOn.bind(this)}
            //   {...props}
            // />

            <ProfileIndex
              id={this.props.bind(this)}
              {...props}
            />
          );
        }

    return(
      <div> blankComp

      <Link to={`/protected/profileIndex/${user}`}>This Users Profile</Link>

        <div>
          <Switch>
            <Route path="protected/profile" render={ThisProfilePage} />
            <Route render={() => <h3>No Match</h3>}/>
          </Switch>
        </div>

      </div>
    )
  }
}

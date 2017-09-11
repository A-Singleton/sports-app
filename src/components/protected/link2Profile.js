import React, { Component } from 'react'

export default class link2Profile extends Component {

  render () {

    const ThisProfilePage = (props) => {
          return (
            // <ProductPage
            //   toggleSidebarOn={this.toggleSidebarOn.bind(this)}
            //   {...props}
            // />

            <ProfileIndex
              id={this.id.bind(this)}
              {...props}
            />
          );
        }

    return(
      <div> blankComp

      <Router>
        <div>
          <Switch>
            <Route exact path="/profile" render={ThisProfilePage} />
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>

      </div>
    )
  }
}

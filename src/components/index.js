import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import Dashboard from './protected/Dashboard'
import ChatButton from './protected/ChatButton'
import MatchFeed from './protected/matchFeed'
import ProfileIndex from './protected/profileIndex'
import PostRenderReport from './protected/postRenderReport'
import RepReport from './protected/repReport'
import EditProfile from './protected/editProfile'
import MakeMatch from './protected/makeMatch'

import { logout } from '../helpers/auth'
import { firebaseAuth } from '../config/constants'


const PrivateRoute = ({ component, authed, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return authed ? (
        renderMergedProps(component, routeProps, rest)
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: routeProps.location }
        }}/>
      );
    }}/>
  );
};


// function PrivateRoute ({component: Component, authed, ...rest}) {
//   return (
//     <Route
//       {...rest}
//       render={(props) => authed === true
//         ? <Component {...props} />
//         : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
//     />
//   )
// }

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/dashboard' />}
    />
  )
}
/// New for rendering props
const renderMergedProps = (component, ...rest) => {
const finalProps = Object.assign({}, ...rest);
return (
  React.createElement(component, finalProps)
);
}

const PropsRoute = ({ component, ...rest }) => {
return (
  <Route {...rest} render={routeProps => {
    return renderMergedProps(component, routeProps, rest);
  }}/>
);
}
///////////////

export default class App extends Component {
  state = {
    authed: false,
    loading: true,
  }
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
  render() {

    const profImage = {
    //  margin: '0px',
      marginTop: '10px',
      marginRight: '4px'
    }

    const myRating = {
    //  rating: 7
    }

//   console.log(this.props.stuffMine)

    return this.state.loading === true ? <h1>Loading</h1> : (
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-default navbar-static-top">
            <div className="container">
              <div className="navbar-header">
                <Link to="/" className="navbar-brand">ProvaSport</Link>
              </div>
              <ul className="nav navbar-nav pull-right">
                <li>
                 <img style={profImage} className="img-square avatar"  id="imgBar" src="" alt="" height="30" width="30"/>
                </li>
                <li>
                <Link to="/dashboard" className="navbar-brand"> Profile</Link>
                </li>
                <li>
                <Link to="/matchFeed" className="navbar-brand">Match Feed</Link>
                </li>
                <li>
                  {this.state.authed
                    ? <button
                        style={{border: 'none', background: 'transparent'}}
                        onClick={() => {
                          logout()
                        }}
                        className="navbar-brand">Logout</button>
                    : <span>
                        <Link to="/login" className="navbar-brand">Login</Link>
                        <Link to="/register" className="navbar-brand">Register</Link>
                      </span>}
                </li>
              </ul>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <Switch>
                <Route path='/' exact component={Home} />
                <PublicRoute authed={this.state.authed} path='/login' component={Login} />
                <PublicRoute authed={this.state.authed} path='/register' component={Register} />
                <PrivateRoute authed={this.state.authed} path='/dashboard' component={Dashboard} />
                <PrivateRoute authed={this.state.authed} path='/matchFeed' component={MatchFeed} />
                <PrivateRoute authed={this.state.authed} path='/protected/profileIndex/:value' component={ProfileIndex} />
                <PrivateRoute authed={this.state.authed} path='/postRenderReport' component={PostRenderReport} stuff={myRating}/>
                <PrivateRoute authed={this.state.authed} path='/repReport' component={RepReport} stuff={myRating}/>
                <PrivateRoute authed={this.state.authed} path='/protected/editProfile' component={EditProfile} />
                <PrivateRoute authed={this.state.authed} path='/makeFeed' component={MakeMatch} />
                <Route render={() => <h3>No Match</h3>} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

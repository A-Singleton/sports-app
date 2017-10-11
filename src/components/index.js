import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import {HashRouter as Router} from 'react-router-dom'
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
import Profile from './protected/profile'

import { logout } from '../helpers/auth'
import { firebaseAuth, firebaseStorageRef } from '../config/constants'


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


      // Create a reference to the file we want to download
    //var starsRef = firebaseStorageRef.child('profilePics/castling kids.png');
    var starsRef = firebaseStorageRef.child(`profilePics/${user.uid}`)

    // Get the download URL
    starsRef.getDownloadURL().then(function(url) {
      // Insert url into an <img> tag to "download"
    //  var img = document.getElementById('myimg');
      var imgBar = document.getElementById('imgBar');
      imgBar.src = url
    //  img.src = url;
    }).catch(function(error) {

      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/object_not_found':
          // File doesn't exist
          break;

        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;

        case 'storage/canceled':
          // User canceled the upload
          break;

        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break;
      }
    });



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
// <li>
// <Link to="/matchFeed" className="navbar-brand">Match Feed</Link>
// </li>
    //  <BrowserRouter>

    return this.state.loading === true ? <h1>Loading</h1> : (
    <Router>
        <div>
          <nav className="navbar navbar-default navbar-static-top">
            <div className="container">
              <div className="navbar-header">
                <Link to="/" className="navbar-brand">ProvaSport</Link>
              </div>
               <ul className="nav navbar-nav pull-right">
               <li>
               <Link to="/dashboard" className="navbar-brand"> Search Matches</Link>
               </li>
               <li>
               <Link to="/makeMatch" className="navbar-brand"> Make a Match</Link>
              </li>
                <li>
                 <img style={profImage} className="img-square avatar"  id="imgBar" src="" alt="" height="30" width="30"/>
                </li>
                <li>
                <Link to="/profile" className="navbar-brand"> Profile</Link>
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
                <PrivateRoute authed={this.state.authed} path='/makeMatch' component={MakeMatch} />
                <PrivateRoute authed={this.state.authed} path='/profile' component={Profile} />
                <Route render={() => <h3>No Match</h3>} />
              </Switch>
            </div>
          </div>
        </div>
    </Router>
    );
  }
}

  //  </BrowserRouter>

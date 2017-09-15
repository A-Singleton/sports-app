import React, { Component } from 'react'
import { ref, firebaseAuth, firebaseStorageRef, taskEvent, db } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'
import GetScheduledMatches from './getScheduledMatches'

export default class scheduledMatches extends Component {


     constructor(props, context){
      super(props, context)
      //  this.changeList = this.changeList.bind(this)
      this.state = {
          keys: []
         }
        }

        componentWillReceiveProps(nextProps){
        //const user = firebaseAuth().currentUser
        console.log("nextProps")
        console.log(nextProps)
        //db.ref(`users/${user.uid}/account-info/joinedGames`).on('value', (snapshot)=> {
        db.ref(`users/${nextProps.user}/account-info/joinedGames`).on('value', (snapshot)=> {


        var matches = snapshot.val()
        console.log(matches)
        var keys = Object.keys(matches)
        console.log(keys)
        this.setState({keys})
        })
        }


componentDidMount(){
//const user = firebaseAuth().currentUser
console.log("this.props.user")
console.log(this.props.user)
//db.ref(`users/${user.uid}/account-info/joinedGames`).on('value', (snapshot)=> {
db.ref(`users/${this.props.user}/account-info/joinedGames`).on('value', (snapshot)=> {


var matches = snapshot.val()
console.log(matches)
var keys = Object.keys(matches)
console.log(keys)
this.setState({keys})
})
}

render(){
  console.log('keys')
  console.log(this.state.keys)
  const scheduledMatches = ''
if (this.state.keys) {
  //  const scheduledMatches = this.state.keys.map((fbKey, i) => {
    console.log('entered key loop')
    //console.log(fbKey)
    return(
    <GetScheduledMatches
    keyCodes={this.state.keys}/>
  )
}
//)}


  return(
    <div>
    { scheduledMatches }
    </div>
  )
}

}

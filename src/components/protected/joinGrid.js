import React, { Component } from 'react'
import { Table, Button } from 'react-bootstrap'
import { firebaseAuth } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'
import { joinMatch, joinMatchAway } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/helpers/auth.js'

export default class JoinGrid extends Component {
  constructor(props){
    super(props)
    this.state = {
      max_len: 1,
      homeSpace: true,
      awaySpace: true,
      personArray: []
    }
  }

  componentDidMount() {
    var max_len = 1
    console.log('Did Mount')
    console.log(this.props.sport)
    console.log((this.props.sport === "Soccer - 5 a Side" || "Basketball" ) )

    // if (this.props.sport === "Squash - Doubles" ||
    //                          "Tennis - Doubles" || "Badminton - Doubles")
    //    { this.setState({max_len: 2}) }


    //else
        if (this.props.sport === "Soccer - 5 a Side" || "Basketball" ) {
         console.log("enters basketball")
             max_len = 5 }
             //let max_length = 5

       console.log(this.props.players)
       console.log(this.props.players2)
       //console.log(this.props.players[1].joinerName)

       let players = this.props.players
       let players2 = this.props.players2
       if (typeof  players2 === "undefined") {
           players2 = [players2]
        }

       console.log(players2)
       var personArrayCopy = this.state.personArray
       var team_1 = ''
       var team_2 = ''
       var team_1_space = false
       var team_2_space = false

      // for (var i =0; i < this.state.max_len; i++) {
      for (var i =0; i < max_len; i++) {
         if (typeof  players[i] === "undefined") {
             team_1 = " Slot Open "
             team_1_space = true
          }
         else{
            team_1 = players[i].joinerName
         // console.log("test_arr_1")
         // console.log(test_arr_1[i])
         }

         if (typeof  players2[i] === "undefined") {
             team_2 = " Slot Open "
             team_2_space = true
          }
         else{
            team_2 = players2[i].joinerName
         // console.log("test_arr_1")
         // console.log(test_arr_1[i])
         }

         var nextRow = {
           team_1,
           team_2
         }
         // console.log("test_arr_2")
         // console.log(test_arr_2[i])

         personArrayCopy.push(nextRow)
       }
       this.setState({personArray: personArrayCopy,
                        max_len,
                        homeSpace: team_1_space,
                        awaySpace: team_2_space })
     }
  //   const test_arr_1 = ['kid']
  //   const test_arr_2 = ['looking', 'at', 'you']
  //   //  download players, players2 vectors
  // //  var personArray = []
  //   for (var i =0; i < test_arr_2.length; i++) {
  //     if (typeof  test_arr_1[i] === "undefined") { console.log("Correctly")}
  //     else{
  //     console.log("test_arr_1")
  //     console.log(test_arr_1[i])
  //   }
  //     console.log("test_arr_2")
  //     console.log(test_arr_2[i])
  //   }
//  }

  componentWillReceiveProps(nextProps) {

     console.log(nextProps)
    // console.log(nextProps.players[1].joinerName)
    //
    // let players = []
    // let players2 = nextProps.players[1].joinerName
    // var personArrayCopy = this.state.personArray
    // var team_1 = ''
    // var team_2 = ''
    //
    // for (var i =0; i < this.state.max_len; i++) {
    //   if (typeof  players[i] === "undefined") {
    //       team_1 = " Slot Open "
    //    }
    //   else{
    //      team_1 = players[i]
    //   // console.log("test_arr_1")
    //   // console.log(test_arr_1[i])
    //   }
    //
    //   if (typeof  players2[i] === "undefined") {
    //       team_2 = " Slot Open "
    //    }
    //   else{
    //      team_2 = players2[i]
    //   // console.log("test_arr_1")
    //   // console.log(test_arr_1[i])
    //   }
    //
    //   var nextRow = {
    //     team_1,
    //     team_2
    //   }
    //   // console.log("test_arr_2")
    //   // console.log(test_arr_2[i])
    //
    //   personArrayCopy.push(nextRow)
    // }
    // this.setState({personArray: personArrayCopy})




    //
    //
    // if (this.props.sport === "Squash - Doubles" ||
    //                          "Tennis - Doubles" || "Badminton - Doubles")
    //    { this.setState({max_len: 2}) }
    //
    //    else if (this.props.sport === "Soccer - 5 a Side" || "Basketball" ) {
    //      console.log("enters basketball")
    //          this.setState({max_len: 5}) }
    //          let max_length = 5
    //
    //    console.log(this.props.players)
    //    console.log(this.props.players[1].joinerName)
    //
    //    let players = []
    //    let players2 = [this.props.players[1].joinerName]
    //    console.log(players2)
    //    var personArrayCopy = this.state.personArray
    //    var team_1 = ''
    //    var team_2 = ''
    //
    //   // for (var i =0; i < this.state.max_len; i++) {
    //   for (var i =0; i < max_length; i++) {
    //      if (typeof  players[i] === "undefined") {
    //          team_1 = " Slot Open "
    //       }
    //      else{
    //         team_1 = players[i]
    //      // console.log("test_arr_1")
    //      // console.log(test_arr_1[i])
    //      }
    //
    //      if (typeof  players2[i] === "undefined") {
    //          team_2 = " Slot Open "
    //       }
    //      else{
    //         team_2 = players2[i]
    //      // console.log("test_arr_1")
    //      // console.log(test_arr_1[i])
    //      }
    //
    //      var nextRow = {
    //        team_1,
    //        team_2
    //      }
    //      // console.log("test_arr_2")
    //      // console.log(test_arr_2[i])
    //
    //      personArrayCopy.push(nextRow)
    //    }
    //    this.setState({personArray: personArrayCopy})
    //  }


  }


//
//
// else if (this.props.match.sport === "Soccer - 11 a Side" || "Softball"
//                                                          || "Quidditch") {
//     this.setState({max_len: 11})
// }

// var grid_lens = [this.props.players.length, this.props.players.length2];
// var grid_len = Math.max.apply(null, grid_lens)

  joinHome = (event) => {
    event.preventDefault()
    const user = firebaseAuth().currentUser.uid
    const players = this.props.players
    const matchID = this.props.matchID

    joinMatch(user, players, matchID, this.props.userName, this.props.idStack)
    this.setState({joined: true})
  }

  joinAway = (event) => {
    event.preventDefault()
    const user = firebaseAuth().currentUser.uid
    const awayPlayers = this.props.players2
    const matchID = this.props.matchID
    console.log("Join Away")
    joinMatchAway(user, awayPlayers, matchID, this.props.userName, this.props.idStack)
    this.setState({joined: true})
  }

  renderPerson(row, index) {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{row.team_1}</td>
        <td>{row.team_2}</td>
      </tr>
    )
  }

  render () {
    console.log(this.props.sport)
    console.log(this.state.max_len)

// TODO : Remove Buttons if already member of match
    let team_1_Join = null
    if (this.state.homeSpace) {
      team_1_Join = <Button bsStyle="success" onClick={this.joinHome}>
      Join Team 1</Button> }

    let team_2_Join = null
    if (this.state.awaySpace) {
      team_2_Join = <Button bsStyle="success" onClick={this.joinAway}>
      Join Team 2</Button> }

    return(
      <div>
      { team_1_Join } { team_2_Join }
      <Table striped condensed hover>
  <thead>
    <tr>
      <th></th>
      <th>Home (Team 1)</th>
      <th>Away (Team 2)</th>
    </tr>
  </thead>
  <tbody>
    {this.state.personArray.map(this.renderPerson)}
  </tbody>
</Table>
      </div>
    )
  }
}

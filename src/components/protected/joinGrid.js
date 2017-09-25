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

        let players3 = this.props.players3
        if (typeof  players3 === "undefined") {
            players3 = [players3]
         }

         let players4 = this.props.players4
         if (typeof  players4 === "undefined") {
             players4 = [players4]
          }

       console.log(players2)
       var personArrayCopy = this.state.personArray
       var team_1 = ''
       var team_2 = ''
       var team_3 = ''
       var team_4 = ''
       var team_1_space = false
       var team_2_space = false
       var team_3_space = false
       var team_4_space = false


       if (this.props.sport !== "Golf") {

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



        else {
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

             if (typeof  players3[i] === "undefined") {
                 team_3 = " Slot Open "
                 team_3_space = true
              }
             else{
                team_3 = players3[i].joinerName
             // console.log("test_arr_1")
             // console.log(test_arr_1[i])
             }

             if (typeof  players4[i] === "undefined") {
                 team_4 = " Slot Open "
                 team_4_space = true
              }
             else{
                team_4 = players4[i].joinerName
             // console.log("test_arr_1")
             // console.log(test_arr_1[i])
             }

             var nextRow = {
               team_1,
               team_2,
               team_3,
               team_4
             }
             // console.log("test_arr_2")
             // console.log(test_arr_2[i])

             personArrayCopy.push(nextRow)
           }
           this.setState({personArray: personArrayCopy,
                            max_len,
                            homeSpace: team_1_space,
                            awaySpace: team_2_space,
                            thirdSpace: team_3_space,
                            fourthSpace: team_4_space })
        }
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

  // {(this.props.sport === "Golf") ? <td>{row.team_3}</td> : null}
  // {(this.props.sport === "Golf") ? <td>{row.team_4}</td> : null}

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

      let team_3_Join = null
      if (this.props.sport === "Golf") {
        team_3_Join = <Button bsStyle="success" onClick={this.join3}>
        Join Team 3</Button> }

        let team_4_Join = null
        if (this.props.sport === "Golf") {
          team_4_Join = <Button bsStyle="success" onClick={this.join4}>
          Join Team 4</Button> }

    return(
      <div>
      { team_1_Join } { team_2_Join } { team_3_Join } { team_4_Join }
      <Table striped condensed hover>
  <thead>
    <tr>
      <th></th>
      <th>Home (Team 1)</th>
      <th>Away (Team 2)</th>
      {(this.props.sport === "Golf") ? <th>Team 3</th> : null}
      {(this.props.sport === "Golf") ? <th>Team 4</th> : null}
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

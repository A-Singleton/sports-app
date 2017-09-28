import React, { Component } from 'react'
import { Table, Button, Form,  FormGroup, FormControl, Col,  ControlLabel} from 'react-bootstrap'
import { firebaseAuth } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'
import { joinMatch, joinMatchAway, join3, join4, sportsLength } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/helpers/auth.js'
//import {Button, } from 'react-bootstrap'

export default class JoinGrid extends Component {
  constructor(props){
    super(props)
    this.state = {
      max_len: 1,
      homeSpace: false,
      awaySpace: false,
      thirdSpace: false,
      fourthSpace: false,
      personArray: []
    }
  }

  componentDidMount() {
    //var max_len = 1
    console.log('Did Mount')
    console.log(this.props)
    console.log(this.props.sport)

    let players = this.props.players
    let players2 = this.props.players2
    let players3 = this.props.players3
    let players4 = this.props.players4
    var personArrayCopy = []

    console.log(players)
    console.log(players2)
    console.log(players3)
    console.log(players4)

     if (typeof  players2 === "undefined") {
        console.log("Players 2 undefined")
        //players2 = [players2]
        players2 = [
          {name: undefined , user: undefined}
        ]
      }

      if (typeof  players3 === "undefined") {
        console.log("Players 3 undefined")
        players3 = [
          {name: undefined , user: undefined}
        ]
      }

      if (typeof  players4 === "undefined") {
        console.log("Players 4 undefined")
        //players4 = [players4]
        players4 = [
          {name: undefined , user: undefined}
        ]
      }

       console.log(this.props.players)
       console.log(players3)
       console.log(players4)

       var max_len = sportsLength(this.props.sport, this.props.maxPlayers)

       if (this.props.sport !== "Golf") {
      //  var team_1_space = false
      //  var team_2_space = false
       //
      //  for (var i =0; i < max_len; i++) {
      //        var team_1 =  { name: players[i].name, user: players[i].user }
      //        var team_2 =  { name: players2[i].name, user: players2[i].user }
       //
      //        if (typeof players[i].user === "undefined") {
      //          console.log("Slot 1 Open")
      //          team_1.name = "Slot Open"
      //          team_1_space = true
      //        }
       //
      //        if (typeof players2[i].user === "undefined") {
      //          console.log("Slot 2 Open")
      //          team_2.name = "Slot Open"
      //          team_2_space = true
      //        }
       //
      //        var nextRow = {
      //          team_1,
      //          team_2
      //        }
       //
      //        personArrayCopy.push(nextRow)
      //      }
       //
      //      console.log(personArrayCopy)
      //      console.log(team_1_space)
      //      console.log(team_2_space)
       //
      //      this.setState({ personArray: personArrayCopy,
      //                      max_len,
      //                      homeSpace: team_1_space,
      //                      awaySpace: team_2_space })



                var team_1_space = false
                var team_2_space = false

                console.log()

                for (var i =0; i < max_len; i++) {
                      //var team_2 =  { name: players2[i].name, user: players2[i].user }

                      if (typeof players[i] === "undefined") {
                        console.log("Slot 1 Open")
                      var team_1 = { name: "Slot Open", user: undefined }
                      //  team_1.name = "Slot Open"
                        team_1_space = true
                      }

                      else {
                     var team_1 =  { name: players[i].name, user: players[i].user } }

                      if (typeof players2[i] === "undefined") {
                        console.log("Slot 2 Open")
                        var team_2 = { name: "Slot Open", user: undefined }
                      //  team_2.name = "Slot Open"
                        team_2_space = true
                      }
                      else {
                     var team_2 = { name: players2[i].name, user: players2[i].user } }

                      var nextRow = {
                        team_1,
                        team_2
                      }

                      personArrayCopy.push(nextRow)
                    }

                    console.log(personArrayCopy)
                    console.log(team_1_space)
                    console.log(team_2_space)

                    this.setState({ personArray: personArrayCopy,
                                    max_len,
                                    homeSpace: team_1_space,
                                    awaySpace: team_2_space })


                         }

      /////////////// Golf Grid
        else {
          console.log()
          var team_1_space = false
          var team_2_space = false
          var team_3_space = false
          var team_4_space = false

                var team_1 =  { name: players[0].name, user: players[0].user }
                var team_2 =  { name: players2[0].name, user: players2[0].user }
                var team_3 =  { name: players3[0].name, user: players3[0].user }
                var team_4 =  { name: players4[0].name, user: players4[0].user }

                if (typeof players[0].user === "undefined") {
                  console.log("Slot 1 Open")
                  team_1.name = "Slot Open"
                  team_1_space = true
                }

                if (typeof players2[0].user === "undefined") {
                  console.log("Slot 2 Open")
                  team_2.name = "Slot Open"
                  team_2_space = true
                }

                if (typeof players3[0].user === "undefined") {
                  console.log("Slot 3 Open")
                  team_3.name = "Slot Open"
                  team_3_space = true
                }

                if (typeof players4[0].user === "undefined") {
                  console.log("Slot 4 Open")
                  team_4.name = "Slot Open"
                  team_4_space = true
                }

                var nextRow = {
                  team_1,
                  team_2,
                  team_3,
                  team_4
                }
                personArrayCopy.push(nextRow)

              console.log(personArrayCopy)
              console.log(team_1_space)
              console.log(team_2_space)
              console.log(team_3_space)
              console.log(team_4_space)

      this.setState({ personArray: personArrayCopy,
                      max_len,
                      homeSpace: team_1_space,
                      awaySpace: team_2_space,
                      thirdSpace: team_3_space,
                      fourthSpace: team_4_space })
                        }
      }


  componentWillReceiveProps(nextProps) {
     console.log(nextProps)

     let players = nextProps.players
     let players2 = nextProps.players2
     let players3 = nextProps.players3
     let players4 = nextProps.players4
     var personArrayCopy = []

     console.log(players)
     console.log(players2)
     console.log(players3)
     console.log(players4)
     console.log(nextProps.maxPlayers)

     //var max_len = 1
     var max_len = sportsLength(nextProps.sport, nextProps.maxPlayers)
     console.log('Did Mount')
     console.log(nextProps.sport)
    //  console.log((nextProps.sport === "Soccer - 5 a Side" || "Basketball" ) )

    if (typeof  players2 === "undefined") {
       console.log("Players 2 undefined")
       //players2 = [players2]
       players2 = [
         {name: undefined , user: undefined}
       ]
     }

     if (typeof  players3 === "undefined") {
       console.log("Players 3 undefined")
       players3 = [
         {name: undefined , user: undefined}
       ]
     }

     if (typeof  players4 === "undefined") {
       console.log("Players 4 undefined")
       //players4 = [players4]
       players4 = [
         {name: undefined , user: undefined}
       ]
     }

        console.log(nextProps.players)
        console.log(nextProps.players2)
        //console.log(this.props.players[1].joinerName)
        console.log(max_len)

        if (nextProps.sport !== "Golf") {

          var team_1_space = false
          var team_2_space = false

          console.log()

          for (var i =0; i < max_len; i++) {
                //var team_2 =  { name: players2[i].name, user: players2[i].user }

                if (typeof players[i] === "undefined") {
                  console.log("Slot 1 Open")
                var team_1 = { name: "Slot Open", user: undefined }
                //  team_1.name = "Slot Open"
                  team_1_space = true
                }

                else {
               var team_1 =  { name: players[i].name, user: players[i].user } }

                if (typeof players2[i] === "undefined") {
                  console.log("Slot 2 Open")
                  var team_2 = { name: "Slot Open", user: undefined }
                //  team_2.name = "Slot Open"
                  team_2_space = true
                }
                else {
               var team_2 = { name: players2[i].name, user: players2[i].user } }

                var nextRow = {
                  team_1,
                  team_2
                }

                personArrayCopy.push(nextRow)
              }

              console.log(personArrayCopy)
              console.log(team_1_space)
              console.log(team_2_space)

              this.setState({ personArray: personArrayCopy,
                              max_len,
                              homeSpace: team_1_space,
                              awaySpace: team_2_space })
         }

         else {

           var team_1_space = false
           var team_2_space = false
           var team_3_space = false
           var team_4_space = false

         //  for (var i =0; i < max_len; i++) {
                 var team_1 =  { name: players[0].name, user: players[0].user }
                 var team_2 =  { name: players2[0].name, user: players2[0].user }
                 var team_3 =  { name: players3[0].name, user: players3[0].user }
                 var team_4 =  { name: players4[0].name, user: players4[0].user }

                 if (typeof players[0].user === "undefined") {
                   console.log("Slot 1 Open")
                   team_1.name = "Slot Open"
                   team_1_space = true
                 }

                 if (typeof players2[0].user === "undefined") {
                   console.log("Slot 2 Open")
                   team_2.name = "Slot Open"
                   team_2_space = true
                 }

                 if (typeof players3[0].user === "undefined") {
                   console.log("Slot 3 Open")
                   team_3.name = "Slot Open"
                   team_3_space = true
                 }

                 if (typeof players4[0].user === "undefined") {
                   console.log("Slot 4 Open")
                   team_4.name = "Slot Open"
                   team_4_space = true
                 }

                 var nextRow = {
                   team_1,
                   team_2,
                   team_3,
                   team_4
                 }

                 personArrayCopy.push(nextRow)
               //}

               console.log(personArrayCopy)
               console.log(team_1_space)
               console.log(team_2_space)
               console.log(team_3_space)
               console.log(team_4_space)

       this.setState({ personArray: personArrayCopy,
                       max_len,
                       homeSpace: team_1_space,
                       awaySpace: team_2_space,
                       thirdSpace: team_3_space,
                       fourthSpace: team_4_space })
         }
  }

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

  joinTeam3 = (event) => {
    event.preventDefault()
    const user = firebaseAuth().currentUser.uid
    //const awayPlayers = this.props.players2
    const matchID = this.props.matchID
    console.log("Join Third")
    join3(user, matchID, this.props.userName, this.props.idStack)
  }

  joinTeam4 = (event) => {
    event.preventDefault()
    const user = firebaseAuth().currentUser.uid
    //const awayPlayers = this.props.players2
    const matchID = this.props.matchID
    console.log("Join Fourth")
    join4(user, matchID, this.props.userName, this.props.idStack)
  }

  renderPerson(row, index) {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{row.team_1.name}</td>
        <td>{row.team_2.name}</td>
      </tr>
    )
  }

  renderPerson2(row, index) {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{row.team_1.name}</td>
        <td>{row.team_2.name}</td>
        <td>{row.team_3.name}</td>
        <td>{row.team_4.name}</td>
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
      if (this.props.sport === "Golf" && this.state.thirdSpace) {
        team_3_Join = <Button bsStyle="success" onClick={this.joinTeam3}>
        Join Team 3</Button> }

        let team_4_Join = null
        if (this.props.sport === "Golf" && this.state.fourthSpace) {
          team_4_Join = <Button bsStyle="success" onClick={this.joinTeam4}>
          Join Team 4</Button> }

    return(
      <div>
      <Col componentClass={ControlLabel} smOffset={1} sm={1}>
          { team_1_Join }
      </Col>
      <Col componentClass={ControlLabel} smOffset={2} sm={1}>
          { team_2_Join }
      </Col>
      <Col componentClass={ControlLabel} smOffset={2} sm={1}>
          { team_3_Join }
      </Col>
      <Col componentClass={ControlLabel} smOffset={2} sm={1}>
          { team_4_Join }
      </Col>
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
    {(this.props.sport === "Golf") ? this.state.personArray.map(this.renderPerson2)
    : this.state.personArray.map(this.renderPerson)}
  </tbody>
</Table>
      </div>
    )
  }
}

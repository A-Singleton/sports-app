// import React, { Component } from 'react'
//
// export default class blank extends Component {
//
//   render () {
//     return(
//       <div>
//
//       </div>
//     )
//   }
// }

if (this.props.default !== "Default") {
    console.log('Not Default')
    return (this.props.default)
  }

else {

    if (this.props.sport === "Squash - Doubles") {
       console.log("Squash - Doubles")
       return (1)
      }

       else if ((this.props.sport === "Tennis - Doubles") {
         console.log( "Tennis - Doubles")
         return (2)
       }

       else if ((this.props.sport === "Badminton - Doubles") {
         console.log("Badminton - Doubles")
         return (2)
       }

       else if (this.props.sport === "Golf") {
        console.log("Golf")
        return (1)
      }

      else if (this.props.sport === "Soccer - 5 a Side") {
            console.log("Soccer - 5 a Side")
            return (5)
            }

       else if ((this.props.sport ===  "Basketball" ) {
                console.log("enters basketball")
                return (5)
             }

       else if ((this.props.sport === "Quidditch") {
               console.log("Quidditch")
               return (10)
             }

       else if ((this.props.sport === "Soccer - 11 a Side") {
               console.log("Soccer - 11 a Side")
               return (15)
             }

        else {
            return (1)
        }
      }

///////////////

       if (typeof  players2 === "undefined") {
          console.log("Players 2 undefined")
          var players2 = [players2]
        }

        if (typeof  players3 === "undefined") {
          console.log("Players 3 undefined")
          var players3 = [players3]
        }

        if (typeof  players4 === "undefined") {
          console.log("Players 4 undefined")
          var players4 = [players4]
        }



///////////////
var team_1_space = false
var team_2_space = false
var team_3_space = false
var team_4_space = false

for (var i =0; i < max_len; i++) {
      var team_1 =  { name: players[i].name, user: players[i].user }
      var team_2 =  { name: players2[i].name, user: players2[i].user }
      var team_3 =  { name: players3[i].name, user: players3[i].user }
      var team_4 =  { name: players4[i].name, user: players4[i].user }

      if (typeof players[i].user === "undefined") {
        console.log("Slot 1 Open")
        team_1.name = "Slot Open"
        team_1_space = true
      }

      if (typeof players2[i].user === "undefined") {
        console.log("Slot 2 Open")
        team_2.name = "Slot Open"
        team_2_space = true
      }

      if (typeof players3[i].user === "undefined") {
        console.log("Slot 3 Open")
        team_3.name = "Slot Open"
        team_3_space = true
      }

      if (typeof players4[i].user === "undefined") {
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
    }

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




          /////////////// Not Golf
            var team_1_space = false
            var team_2_space = false

            for (var i =0; i < max_len; i++) {
                  var team_1 =  { name: players[i].name, user: players[i].user }
                  var team_2 =  { name: players2[i].name, user: players2[i].user }

                  if (typeof players[i].user === "undefined") {
                    console.log("Slot 1 Open")
                    team_1.name = "Slot Open"
                    team_1_space = true
                  }

                  if (typeof players2[i].user === "undefined") {
                    console.log("Slot 2 Open")
                    team_2.name = "Slot Open"
                    team_2_space = true
                  }

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

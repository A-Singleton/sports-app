import { ref, firebaseAuth, firebaseStorageRef, taskEvent, db } from '../config/constants'

export function auth (email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}

export function resetPassword (email) {
  return firebaseAuth().sendPasswordResetEmail(email)
}

export function registerUser (info, user) {
  console.log(info.JoinTime)
  var JoinTime = info.JoinTime
ref.child(`users/${user.uid}/personal-info`)
.set({
  email: user.email,
  uid: user.uid,
  FirstName: info.FirstName,
  LastName: info.LastName,
  BirthMonth: info.BirthMonth,
  BirthDay: info.BirthDay,
  BirthYear: info.BirthYear,
  Gender: info.Gender,
  JoinTime: JoinTime
})
}

export function saveMatch (newMatch, user) {

  ref.child(`users/${user.uid}/personal-info`).on('value', (snapshot)=> {

    var profile = snapshot.val()
    const f_name = profile.FirstName
    const l_name = profile.LastName
    const name = f_name + " " + l_name

    const this_user = user.uid
    var personPacket = {
    user: this_user,
    name }

    var newMatchKey = ref.child('matches').push().key

      ref.child(`/matches/` + newMatchKey)
      .update({
        creator_first_name: f_name,
        creator_last_name: l_name,
        sport: newMatch.sport,
        gameDate: newMatch.gameDate,
        skill: newMatch.skill,
        matchTime: newMatch.matchTime,
        mapDataAddress: newMatch.mapDataAddress,
        mapDataLat: newMatch.mapDataLat,
        mapDataLng: newMatch.mapDataLng,
        homePlayers: [personPacket],
        creator: user.uid,
        maxPlayers: newMatch.players,
        idStack: [user.uid]
      })

      ref.child(`users/${user.uid}/account-info/joinedGames/`+ newMatchKey)
      .set({ id: 0
      })
      })
}

export function removeMatchBackend(players) {
      //  make query for all children joined games with people joined,
      // run loop to delete the joined game
    for (var i =0; i < players.length; i++){
      console.log(players[i])
      ref.child(`users/${players[i]}/account-info/
                                  joinedGames/${this.props.match.id}`).remove()
  }
    // delete the match from firebase
      ref.child(`matches/${this.props.match.id}/`).remove()
}


export function joinMatch (user, homePlayers, matchID, joinerName, stackID) {

    var personPacket = {
    user,
    name: joinerName }

    homePlayers.push(personPacket)

    stackID.push(user)

    console.log(homePlayers)
    ref.child(`matches/${matchID}/`).update({ homePlayers,
                                              idStack: stackID })

    //Sets ID:0 because can then directly delete match by calling match.id
    ref.child(`users/${user}/account-info/joinedGames/${matchID}`)
    .set({ id: 0 })
}


 export function joinMatchAway(user, awayPlayers, matchID, joinerName, stackID) {
     //players.push(user.uid)
     //const this_user = user
      if (typeof  awayPlayers === "undefined") { awayPlayers = [] }

     var personPacket = {
     user,
     name: joinerName }

     awayPlayers.push(personPacket)

     stackID.push(user)

     console.log(awayPlayers)
     ref.child(`matches/${matchID}/`).update({ awayPlayers,
                                                idStack: stackID    })

     //Sets ID:0 because can then directly delete match by calling match.id
     ref.child(`users/${user}/account-info/joinedGames/${matchID}`)
     .set({ id: 0
     })
 }

export function getScheduledMatches() {

  var allMatches = []
  db.ref(`matches/`).on('value', (snapshot)=> {

  var matches = snapshot.val()
  var keys = Object.keys(matches)

      for (var i =0; i < keys.length; i++) {
        var k = keys[i];
        var skill = matches[k].skill;
        var sport = matches[k].sport;
        var date = matches[k].gameDate;
        var creator_query = matches[k].creator;
        var players = matches[k].players;
        var creator_first_name = matches[k].creator_first_name;
        var creator_last_name = matches[k].creator_last_name;

  var nextMatch = {
    id: k,
    skill: skill,
    sport: sport,
    date:  date,
    players: players,
    creator: creator_query,
    creatorName: creator_first_name + " " + creator_last_name
  }
  allMatches.push(nextMatch)
}
})
return allMatches
}

export function displayMessages(matchKey) {
  var fbMessages = []
  //child_added could be of use here
  ref.child(`messages/${matchKey}/`).on('value', (snapshot)=> {

  const currentMessages = snapshot.val()
   console.log(currentMessages)

  if (currentMessages != null){

  var keys = Object.keys(currentMessages)
  for(var i=0; i < keys.length; i++ ){

   var id = keys[i]
   var message = currentMessages[id].message
   var username = currentMessages[id].username

   var newMessage = {
     id: id,
     message: message,
     username: username
   }
   fbMessages.push(newMessage)
  }
  }

})
 console.log('fbMessages')
   console.log(fbMessages)
  return fbMessages
}


export function submitMessagesBackend(nextMessage, matchkey) {
      ref.child(`messages/${matchkey}/`).push(nextMessage)
}

export function uploadImage(file, user) {
    // Create a root reference
//var storageRef = firebase.storage().ref();
var storageRef = firebaseStorageRef
    // Create the file metadata
var metadata = {
  contentType: 'image/jpeg'
};

// Upload file and metadata to the object 'images/mountains.jpg'
//var uploadTask = storageRef.child('profilePics/' + file.name).put(file, metadata);
var uploadTask = storageRef.child('profilePics/' + user).put(file, metadata);

//taskEvent

// Listen for state changes, errors, and completion of the upload.
//uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
uploadTask.on(taskEvent.STATE_CHANGED, // or 'state_changed'
  function(snapshot) {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //uploader.value = percentage;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
    //  case firebase.storage.TaskState.PAUSED: // or 'paused'
        case taskEvent.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
    //  case firebase.storage.TaskState.RUNNING: // or 'running'
        case taskEvent.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function(error) {

  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
  switch (error.code) {
    case 'storage/unauthorized':
      // User doesn't have permission to access the object
      break;

    case 'storage/canceled':
      // User canceled the upload
      break;

    case 'storage/unknown':
      // Unknown error occurred, inspect error.serverResponse
      break;
  }
}, function() {
  // Upload completed successfully, now we can get the download URL
  var downloadURL = uploadTask.snapshot.downloadURL;
});


    console.log('handle uploading-', file);
  }


export function downloadImage(image) {
//
}


export function saveTournament (tournamentData, user) {

  ref.child(`users/${user.uid}/personal-info`).on('value', (snapshot)=> {

    var profile = snapshot.val()

    const f_name = profile.FirstName
    const l_name = profile.LastName

    var newMatchKey = ref.child('tournaments').push().key

      ref.child(`/tournaments/` + newMatchKey)
      .update({
        creator_first_name: f_name,
        creator_last_name: l_name,
        // sport: newMatch.sport,
        // gameDate: newMatch.gameDate,
        // skill: newMatch.skill,
        // matchTime: newMatch.matchTime,
        // mapDataAddress: newMatch.mapDataAddress,
        // mapDataLat: newMatch.mapDataLat,
        // mapDataLng: newMatch.mapDataLng,
        // players: [user.uid],
        creator: user.uid
      })

      ref.child(`users/${user.uid}/account-info/joinedTournaments/`+ newMatchKey)
      .set({ id: 0
      })

      })
}

export function removeTournamentBackend(players) {
      //  make query for all children joined games with people joined,
      // run loop to delete the joined game
      for (var i =0; i < players.length; i++){
        console.log(players[i])
      ref.child(`users/${players[i]}/account-info/
                                  joinedTournaments/${this.props.match.id}`).remove()
  }
    // delete the match from firebase
     ref.child(`tournaments/${this.props.match.id}/`).remove()
}

  // TODO: Send arrays of winners to update, and losers
export function recordMatch(match){

  const hostScore = match.hostScore
  const awayScore = match.awayScore
  const hostID = [match.hostID]
  const awayID = [match.awayID]
  const matchID = match.matchID
  const pendingMatchID = match.pendingMatchID

// Host wins
  if(hostScore > awayScore) {
   hostID.forEach(function(element) {
     console.log('element')
     console.log(element)

    ref.child(`users/${element.user}/account-info/wonMatches/`).push(matchID)
    ref.child(`users/${element.user}/account-info/joinedGames/${matchID}`).remove()
})

 awayID.forEach(function(element) {
    ref.child(`users/${element.user}/account-info/lostMatches/`).push(matchID)
    ref.child(`users/${element.user}/account-info/joinedGames/${matchID}`).remove()
})
  }

// Host loses
  else if(hostScore < awayScore){
     hostID.forEach(function(element) {
       ref.child(`users/${element.user}/account-info/lostMatches/`).push(matchID)
       ref.child(`users/${element.user}/account-info/joinedGames/${matchID}`).remove()
  }
)
     awayID.forEach(function(element) {
       ref.child(`users/${element.user}/account-info/wonMatches/`).push(matchID)
       ref.child(`users/${element.user}/account-info/joinedGames/${matchID}`).remove()
  })
  }

// Draw for all
  else{
    hostID.forEach(function(element) {
      ref.child(`users/${element.user}/account-info/drawnMatches/`).push(matchID)
      ref.child(`users/${element.user}/account-info/joinedGames/${matchID}`).remove()
 }
)
    awayID.forEach(function(element) {
      ref.child(`users/${element.user}/account-info/drawnMatches/`).push(matchID)
      ref.child(`users/${element.user}/account-info/joinedGames/${matchID}`).remove()
 })
  }

  //delete the match from Joined Matches and regular matches
  ref.child(`matches/${matchID}`).remove()
  ref.child(`pendingMatches/${pendingMatchID}`).remove()
  // Save match as "Confirmed Match", copy it somehow
 }

// BirthMonth: info.BirthMonth,
// BirthDay: info.BirthDay,
// BirthYear: info.BirthYear,
export function updateProfile (info, user) {

  console.log(info)
  //Gender: info.Gender
ref.child(`users/${user.uid}/personal-info`)
.update({
  email: info.Email,
  FirstName: info.FirstName,
  LastName: info.LastName,
  location: info.location,
  aboutMe: info.aboutMe,
 }
)
}

//may have to loop these next two
export function getProfileInfo(user) {
  const profileInfo = {}
  ref.child(`users/${user.uid}/personal-info`).on('value', (snapshot)=> {

  const persInfo = snapshot.val()
   console.log(persInfo)
   //profileInfo.push(persInfo)
   var profileInfo = persInfo
  //console.log( profileInfo)
})
console.log(profileInfo)
   return profileInfo
}

export function getKeyStats(user) {
  const statsInfo = []
  ref.child(`users/${user.uid}/account-info/key-stats`).on('value', (snapshot)=> {

  const persStats = snapshot.val()
   console.log(persStats)
   statsInfo.push(persStats)
})
   return statsInfo
}

export function getYourMatches(user) {
  const yourMatches = []
  ref.child(`users/${user.uid}/account-info/scheduled-matches`).on('value', (snapshot)=> {

  const matches = snapshot.val()
   console.log(matches)

// Can I just through in the whole object? Seems likely
   var keys = Object.keys(matches)
   for(var i=0; i < keys.length; i++ ){
     var k = keys[i];
   //  var match = matches[k];
     var skill = matches[k].skill;
     var sport = matches[k].sport;
     var date = matches[k].gameDate;
     var creator_query = matches[k].creator;
     var players = matches[k].players;
     var creator_first_name = matches[k].creator_first_name;
     var creator_last_name = matches[k].creator_last_name;

var nextMatch = {
 id: k,
 skill: skill,
 sport: sport,
 date:  date,
 players: players,
 creator: creator_query,
 creatorName: creator_first_name + " " + creator_last_name
}
   yourMatches.push(nextMatch)
 }
})
   return yourMatches
}

export function invite2Match (friends, matchID) {
  console.log(friends)
friends.forEach(function(friend) {
ref.child(`matches/${matchID}/invited-friends`)
.push({ friend })
})
}


export function matchDispute (matchID) {
//   console.log(friends)
// friends.forEach(function(friend) {
// ref.child(`matches/${matchID}/invited-friends`)
// .push({ friend })
// })
}

export function submitRep (opponents, rep) {
  console.log(opponents)
  console.log(rep)
for (var i=0; i < opponents.length; i++ ) {
  var this_rep = rep[i]
  var this_user = opponents[i].user
  ref.child(`users/${this_user}/account-info/rep`)
  .push({ this_rep })
}
}


export function add2Stats (currentEarnings, level, nextLevel, user) {
  //   console.log(friends)
  //var profit = winBonus + gameBonus + mysteryBonus
  console.log(currentEarnings)
  console.log(level)
  console.log(user)
  //var currentEarnings = 0
  //var newEarnings = currentEarnings + profit
  ref.child(`users/${user}/account-info/stats/`)
  .update({ level,
            nextLevel,
            currentEarnings
  })
}

export function submittedMatch (hostScore, awayScore, hostID, awayID, matchID,
                                                  sport, date, user, idStack) {
  // console.log(friends)
  // make a notification in opp user info
var newMatchKey = ref.child('pendingMatches').push().key
 ref.child(`/pendingMatches/` + newMatchKey)
 .update({
   hostScore: hostScore,
   awayScore: awayScore,
   hostID: hostID,
   awayID: awayID,
   matchID: matchID,
   sport: sport,
   date: date,
   idStack: idStack
 })
//}

//for id in idStack:
for (var i=0; i < idStack.length; i++ ) {
  var user = idStack[i]

    ref.child(`/users/${user}/account-info/pendingMatches/${newMatchKey}`).set({ id: 0 })

  }
}

export function addFriend (friend, friendName, user, userName) {
console.log(friend)
console.log(user)
//var friendName = friendFirstName + " " + friendLastName
ref.child(`users/${friend}/account-info/friendRequests`).push({ user: user,
                                                              name: userName })

ref.child(`users/${user}/account-info/pendingFriends`).push({ user: friend,
                                                             name: friendName })
}

export function acceptFriend (requester, requesterName, accepter, accepterName) {
console.log(requester)
console.log(requesterName)
console.log(accepter)
console.log(accepterName)

ref.child(`users/${accepter}/account-info/friends`).push({ user: requester,
                                                          name: requesterName })

ref.child(`users/${requester}/account-info/friends`).push({ user: accepter,
                                                           name: accepterName })

let ref_1 = db.ref(`users/${requester}/account-info/pendingFriends/`);
ref_1.orderByChild(`user`).equalTo(`${accepter}`).once('value', snapshot => {
  console.log(snapshot.val())
     let updates = {};
     snapshot.forEach(child => updates[child.key] = null);
     ref_1.update(updates);
});


let ref_2 = db.ref(`users/${accepter}/account-info/friendRequests/`);
ref_2.orderByChild(`user`).equalTo(`${requester}`).once('value', snapshot => {
     let updates = {};
     snapshot.forEach(child => updates[child.key] = null);
     ref_2.update(updates);
});

}

export function declineFriend (requester, decliner) {
console.log(decliner)
ref.child(`users/${requester}/account-info/friendRequests/${decliner}`).remove()

ref.child(`users/${decliner}/account-info/friendRequests/${requester}`).remove()
}

export function join3 (user, matchID, joinerName, stackID) {

    var players3 = {
    user,
    name: joinerName }

    stackID.push(user)

    console.log(players3)
    ref.child(`matches/${matchID}/`).update({ players3: [players3],
                                              idStack: stackID })

    //Sets ID:0 because can then directly delete match by calling match.id
    ref.child(`users/${user}/account-info/joinedGames/${matchID}`)
    .set({ id: 0
    })
  }

export function join4 (user, matchID, joinerName, stackID) {

    var players4 = {
    user,
    name: joinerName }

    stackID.push(user)

    console.log(players4)
    ref.child(`matches/${matchID}/`).update({ players4: [players4],
                                              idStack: stackID })

    //Sets ID:0 because can then directly delete match by calling match.id
    ref.child(`users/${user}/account-info/joinedGames/${matchID}`)
    .set({ id: 0
    })
  }

  export function sportsLength (sport, dflt) {

    if (dflt !== "Default") {
        console.log('Not Default')
        return (dflt)
      }

    else {

        if (sport === "Squash - Doubles") {
           console.log("Squash - Doubles")
           return (2)
          }

           else if (sport === "Tennis - Doubles") {
             console.log( "Tennis - Doubles")
             return (2)
           }

           else if (sport === "Badminton - Doubles") {
             console.log("Badminton - Doubles")
             return (2)
           }

           else if (sport === "Golf") {
            console.log("Golf")
            return (1)
          }

          else if (sport === "Soccer - 5 a Side") {
                console.log("Soccer - 5 a Side")
                return (8)
                }

           else if (sport ===  "Basketball" ) {
                    console.log("enters basketball")
                    return (8)
                 }

           else if (sport === "Quidditch") {
                   console.log("Quidditch")
                   return (10)
                 }

           else if (sport === "Soccer - 11 a Side") {
                   console.log("Soccer - 11 a Side")
                   return (15)
                 }

            else {
              console.log("1 vs 1 game")
                return (1)
            }
          }
  }

// put in register
  export function setStats(user) {
    console.log("Set Stats")
  db.ref(`users/${user}/account-info/stats`).update({level: 1,
                                                    nextLevel: 1500,
                                                    earnings: 0
                                                  })
                                                }

  export function updateStats(user, level, nextLevel, earnings) {
    console.log("Update Stats")
  db.ref(`users/${user}/account-info/stats`).update({level,
                                                    nextLevel,
                                                    earnings
                                                  })
                                                }

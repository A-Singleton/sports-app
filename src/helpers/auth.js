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
ref.child(`users/${user.uid}/personal-info`)
.set({
  email: user.email,
  uid: user.uid,
  FirstName: info.FirstName,
  LastName: info.LastName,
  BirthMonth: info.BirthMonth,
  BirthDay: info.BirthDay,
  BirthYear: info.BirthYear,
  Gender: info.Gender
})
}

export function saveMatch (newMatch, user) {

  ref.child(`users/${user.uid}/personal-info`).on('value', (snapshot)=> {

    var profile = snapshot.val()
    const f_name = profile.FirstName
    const l_name = profile.LastName

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
        players: [user.uid],
        creator: user.uid
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


export function joinMatch(user, players, matchID) {
    players.push(user.uid)
    console.log(players)
    ref.child(`matches/${matchID}/`).update({ players: players })

    //Sets ID:0 because can then directly delete match by calling match.id
    ref.child(`users/${user.uid}/account-info/joinedGames/${matchID}`)
    .set({ id: 0
    })
}


export function getScheduledMatches() {
  //console.log(this.state.User.uid)
  var allMatches = []
  //ref.child(`matches/`).on('value', (snapshot)=> {
  db.ref(`matches/`).on('value', (snapshot)=> {

//  var matchesInfo = []
  var matches = snapshot.val()
  //console.log('allmatches')
  //console.log(matches)

  //var keys = []
  var keys = Object.keys(matches)
      //console.log(keys)

      for (var i =0; i < keys.length; i++) {
        //var id = matches[k].key
        //console.log(id)
        var k = keys[i];
      //  var match = matches[k];
        var skill = matches[k].skill;
        var sport = matches[k].sport;
        var date = matches[k].gameDate;
        var creator_query = matches[k].creator;
        var players = matches[k].players;
        var creator_first_name = matches[k].creator_first_name;
        var creator_last_name = matches[k].creator_last_name;

// console.log('players')
//   console.log(players)

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
//  console.log('allMatches')
//  console.log(allMatches)

}
})
return allMatches
}

export function displayMessages(matchKey) {
  var fbMessages = []
  //child_added could be of use here
  ref.child(`messages/${matchKey}/`).on('value', (snapshot)=> {
  //ref.child(`messages/${matchKey}/`).on('child_added', (snapshot)=> {
  //
  // //const currentMessages = snapshot.val()
  const currentMessages = snapshot.val()
  // console.log('currentMessages')
   console.log(currentMessages)
  //  blank.push(currentMessages)

  //blank.push(currentMessages)
  // need to put finishing touches on this
  //
  if (currentMessages != null){
  // console.log('currentMessages')
  // console.log(currentMessages)
  // console.log(currentMessages[0].id)
  // console.log(currentMessages[0].text)
  //var keys = []
  var keys = Object.keys(currentMessages)
  for(var i=0; i < keys.length; i++ ){
   //var key = keys[i]
  // var id = currentMessages[i].id

   var id = keys[i]
   var message = currentMessages[id].message
   var username = currentMessages[id].username
  //  console.log('id')
  //  console.log(id)

   var newMessage = {
     //key:key,
     id: id,
     message: message,
     username: username
   }
  //  console.log('message')
  //   console.log(message)
   fbMessages.push(newMessage)
   //fbMessages.concat(message)

  }
  }

})
 console.log('fbMessages')
   console.log(fbMessages)
  return fbMessages
}


export function submitMessagesBackend(nextMessage, matchkey) {
      //ref.child(`messages/${matchkey}/` + nextMessage.id).set(nextMessage)
      ref.child(`messages/${matchkey}/`).push(nextMessage)
}

export function uploadImage(file) {
    // Create a root reference
//var storageRef = firebase.storage().ref();
var storageRef = firebaseStorageRef
    // Create the file metadata
var metadata = {
  contentType: 'image/jpeg'
};

// Upload file and metadata to the object 'images/mountains.jpg'
var uploadTask = storageRef.child('profilePics/' + file.name).put(file, metadata);

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

          // ref.child(`users/${user.uid}/account-info`)
          // .set({
          //   joinedGames: newMatchKey
          // })
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

export function recordMatch(hostScore, awayScore, hostID, awayID){
  // ref.child(`users/${players[i]}/account-info/
  //                             /${this.props.match.id}`)
}

// BirthMonth: info.BirthMonth,
// BirthDay: info.BirthDay,
// BirthYear: info.BirthYear,
export function updateProfile (info, user) {
  console.log(info.FirstName)
ref.child(`users/${user.uid}/personal-info`)
.update({
//   email: info.Email,
//   FirstName: info.FirstName,
//   LastName: info.LastName,
//   Gender: info.Gender
 }
)
}

//may have to loop these next two
export function getProfileInfo(user) {
  const profileInfo = []
  ref.child(`users/${user.uid}/personal-info`).on('value', (snapshot)=> {

  const persInfo = snapshot.val()
   console.log(persInfo)
   profileInfo.push(persInfo)
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

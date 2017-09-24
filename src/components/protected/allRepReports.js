import React, { Component } from 'react'
import RepReport from './repReport'

export default class AllRepReports extends Component {
constructor(props) {
    super(props);
    this.state = {value: [], count: 0};
    this.handleSubmit = this.handleSubmit.bind(this);
  }


componentDidMount(){
  console.log("All Reports did mount")
  console.log(this.props.match)
  var repLen = this.props.match.hostID.length
  //var valuesCopy = [1]
  var initialRates = Array(repLen).fill(5)
  console.log(JSON.stringify(initialRates))
  this.setState({count: this.state.count + repLen,
                 value: initialRates              })
}

  componentWillReceiveProps(nextProps) {
    //  console.log("All Reports did mount")
    //  console.log(nextProps)
    //  var repLen = nextProps.homeID.length
    //  var valuesCopy = this.state.value
    //  valuesCopy.fill(5)
    //  this.setState({count: this.state.count+repLen})
  //   console.log(nextProps.user)
  //   //db.ref(`users/${user.uid}/account-info/joinedGames`).on('value', (snapshot)=> {
  //   db.ref(`users/${nextProps.user}/account-info/pendingMatches/`).on('value', (snapshot)=> {
  //
  //   var matches = snapshot.val()
  //   console.log(matches)
  //   var keys = Object.keys(matches)
  //   console.log(keys)
  //   this.setState({keys})
  //   })
  //
  // console.log(nextProps.user)
  // var user = nextProps.user

  // set state to length of opponents that don't have your reps
  }


  handleChange(i, event) {
    console.log(i)
    console.log(event)
     let value = this.state.value.slice();
     value[i] = event;
     this.setState({value});
  }

  handleSubmit(event) {
    this.props.nextStep()
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    //(this.state.value, this.state.opponents)
  }

  addClick(){
    this.setState({count: this.state.count+1})
  }

  // removeClick(i){
  //    let value = this.state.value.slice();
  //    value.splice(i,1);
  //    this.setState({
  //       count: this.state.count - 1,
  //       value
  //    })
  // }

// <input type='button' value='remove' onClick={this.removeClick.bind(this,i)}/>
  // <input type="text" value={this.state.value[i] || ''} onChange={this.handleChange.bind(this,i)} />

  createUI(){
     let uiItems = [];
     for(let i = 0; i < this.state.count; i++){
           uiItems.push(
               <div key={i}>
                  <RepReport value={this.state.value[i]} onChange={this.handleChange.bind(this,i)}
                  player={this.props.match.hostID[i]} />
               </div>
            )
     }
     return uiItems || null;
  }

//<input type='button' value='add more' onClick={this.addClick.bind(this)}/>
  render() {
    console.log(this.state.value)
    return (
      <form onSubmit={this.handleSubmit}>
          {this.createUI()}
          <input type="submit" value="Submit" />
      </form>
    );
  }
}

import Autosuggest from 'react-autosuggest';
import React, { Component } from 'react'
import { Form,  FormGroup, FormControl, Col, Button, ControlLabel} from 'react-bootstrap'
import { invite2Match } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/helpers/auth.js'

// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
  {
    name: 'Jim Mathers',
    year: 1972
  },
  {
    name: 'Kim Kardashian',
    year: 2012
  },
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => (
  suggestion.name
)


// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

export default class basicAutosuggest extends Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: [],
      invites: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    console.log('clear Suggestions')
    this.setState({
      suggestions: [],
      value: ''
    });
  };

//TODO: logic to prevent double invites
  getSuggestionVal = (suggestion) => {
    console.log('getSuggestionVal')
    console.log(suggestion)
    const getSuggestionValue = suggestion.name
    console.log(getSuggestionValue)
    var invitesCopy = this.state.invites
    invitesCopy.push(getSuggestionValue)
    this.setState({
      invites: invitesCopy
    })
    return(getSuggestionValue)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted')
  //  invite2Match(this.state.invites, this.props.matchID)
  }

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Invite your friends',
      value,
      onChange: this.onChange
    };
    //this.getSuggestionVal

    var inviteList = this.state.invites.map((invite, i) => {
      console.log(invite)
      return(
        <li key={i}> {invite} </li>
      )
  })

    // Finally, render it!
    return (
      <div>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionVal}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    <h4>  Invited Friends: </h4>
    <ol>
    { inviteList }
    </ol>
    <form onSubmit={this.handleSubmit}>
    <Button bsStyle="primary" type="submit">
      Add as Friend
    </Button>
    </form>
    </div>
    );
  }
}
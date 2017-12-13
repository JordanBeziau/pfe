import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as api from './api/Api'

class App extends Component {
  state = {
    contacts: [],
    newContact: {
      "username": "jojo",
      "password": "test",
      "email": "jojo@mail.com"
    }
  }

  componentDidMount = () => {
    this.loadContacts()
  }

  postButton = () => {
    api.post('users', this.state.newContact).then(res => this.loadContacts())
  }

  loadContacts = () => {
    api.get('users').then(contacts => this.setState({contacts}))
  }

  render() {
    console.log(this.state.contacts)
    return (
      <div>
        {
          this.state.contacts.map(contact => <li key={contact.id}>{contact.username}</li>)
        }
        <button onClick={this.postButton}>POST ME !</button>
      </div>
    )
  }
}

export default App;

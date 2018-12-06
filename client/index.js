import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import ContactList from './ContactList'
import SingleContact from './SingleContact'


class Main extends Component {
  constructor() {
    super()
    this.state = {
      contacts: [],
      selectedContact: {}
    }
    this.selectContact = this.selectContact.bind(this)
  }


  async componentDidMount(){
    try {
      const res = await axios.get('/api/contacts')
      const contacts = res.data
      this.setState({
        contacts: contacts
      })
    } catch (error) {
      console.log(error)
    }
  }

  async selectContact(contactId) {
    try {
      const res = await axios.get(`/api/contacts/${contactId}`)
      const contact = res.data
      this.setState({
        selectedContact: contact
      })
    } catch (error) {
        console.log(error)
    }
  }

  render() {
    return (
      <div id='main'>
        <div id='navbar'>
          <div>Contact List</div>
        </div>
          {this.state.selectedContact.id ?
              <SingleContact contact={this.state.selectedContact} />
              :
              <ContactList  contacts={this.state.contacts}
                            selectContact={this.selectContact}    /> }
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
)

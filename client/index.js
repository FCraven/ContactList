import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import ContactList from './ContactList'




class Main extends Component {
  constructor() {
    super()
    this.state = {
      contacts: []
    }
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

  render() {
    return (
      <div id='main'>
        <div id='navbar'>
          <div>Contact List</div>
        </div>
      <ContactList contacts={this.state.contacts} />
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
)

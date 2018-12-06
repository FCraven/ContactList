import React from 'react'
import ContactRow from './ContactRow'

const ContactList = (props) => {
  const contacts = props.contacts
  return (
    <div id='container'>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
                {contacts.map(contact => {
                  return (
                    <ContactRow key={contact.id} contact={contact} />
                  )
                })}
            </tbody>
          </table>
        </div>
  )
}

export default ContactList

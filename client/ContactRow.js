import React from 'react'

const ContactRow = (props) => {
  const contact = props.contact
  return(
    <tr>
      <th>{contact.name}</th>
      <th>{contact.phone}</th>
      <th>{contact.email}</th>
    </tr>
  )
}

export default ContactRow

import React from 'react'

const SingleContact = (props) => {
  const contact = props.contact
  console.log(`Single Contact props`, props)
  return (
    <div id='single-contact'>
      <img src={contact.imageUrl} />
      <div id='contact-info'>
        <p>Name: {contact.name}</p>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
      </div>
    </div>
  )
}

export default SingleContact

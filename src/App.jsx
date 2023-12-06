import { useEffect, useState } from 'react'
import SingleContact from './SingleContact'
import './App.css'
import AllContacts from './AllContacts'





function App() {
 
 const[contactList, setContactList] = useState([])
 const [hash,setHash] = useState(window.location.hash.slice(1)*1)

 useEffect(() => {
 const fetchContacts = async () => {
  const response = await fetch ('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users')
  const data = await response.json()
  console.log(data)

  setContactList(data)

 }
  fetchContacts()
 }, [])
 
  useEffect(() => {
  window.addEventListener("hashchange",() => {
    setHash(window.location.hash.slice(1)*1)
  })
  }, [])

  const contact = contactList.find((contact) => {
    return hash === contact.id
  })
  console.log(contact)


  return (
  <div>
    <h1>My Contact ({contactList.length})</h1>
   <ul> {
       contact ? (<SingleContact contact={contact}/>) : null
    }</ul>
    <AllContacts contactList={contactList} hash={hash}/>

  </div>
  )
}

export default App

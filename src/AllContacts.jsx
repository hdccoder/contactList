

function AllContacts ({contactList, hash}){

    return (
        <ul>
            {
            contactList.map((contact) => {
                return (
                    <li Key={contact.id} className={hash === contact.id ? "selected" : ""}>
                        <a href={`#${contact.id === hash ? "" : contact.id}`}>
                            {contact.name}
                        </a>
                    </li>
                )
            })
            }
        </ul>
    
    )
}

export default AllContacts
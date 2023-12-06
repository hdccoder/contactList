

function SingleContact({contact}) {



    return (
    <div>
        <h2>{contact.name}</h2>
        <h2>{contact.phone}</h2>
        <h3> {contact.email}</h3>
        <h3> {contact.address.street} {contact.address.suite}</h3>
        <h3>{contact.address.city}  {contact.address.zipcode}</h3>
       <h3>{contact.company.name}</h3> 
       <h3>{contact.company.catchPhrase}</h3>
       <h3>{contact.website}</h3>
        
     </div>   
    )


}

export default SingleContact
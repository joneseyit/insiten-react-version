import React from 'react'
import { Card, Button } from 'semantic-ui-react'


const CompanyCard = (props) => {
    return (
        <Card>
        <Card.Content>
        <Card.Header>Name: {props.company.name}</Card.Header>
        <Card.Meta>Status: {props.company.status}</Card.Meta>
        <Card.Description>
            <strong>Key Contacts:</strong> {
                props.company.keyContacts.map(contact => <Card.Content>{contact}</Card.Content>)
            }
        </Card.Description>
        <Card.Description>
            
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
    )
}

export default CompanyCard
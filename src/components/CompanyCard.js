import React from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'


const CompanyCard = (props) => {
    return (
        <Card>
        <Card.Content>
        <Card.Header>Company Name: {props.company.name}</Card.Header>
        <Card.Meta>Status: {props.company.status}</Card.Meta>
        <Card.Description>
            <strong>Key Contacts:</strong> {
                props.company.keyContacts.map(contact => <Card.Content>{contact}</Card.Content>)
            }
        </Card.Description>
        <Card.Description>
            <strong>Company info:</strong> {props.company.companyInfo}
        </Card.Description>
        <Card.Description>
          Financial Performance Score: {props.company.financialPerformanceScore}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            <Icon name="edit"/>
          </Button>
          <Button basic color='red'>
            <Icon name='trash' />
          </Button>
        </div>
      </Card.Content>
    </Card>
    )
}

export default CompanyCard
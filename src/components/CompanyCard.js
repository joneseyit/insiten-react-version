import React from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'


const CompanyCard = (props) => {
  const { company, handleEdit } = props;
    return (
        <Card>
        <Card.Content>
        <Card.Header>Company Name: {company.name}</Card.Header>
        <Card.Meta>Status: {company.status}</Card.Meta>
        <Card.Description>
            <strong>Key Contacts:</strong> 
            <Card.Content>{company.keyContacts}</Card.Content>
        </Card.Description>
        <Card.Description>
            <strong>Company info:</strong> {company.companyInfo}
        </Card.Description>
        <Card.Description>
          Financial Performance Score: {company.financialPerformanceScore}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button 
            basic color='green' 
            onClick={ () => handleEdit(company.id)} 
          >
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
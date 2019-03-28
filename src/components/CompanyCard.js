import React from "react";
import { Card, Button, Icon } from "semantic-ui-react";

const CompanyCard = props => {
  const { company, handleEditClick, handleDeleteClick } = props;
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
          <strong>Financial Performance Score:</strong>{" "}
          {company.financialPerformanceScore}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button
            basic
            color="green"
            onClick={() => handleEditClick(company.id)}
          >
            <Icon name="edit" />
          </Button>
          <Button
            basic
            color="red"
            onClick={() => handleDeleteClick(company.id)}
          >
            <Icon name="trash" />
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default CompanyCard;

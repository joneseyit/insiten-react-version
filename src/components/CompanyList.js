import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import CompanyCard from "./CompanyCard";

class CompanyList extends Component {
  render() {
    return (
      <div className="ui container">
        <Card.Group itemsPerRow={6}>
          {this.props.curCompanies.map(company => (
            <CompanyCard
              key={company.id}
              company={company}
              handleEditClick={this.props.handleEditClick}
              handleDeleteClick={this.props.handleDeleteClick}
            />
          ))}
        </Card.Group>
      </div>
    );
  }
}

export default CompanyList;

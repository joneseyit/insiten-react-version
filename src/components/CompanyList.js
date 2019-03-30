import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import CompanyCard from "./CompanyCard";
import { connect } from 'react-redux'

class CompanyList extends Component {


  render() {
    return (
      <div className='six wide column'>
        <Card.Group>          
          {this.props.companies.map(company => (
            <CompanyCard
              key = {company.id}
              company={company}
              handleDeleteClick={this.props.handleDeleteClick}
              handleEditClick={this.props.handleEditClick}
            />
          ))}
        </Card.Group>  
      </div>
    );
  }
}

const mapStateToProps = ({companies}) => {
  return { companies: companies}
}

export default connect(mapStateToProps)(CompanyList);

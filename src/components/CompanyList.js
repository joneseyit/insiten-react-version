import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import CompanyCard from "./CompanyCard";
import CompanyListItem from './CompanyListItem'
import { connect } from 'react-redux'

class CompanyList extends Component {


  render() {
    return (
      <div className='six wide column'>
        <Card.Group>          
          {this.props.companies.map(company => (
            <CompanyCard
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

const mapStateToProps = ({companies}) => {
  return { companies: companies}
}

export default connect(mapStateToProps)(CompanyList);

import React from "react";
import { Card } from "semantic-ui-react";
import CompanyCard from "./CompanyCard";
import { connect } from 'react-redux'

const CompanyList = (props) => {
  const showCompanies = props.searchResults || props.companies
  return (
    <div className='six wide column'>
      <Card.Group>          
        {showCompanies.map(company => (
          <CompanyCard
            key = {company.id}
            company={company}
            handleEditClick={props.handleEditClick}
          />
        ))}
      </Card.Group>  
    </div>
  );
}

const mapStateToProps = ({ companies, searchResults }) => {
  return { 
    companies: companies,
    searchResults: searchResults 
  }
}

export default connect(mapStateToProps)(CompanyList);

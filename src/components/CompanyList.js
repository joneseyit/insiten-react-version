import React from "react";
import { Card } from "semantic-ui-react";
import CompanyCard from "./CompanyCard";
import { connect } from 'react-redux'

const CompanyList = (props) => {
  return (
    <div className='six wide column'>
      <Card.Group>          
        {props.companies.map(company => (
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

const mapStateToProps = ({companies}) => {
  return { companies: companies}
}

export default connect(mapStateToProps)(CompanyList);

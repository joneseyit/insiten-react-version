import React, { Component } from "react";
import CompanyList from "../components/CompanyList";
import { SEEDS } from "../seeds";
import EditForm from "../components/EditForm";
import CreateCompany from "../components/CreateCompany";
import Search from "../components/Search";
import SortedCompanies from "../components/SortedCompanies";
import { connect } from 'react-redux'
import { addCompanies } from '../redux/actions'


class CompanyContainer extends Component {
  state = {
    showEditForm: false,
    editCompany: null,
    searchTerm: '',
    searchResults: [],
    sortedCompanies: [],
    showSortedCo: false
  };

  componentDidMount() {
    this.props.dispatch(addCompanies(SEEDS))
  }

  handleEditClick = id => {
    let editCompany = this.props.companies.find(
      company => company.id === id
    );
    this.setState({ editCompany: editCompany });
    this.setState({ showEditForm: !this.state.showEditForm });
    
  };

  handleEditSubmit = (company) => {
    debugger
    this.setState({ showEditForm: false })
    const updatedCompanies = this.props.companies.map( c => {
        if(c.id === company.id){
            return Object.assign( {}, company)
        } else {
            return c
        }
    })
    this.props.dispatch(addCompanies(updatedCompanies))
  }

  sortCompanies = () => {
    this.setState({ showSortedCo: !this.state.showSortedCo })
    let companies = this.props.companies
    let sortedCompanies = companies.slice().sort( 
      (a, b) => b.financialPerformanceScore - a.financialPerformanceScore   
      )
    this.setState({ sortedCompanies: sortedCompanies })
  }


  render() {
    let allCompanies = this.state.showSortedCo ? this.state.sortedCompanies : this.state.companies
    let renderedCompanies = this.state.searchTerm.length ? 
      this.state.searchResults : 
      allCompanies;
    
    return (
      <div>
        
        <Search handleSearchChange={this.handleSearchChange} />
        <SortedCompanies sortCompanies={this.sortCompanies} />
       

        <CreateCompany />
  
        {this.state.showEditForm ? (
          <EditForm
            company={this.state.editCompany}
            handleEditSubmit={this.handleEditSubmit}
          />
        ) : null}

        <CompanyList
          handleEditClick={this.handleEditClick}
        />
      </div>
    );
  }
}

const mapStateToProps = ({companies}) => {
  return { 
    companies: companies
  }
}

export default connect(mapStateToProps)(CompanyContainer);

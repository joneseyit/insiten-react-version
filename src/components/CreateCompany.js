import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { connect } from 'react-redux'
import { addCompany } from '../redux/actions'

class CreateCompany extends Component {
  state = {
    id: null,
    name: "",
    status: "",
    companyInfo: "",
    financialPerformanceScore: null,
    keyContacts: ""
  };

  handleOnChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };

  handleCreateSubmit = company => {
    company.id = this.props.companies.length + 1;
    const updatedCompanyList = this.props.companies.concat(company);
    this.props.dispatch(addCompany(company))
  };

  render() {
    return (
      <div>
        <h3>Add a New Company Below</h3>
        <Form onSubmit={() => this.handleCreateSubmit(this.state)}>
          <Form.Group widths="equal">
            <Form.Input
              label="Company Name"
              name="name"
              onChange={this.handleOnChange}
              placeholder="Name"
            />
            <Form.Input
              label="Status"
              name="status"
              onChange={this.handleOnChange}
              placeholder="Status"
            />

            <Form.Input
              label="Financial Performance Score"
              name="financialPerformanceScore"
              onChange={this.handleOnChange}
              placeholder="Financial Performance Score"
            />
            <Form.TextArea
              label="Key Contacts"
              name="keyContacts"
              onChange={this.handleOnChange}
              placeholder="Notes on Key Contacts"
            />

            <Form.TextArea
              label="Company Info"
              name="companyInfo"
              onChange={this.handleOnChange}
              placeholder="Company Info"
            />
          </Form.Group>

          <Form.Button type="submit">Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = ({ companies }) => {
  return { companies: companies }
}

export default connect(mapStateToProps)(CreateCompany);

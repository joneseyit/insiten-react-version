import React, { Component } from "react";
import { Card, Form } from "semantic-ui-react";
import { connect } from 'react-redux'
import { clearEditForm, addCompanies } from '../redux/actions'


class EditForm extends Component {
  state = {
    id: this.props.editCompany.id,
    name: this.props.editCompany.name,
    status: this.props.editCompany.status,
    companyInfo: this.props.editCompany.companyInfo,
    financialPerformanceScore: this.props.editCompany.financialPerformanceScore,
    keyContacts: this.props.editCompany.keyContacts
  };

  handleOnChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };


  handleEditSubmit = company => {
    const updatedCompanies = this.props.companies.map(c => {
      if (c.id === company.id) {
        return Object.assign({}, company);
      } else {
        return c;
      }
    });
    this.props.dispatch(addCompanies(updatedCompanies))
    this.props.dispatch(clearEditForm())
  };
  

  render() {
    const {
      name,
      status,
      companyInfo,
      financialPerformanceScore,
      keyContacts
    } = this.props.editCompany;

    return (
      <Card>
        <Form onSubmit={() => this.handleEditSubmit(this.state)}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Company Name"
              name="name"
              onChange={this.handleOnChange}
              defaultValue={name}
            />
            <Form.Input
              fluid
              label="Status"
              name="status"
              onChange={this.handleOnChange}
              defaultValue={status}
            />
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Financial Performance Score"
              name="financialPerformanceScore"
              onChange={this.handleOnChange}
              defaultValue={financialPerformanceScore}
            />
            <Form.TextArea
              fluid
              label="Key Contacts"
              name="keyContacts"
              onChange={this.handleOnChange}
              defaultValue={keyContacts}
            />
          </Form.Group>

          <Form.TextArea
            label="Company Info"
            name="companyInfo"
            onChange={this.handleOnChange}
            defaultValue={companyInfo}
          />

          <Form.Button type='submit'>Submit</Form.Button>
        </Form>
      </Card>
    );
  }
}

const mapStateToProps = ({editCompany, companies}) => {
  return { 
    editCompany: editCompany, 
    companies: companies
  }
}

// const mapDispatchToProps

export default connect(mapStateToProps)(EditForm);

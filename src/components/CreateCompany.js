import React, { Component } from 'react'
import { Card, Form } from "semantic-ui-react";


class CreateCompany extends Component {

    state = {
        id: null,
        name: '',
        status: '',
        companyInfo: '',
        financialPerformanceScore: null,
        keyContacts: '',
    }
    
    handleOnChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        this.setState({ [name]: value })
    }   

    render (){
        return (      
            <Card>
                <Form onSubmit={() => this.props.handleCreateSubmit(this.state)}>
                <Form.Group widths="equal">
                    <Form.Input
                    fluid
                    label="Company Name"
                    name="name"
                    onChange={this.handleOnChange}
                    placeholder='Name'
                    />
                    <Form.Input
                    fluid
                    label="Status"
                    name="status"
                    onChange={this.handleOnChange}
                    placeholder='Status'
                    />
                </Form.Group>
        
                <Form.Group widths="equal">
                    <Form.Input
                    fluid
                    label="Financial Performance Score"
                    name="financialPerformanceScore"
                    onChange={this.handleOnChange}
                    placeholder='Financial Performance Score'
                    />
                    <Form.TextArea
                    fluid
                    label="Key Contacts"
                    name="keyContacts"
                    onChange={this.handleOnChange}
                    placeholder='Notes on Key Contacts'
                    />
                </Form.Group>
        
                <Form.TextArea
                    label="Company Info"
                    name="companyInfo"
                    onChange={this.handleOnChange}
                    placeholder='Company Info'
                />
        
                <Form.Button type='submit'>Submit</Form.Button>
                </Form>
            </Card>   
        )
    }

}

export default CreateCompany
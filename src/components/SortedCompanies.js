import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'

class SortedCompanies extends Component {
    render() {
        return (
            <div>
                <Button onClick ={this.props.sortCompanies} animated='fade'>
                  <Button.Content visible>
                    Sort by Highest Financial Performance
                  </Button.Content>
                  <Button.Content hidden>
                    <Icon name='dollar sign' />
                  </Button.Content>
                  </Button>
            </div>
        )
    }
}

export default SortedCompanies

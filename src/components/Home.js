import React, { Component } from 'react';
import { Container, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

let image = 'https://images.unsplash.com/photo-1462899006636-339e08d1844e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';
const background = {
   backgroundImage: `url(${image})`,
   backgroundRepeat: 'no-repeat',
   backgroundSize: 'Cover',
   backgroundPosition: 'Center',
   height: '100vh'
};

const text = {
   display: "flex",
   justifyContent: "center",
   color: "black"
 };

class Home extends Component {
   render(){
       return (
           <div style={background}>
               <Container style={text}>
                   <div style={{marginTop: '220px'}}>
                       <h1>Welcome to (i)OG</h1>
                       <h2>Achieve (in)OrganicGrowth</h2>
                       <h2>Through Acquisitions</h2>
                       <Button as={Link} to='/dashboard' primary>Go to Dashboard</Button>
                   </div>
               </Container>
           </div>

       )
   }
}

export default Home

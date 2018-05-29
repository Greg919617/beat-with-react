// import React from 'react'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//import Payments from './StripeBilling';



import { Input, Menu, Modal, Segment, Image, Header, Button, Grid, Message, Form } from 'semantic-ui-react'

class MenuExamplePointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
       
       <Segment>
       <Image src={'/images/trial.png'} size='medium' centered />
        
        </Segment>
       
        <Menu pointing>
          <Modal trigger={<Button>Login</Button>}>
          <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid
      textAlign='center'
      style={{ height: '100%',
      backgroundColor: '#f5f5f5' 
    }}
      verticalAlign='middle'      
    >
      <Grid.Column color='white' style={{ maxWidth: 450 }}>
        <Header as='h2' color='white' textAlign='center'>
          <Image src={'/images/trial.png'} />
          {' '}Log-in to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button color='teal' fluid size='large'>Login</Button>
          </Segment>
        </Form>
        <Message>
          Need to sign up? <a href='#'>Register Now</a>
        </Message>
      </Grid.Column>
    </Grid>

        </Modal>





          <Menu.Item name='Login' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='Package Discounts' active={activeItem === 'messages'} onClick={this.handleItemClick} />
          <Menu.Item name='Coupons' active={activeItem === 'friends'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
           
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}


export default MenuExamplePointing;



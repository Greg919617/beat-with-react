
import React, { Component } from 'react';


import { Input, Menu, Modal, Segment, Image, Header, Button, Grid, Message, Form } from 'semantic-ui-react'




class LoginModal extends Component {
    render() {
        return (
    
            <Modal trigger={<Button>Login</Button>}>
            <style>{`
                body > div,
                body > div > div,
                body > div > div > div.login-form {
                    height: 100%;
                }
        `    }</style>
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
        );
    };
}
export default LoginModal;
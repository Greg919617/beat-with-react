import React, { Component } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import LoginModal from '../modals/LoginModal.js'
class NestedModal extends Component {
  state = { open: false }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open } = this.state

    return (
      <Modal
        dimmer={false}
        open={open}
        onOpen={this.open}
        onClose={this.close}
        size='small'
        trigger={<Button primary icon>Proceed <Icon name='right chevron' /></Button>}
      >
        <Modal.Header>Modal #2</Modal.Header>
        <Modal.Content>
          <p>That's everything!</p>
        </Modal.Content>
        <Modal.Actions>
          <Button icon='check' content='All Done' onClick={this.close} />
        </Modal.Actions>
      </Modal>
    )
  }
}

const LoginSignup = () => (
  <Modal trigger={<Button>Login/Signup</Button>}>
    <Modal.Header>Modal #1</Modal.Header>
    <Modal.Content image>
      <Modal.Description>
       <LoginModal/>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <NestedModal />
    </Modal.Actions>
  </Modal>
)

export default LoginSignup;

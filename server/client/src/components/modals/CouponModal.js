
import React, { Component } from 'react';


import { Input, Menu, Modal, Segment, Image, Header, Button, Grid, Message, Form } from 'semantic-ui-react'




class CouponModal extends Component {
    state = { open: false }
    
      show = size => () => this.setState({ size, open: true })
      close = () => this.setState({ open: false })
    
      render() {
        const { open, size } = this.state
    
        return (
          <div>
            <Button onClick={this.show('small')}>Add Coupon</Button>
          
    
            <Modal size={size} open={open} onClose={this.close}>
              <Modal.Header>
                Apply Coupon
              </Modal.Header>
              <Modal.Content>
                <p>If you have a coupon code, please enter it into the field below and click Add Coupon to apply the coupon to your cart.</p>
                <Input focus placeholder='Search...' />
              </Modal.Content>
            
              <Modal.Actions>
                <Button negative>
                  Cancel
                </Button>
                <Button positive icon='checkmark' labelPosition='right' content='Apply Coupon' />
              </Modal.Actions>
            </Modal>
          </div>
    
        )
    }
}          
export default CouponModal;
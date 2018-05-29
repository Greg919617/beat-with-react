
import React, { Component } from 'react';


import { Input, Menu, Modal, Segment, Image, Header, Button, Grid, Message, Form, List, Popup } from 'semantic-ui-react'
import PopupModal from '../modals/PopupModal.js';



class DiscountModal extends Component {
    state = { open: false }
    
      show = size => () => this.setState({ size, open: true })
      close = () => this.setState({ open: false })
    
      render() {
        const { open, size } = this.state
    
        return (
          <div>
            <Button onClick={this.show('small')}>Package Discounts</Button>
          
    
            <Modal size={size} open={open} onClose={this.close}>
              <Modal.Header>
                Package Discounts
              </Modal.Header>
              <Modal.Content>
                <p>
                These are the package discounts that are available. Please note 
                that only beats with the % discount icon are available in the package discounts.
                </p>
              </Modal.Content>
                <PopupModal/>




     
            </Modal>
          </div>
        )
        }
    }
    
           
export default DiscountModal;
import React, { Component } from 'react';
import {Button, Card, Container, Image, Grid, Icon, Loader, Modal, List} from 'semantic-ui-react';
import CartItem from '../cart-item/CartItem.js'


const songs = [
  {url: '/album1/on-rough.ogg', title: 'Own'},
  {url: '/album1/A-10-wanted.ogg', title: 'Wanted'},
  {url: '/album1/raw-120.ogg', title: 'Raw'},
  {url: '/wanted.mp3', title: 'Wanted3'},
  {url: '/wanted.mp3', title: 'Wanted4'},
  {url: '/wanted.mp3', title: 'Wanted5'},
  {url: '/wanted.mp3', title: 'Wanted6'},
  {url: '/wanted.mp3', title: 'Wanted7'},
];


function doPurchase(price) {
  const supportedPaymentMethods =
      [
          {
              supportedMethods: ['basic-card']
          }
      ];

  //payment detials(i.e cost/currency)
  const paymentDetails = {
      total: {
          label: 'Total Cost',
          amount: {
              currency: 'USD',
              value: price
          }
      }
  };

  //custom options
  const options = {};

  //create request
  const paymentRequest = new window.PaymentRequest(
      supportedPaymentMethods, paymentDetails, options
  );

  return paymentRequest.show().then(payment => console.log(payment));
}

class CheckoutSong extends Component {
  render() {
      let paymentButton =
          <Button disabled={this.props.cartItems.length === 0} animated='vertical' fluid
                  onClick={() => doPurchase(this.props.cartItems.length * 30)}>
              <Button.Content hidden>Buy</Button.Content>
              <Button.Content visible>
                  <Icon name='shop'/>
              </Button.Content>
          </Button>;
      if (!window.PaymentRequest) {
          paymentButton = <Button disabled fluid>
              <Icon name='shop'/> Please use Chrome
          </Button>
      }

      return (
          <Card>
              <Card.Content>
                  <Card.Header>
                      Cart
                  </Card.Header>
                  <Card.Description>
                      <List divided relaxed>
                          {this.props.cartItems.map(title => <CartItem playsong ={this.props.playsong} title={title}
                                                                      removeSong={this.props.removeSong}/>)}
                      </List>
                      {paymentButton}
                  </Card.Description>
              </Card.Content>
          </Card>
      )
  }
}

export default CheckoutSong;
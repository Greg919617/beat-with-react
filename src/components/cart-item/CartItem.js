import React, { Component } from 'react';
import {Button, Card, Container, Image, Grid, Icon, Loader, Modal, List} from 'semantic-ui-react';




class CartItem extends Component {
    render = () => (
        <List.Item>
            <Grid columns={12}>
                <Grid.Column width={1}>
                    <List.Icon name='music' size='large' verticalAlign='middle'/>
                </Grid.Column>
                <Grid.Column width={12}>
                    <List.Content>
                        <List.Header as='a'>{this.props.title}</List.Header>
                        <List.Description as='a'>Song</List.Description>
                    </List.Content>
                </Grid.Column>
                <Grid.Column width={1}>
                    <List.Icon  style={{float: 'right'}} name='minus' size='large' verticalAlign='middle'
                               onClick={() => this.props.removeSong(this.props.title)}/>
                </Grid.Column>
            </Grid>
        </List.Item>
    )
}

export default CartItem;
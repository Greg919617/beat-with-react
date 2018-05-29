import React, { Component } from 'react';
import {Button, Card, Container, Image, Grid, Icon, Loader, Modal, List} from 'semantic-ui-react';



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


class SongItem extends Component {
    render = () => (
        <List.Item>
            <Grid columns={12}>
                <Grid.Column width={1}>
                    <List.Icon name='music' size='large' verticalAlign='middle'/>
                </Grid.Column>
                <Grid.Column width={9}>
                    <List.Content>
                        <List.Header>{this.props.title}</List.Header>
                        <List.Description>Song</List.Description>
                    </List.Content>
                </Grid.Column>
                <Grid.Column width={1}>
                    <List.Icon onClick={() => this.props.playsong({url:this.props.url, title: this.props.title})} style={{cursor: 'pointer'}} name='play' size='large' verticalAlign='middle'/>
                </Grid.Column>
                <Grid.Column width={1}>
                    <List.Icon clickable style={{cursor: 'pointer'}} name='shopping cart' size='large' verticalAlign='middle'
                               onClick={() => this.props.addSong(this.props.title)}/>
                </Grid.Column>
            </Grid>
        </List.Item>
    );
}

export default SongItem;
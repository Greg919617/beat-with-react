import React, { Component } from 'react';
import {Button, Card, Container, Image, Input, Grid, Icon, Loader, Modal, List} from 'semantic-ui-react';
import SongItem from '../song-item/SongItem.js';


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



class SongList extends Component {
  render() {
      return (
          <Container centered>
                 
              <Card>
                  <Card.Content>
                      <Card.Header>
                          Songs
                      </Card.Header>
                      <Card.Description style={{height: 200}}>
                          <List divided relaxed style={{height: '100%',
                              overflow: 'scroll'}}>
                              {songs.map(song => <SongItem playsong={this.props.playsong} key={song.title} title={song.title} url={song.url}
                                                                addSong={this.props.addSong}/>)}
                          </List>
                      </Card.Description>
                  </Card.Content>
              </Card>
        </Container>
      );
  };
}

export default SongList;
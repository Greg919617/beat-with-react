import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {render} from 'react-dom';

import '../style.css';
import {Button, Card, Container, Image, Grid, Icon, Input, Loader, Modal, List} from 'semantic-ui-react';


/* Semantic Components */
import 'react-responsive-audio-player/dist/audioplayer.css';
import AudioPlayer from 'react-responsive-audio-player';

import MenuExamplePointing from '../components/navbar/NavBar.js';
import CheckoutSong from '../components/checkout-song/CheckoutSong.js';
import CartItem from '../components/cart-item/CartItem.js';

import SongItem from '../components/song-item/SongItem.js';
import SongList from '../components/song-list/SongList.js';

// import Header from '../components/header/Header.js';




const methodData = [
    {
        supportedMethods: ['basic-card']
    }
];




export default class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: 'React',
            cartItems: [],
            playlist: []
            
        };
        //declares audioplayer, 
        this.audio=undefined
    }

    playsong = song => {
        this.setState({
            playlist: [song]
            
        });
            setTimeout(()=>this.audio.play(), 100)
    };
    addSong = name => {
        if (this.state.cartItems.indexOf(name) >= 0) {
            return;
        }
        this.setState({cartItems: [...this.state.cartItems, name]})
    };

    removeSong = name => {
        this.setState({cartItems: this.state.cartItems.filter(e => e !== name)})
    };

    render() {
        return (
            
           
                <div>
                    <MenuExamplePointing />
                    
           
                    <Container>
                <Grid centered style={{padding: 24}}>
                    <Grid.Column mobile={16} tablet={12} computer={8}>
                    <Input verticalAlign='bottom' icon='search' placeholder='Search...' />
                        <SongList playsong ={this.playsong} addSong={this.addSong}/>
                        <CheckoutSong playsong={this.playsong} cartItems={this.state.cartItems} removeSong={this.removeSong}/>
                    </Grid.Column>
                </Grid>
                <AudioPlayer  audioElementRef={ (audio)=>{
                    this.audio = audio

                }} playlist={this.state.playlist} />
            </Container>


                </div>
            
        );
    }
}





render(<App/>, document.getElementById('root'));

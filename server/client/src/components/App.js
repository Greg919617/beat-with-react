import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../style.css';
import {Button, Card, Container, Image, Grid, Icon, Loader, Modal, List} from 'semantic-ui-react';



import 'react-responsive-audio-player/dist/audioplayer.css';
import AudioPlayer from 'react-responsive-audio-player';

//import Headshot from '../components/headshot/Headshot';
import NavBar from '../components/navbar/NavBar';
import Search from '../components/search/Search';
//import Login from '../components/login-navbar/Login';
//import Header from '../components/header/Header.js';



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
                    <List.Icon clickable style={{cursor: 'pointer'}} name='plus' size='large' verticalAlign='middle'
                               onClick={() => this.props.addSong(this.props.title)}/>
                </Grid.Column>
            </Grid>
        </List.Item>
    );
}

class SongList extends Component {
    render() {
        return (
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
        );
    };
}

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


const methodData = [
    {
        supportedMethods: ['basic-card']
    }
];


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
            
            <MuiThemeProvider>
                <div>
                    <NavBar />
                    
                    <Search style={{ width: '80%' }}/>
                    <Container>
                <Grid centered style={{padding: 24}}>
                    <Grid.Column mobile={16} tablet={12} computer={8}>
                        <SongList playsong ={this.playsong} addSong={this.addSong}/>
                        <CheckoutSong playsong={this.playsong} cartItems={this.state.cartItems} removeSong={this.removeSong}/>
                    </Grid.Column>
                </Grid>
                <AudioPlayer  audioElementRef={ (audio)=>{
                    this.audio = audio

                }} playlist={this.state.playlist} 


/>
            </Container>


                </div>
            </MuiThemeProvider>
        


            
        );
    }
}





render(<App/>, document.getElementById('root'));

import React from 'react'
import { Header, Button, Popup, Grid } from 'semantic-ui-react'

const PopupModal = () => (

    <Grid centered divided columns={3}>
      <Grid.Column textAlign='center'>
        <Header as='h4'>Basic Plan</Header>
        <p><b>1</b> Beat, $30</p>

      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Header as='h4'>Business Plan</Header>
        <p><b>3</b> Beats, $75</p>
     
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Header as='h4'>Platinum Plan</Header>
        <p><b>Unlimited</b> Beats, $299 per month</p>
        
      </Grid.Column>
    </Grid>

)

export default PopupModal;
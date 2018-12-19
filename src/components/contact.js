import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {

    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Matt Fazza</h2>
                        <img 
                        src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" 
                        alt="avatar"
                        style={{height: '250px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            Matt is based out of Dallas, TX.  He graduated from The University of Texas at Dallas in 2018.
                        </p>
                    </Cell>


                    <Cell col={6}>
                        <h2>Contact me</h2>
                        <hr/>

                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden='true' />
                                        (972)795-3961
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-github-square" aria-hidden='true' />
                                    github.com/mattfazza
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-linkedin-square" aria-hidden='true' />
                                        linkedin.com/in/mattfazza
                                </ListItemContent>
                            </ListItem>

                        </List>

                        </div>




                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;
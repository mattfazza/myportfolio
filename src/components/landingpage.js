import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {

    render(){
        return(
            <div style={{ width: "100%", margin: "auto"}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="/Users/MattFazza/PersonalProjects/Angular/React-Trainning/myportfolio/img/linkedin.jpg.sb-b77734d5-DlUrmh"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Full Stack Engineer</h1>

                            <hr />

                            <p>Mongo | Express | React | Node </p>

                            <div className="socialLinks">
                                <a href="http://www.google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linked-square" area-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;
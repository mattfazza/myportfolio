import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {

    render(){
        return(
            <div style={{ width: "100%", margin: "auto"}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src={require("/Users/MattFazza/PersonalProjects/Angular/React-Trainning/myportfolio/src/img/linkedin.png")}
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Full Stack Engineer</h1>

                            <hr />

                            <p>Mongo | Express | React | Node </p>

                            {/* LinkedIn */}
                            <div className="socialLinks">
                                <a href="https://www.linkedin.com/in/mattfazza" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" area-hidden="true" />
                                </a>

                            {/* Github */}
                                <a href="http://www.github.com/mattfazza" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" area-hidden="true" />
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
import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from "react-mdl";

class Projects extends Component {

    constructor(props){
        super(props);
        this.state = { activeTab: 0 };
    }

    //it's useful to have the toggleCategories function in order to display the pages under the same route
    toggleCategories(){

        if(this.state.activeTab === 0 ){
            return(
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>

                        <CardTitle style={{color: "#fff", height: '157px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*EntHChgUyirgbZ9A3zTxkA.png) center / cover'}}>
                            React Project #1 
                        </CardTitle>

                        <CardText> This is project so and so </CardText>

                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Codepen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>

                        <CardMenu style={{color: '#FFF'}}>
                            <IconButton name="share" />
                        </CardMenu>

                    </Card>

                    {/* Project 2 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: "#fff", height: '157px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*EntHChgUyirgbZ9A3zTxkA.png) center / cover'}}>
                        React Project #2 
                    </CardTitle>

                    <CardText> This is project so and so </CardText>

                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Codepen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>

                    <CardMenu style={{color: '#FFF'}}>
                        <IconButton name="share" />
                    </CardMenu>

                    </Card>
                </div>
            )
        }else if(this.state.activeTab === 1){
            return (
                <div><h1>Place for Python</h1></div>
            )
        }


    }

  

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Python</Tab>
                </Tabs>

                
                <Grid>
                    <Cell col={12}>
                        <div className = "content">{this.toggleCategories()}</div>
                    </Cell>

                </Grid>
                

            </div>
        )
    }
}

export default Projects;
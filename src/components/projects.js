import React, { Component } from "react";
import { Tabs, Tab } from "react-mdl";

class Projects extends Component {

    constructor(props){
        super(props);
        this.state = { activeTab: 0 };
    }

    //it's useful to have the toggleCategories function in order to display the pages under the same route
    toggleCategories(){

        if(this.state.activeTab === 0 ){
            return(
                <div><h1>Place for React</h1></div>
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

                <section className="projects-grid">
                {this.toggleCategories()}
                </section>

            </div>
        )
    }
}

export default Projects;
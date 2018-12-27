import React, { Component } from 'react';
import './App.css';
import { Header, Layout, Navigation, Drawer, Content } from 'react-mdl';
import Main from "./components/main";
import { Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
        <div className="demo-big-content">
          <Layout>
              <Header className="header-color" title={<Link style={{textDecoration: "none", color: '#316A7A'}} to="/">My Portfolio</Link>} scroll>
                  <Navigation className="link-colors">
                      <Link to = "/aboutme" style={{color: '#316A7A'}}>AboutMe</Link>
                      <Link to = "/resume" style={{color: '#316A7A'}}>Resume</Link>
                      <Link to = "/projects" style={{color: '#316A7A'}}>Projects</Link>
                      <Link to = "/contact" style={{color: '#316A7A'}}>Contact</Link>
                  </Navigation>
              </Header>
              <Drawer title="My Portfolio">
                  <Navigation>
                    <Link to = "/aboutme">AboutMe</Link>
                    <Link to = "/resume">Resume</Link>
                    <Link to = "/projects">Projects</Link>
                    <Link to = "/contact">Contact</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main/>
              </Content>
          </Layout>
        </div>

    );
  }
}


export default App;

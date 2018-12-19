import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {

    render(){
        return(
            <div>
                <Grid>
                    <Cell  className="resume-left-col" col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                            src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                            alt="avatar"
                            style={{height: '200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Matt</h2>

                        <h4 style={{color: 'grey'}}> Programmer </h4>

                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

                        <p>SOME TEXT</p>

                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

                        <h5>Address</h5>

                        <p>Hacker Way, Menlo Park</p>

                        <h5>Phone</h5>
                        
                        <p>(123) 456-7890</p>
                        
                        <h5>Email</h5>
                        
                        <p>someone@example.com</p>
                        
                        <h5>Web</h5>
                        
                        <p>mywebsite.com</p>
                        
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

                    </Cell>


                    <Cell className="resume-right-col"col={8}> 
                    <h2>Education</h2>
                    <Education
                        startYear={2012}
                        endYear = {2018}
                        schoolName = {"UTD"}
                        schoolDescription = {"Software Engineering great stuff"}

                    />

                    <hr style={{borderTop: '3px solid #h22947'}}></hr>

                    <Experience
                        startYear={2009}
                        endYear={2012}
                        jobName={"internship"}
                        jobDescription={"What I did there"}
                    />

                    <Experience
                        startYear={2012}
                        endYear={2016}
                        jobName={"Second Internship"}
                        jobDescription={"What I did there"}
                    />

                    <Skills
                        skill ={"Python"}
                        progress={100}
                    />

                    <Skills
                        skill ={"Mongo"}
                        progress={60}
                    />

                    <Skills
                        skill = {"Express"}
                        progress={40}
                    />

                    <Skills
                        skill ={"React"}
                        progress={70}
                    />

                     <Skills
                        skill ={"Node"}
                        progress={50}
                    />





                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default Resume;
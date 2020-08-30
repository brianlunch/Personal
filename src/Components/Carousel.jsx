import React, { Component } from 'react'
import Pic from '../pp.jpg'
import { CarouselProvider, Dot,Slider, Slide, ButtonBack, ButtonNext, ButtonLast, ButtonFirst } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFutbol, faGraduationCap, faUser, faHome, faBriefcase } from '@fortawesome/free-solid-svg-icons'

export class Carousel extends Component {

        constructor(props) {
                super(props);
                this.state = { width: 0, height: 0 };
                this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        }

        componentDidMount() {
                this.updateWindowDimensions();
                window.addEventListener('resize', this.updateWindowDimensions);
        }

        componentWillUnmount() {
                window.removeEventListener('resize', this.updateWindowDimensions);
        }

        updateWindowDimensions() {
                this.setState({ width: window.innerWidth, height: window.innerHeight });
        }


        render() {
                var w = this.state.width; var h = this.state.height;
                if (w > h * 2) { w = 2; h = 1; }
                if (w < h) { w = 1; h = 5; }



                return (
                        <CarouselProvider
                                naturalSlideWidth={w}
                                naturalSlideHeight={h}
                                totalSlides={4}
                        >
                                <Slider>
                                        <Slide index={0}>
                                                <div className="row h-80 justify-content-center">
                                                        <div className="col-8  text-left">
                                                                <h1 className="text-center"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></h1>
                                                                <h1 className="text-center">About Me</h1> <br></br>
                                                                <h5>My name is Brian Lynch and I am 21 years old. I am hard working and very excited to help small businesses improve their online presence.</h5>
                                                                <br />
                                                                <h5>After my plans for this summer collapsed due to Covid19 I  decided to become a web developer full time!</h5>
                                                                <br />
                                                                <h5>Click the buttons on the right to find out more about me!</h5>
                                                        </div>
                                                        <div className=" col-3  align-self-center text-center text-blue">
                                                                
                                                                
                                                                
                                                                
                                                                <div className="row text-center justify-content-center zoom">
                                                                <Dot slide={1}><h3 className="text-blue"><FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon></h3><h4 className="text-blue">Education</h4></Dot>
                                                                </div><br></br>
                                                                <div className="row text-center justify-content-center zoom">
                                                                  <Dot slide={2}><h3 className="text-center text-red"><FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon></h3><h4 className="text-red text-center">Work</h4></Dot>      
                                                                </div><br></br>
                                                                <div className="row text-center justify-content-center zoom">
                                                                <Dot slide={3}><h3 className="text-green"><FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon></h3><h4 className="text-green">Hobbies</h4></Dot>    
                                                                </div>
                                                        </div>

                                                </div>
                                        </Slide>
                                        <Slide index={1}>

                                                <div className="row h-80 justify-content-center">

                                                        <div className="col-8  text-left">
                                                                <h1 className="text-blue text-center"><FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon></h1>
                                                                <h1 className="text-blue text-center">Education</h1>
                                                                <br></br>
                                                                <h5>I am currently studying Computer Science in Trinity College Dublin. I am currently on track to receiving a first (4.0 GPA).</h5>
                                                                <br />
                                                                <h5>I have completed modules in Java, AI, C, Software Development, Cryptography and many more!</h5>
                                                                <br />
                                                                <h5>In my final year I am taking Machine Learning, Internet Applications, Advanced Computational Linguistics & Human Factors.I will also be completing a thesis on an aspect of computer science I enjoy!</h5>
                                                        </div>
                                                        <div className=" col-3  align-self-center text-left text-blue">
                                                        <div className="row text-center justify-content-center zoom">
                                                        <Dot slide={0}><h3><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></h3><h4>About Me</h4></Dot>
                                                                </div><br></br>
                                                                <div className="row text-center justify-content-center zoom">
                                                                  <Dot slide={2}><h3 className="text-center text-red"><FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon></h3><h4 className="text-red text-center">Work</h4></Dot>      
                                                                </div><br></br>
                                                                <div className="row text-center justify-content-center zoom">
                                                                <Dot slide={3}><h3 className="text-green"><FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon></h3><h4 className="text-green">Hobbies</h4></Dot>    
                                                                </div>
                                                        </div>

                                                </div>

                                        </Slide>
                                        <Slide index={2}>

                                                <div className="row h-80 justify-content-center">

                                                        <div className=" col-8  text-left">
                                                                <h1 className="text-red text-center"><FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon></h1>
                                                                <h1 className="text-red text-center">Work Experience</h1>
                                                                <br></br>
                                                                <h5>I have experience working in sales, warehouse coordination and in a large multinational company.</h5>
                                                                <br />
                                                                <h5>Last year I completed a cloud computing internship in Zurich Insurance plc, this gave me incredible experience that has stood with me over the last year.</h5>
                                                                <br />
                                                                <h5>I also have great web development experience from working on personal projects and building websites for some great clients! To view a more professional summary of me, please take a look at <Link className="link" to="cv">my CV</Link> or to see previous projects check out <Link className="link" to="portfolio">my portfolio!</Link></h5>
                                                        </div>
                                                        <div className=" col-3  align-self-center text-left text-blue">
                                                        <div className="row text-center justify-content-center zoom">
                                                                <Dot slide={0}><h3><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></h3><h4>About Me</h4></Dot>
                                                                </div><br></br>
                                                                <div className="row text-center justify-content-center zoom">
                                                                <Dot slide={1}><h3 className="text-blue"><FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon></h3><h4 className="text-blue">Education</h4></Dot>
                                                                </div><br></br>
                                                                <div className="row text-center justify-content-center zoom">
                                                                <Dot slide={3}><h3 className="text-green"><FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon></h3><h4 className="text-green">Hobbies</h4></Dot>    
                                                                </div>
                                                        </div>

                                                </div>

                                        </Slide>

                                        <Slide index={3}>
                                                <div className="row h-80 justify-content-center">

                                                        <div className="col-8  text-left">
                                                                <h1 className="text-green text-center"><FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon></h1>
                                                                <h1 className="text-green text-center">Hobbies</h1>
                                                                <br></br>
                                                                <h5>Outside of the generic hobbies of a web developer such as video games and reddit, I enjoy sport and travel!</h5>
                                                                <br />
                                                                <h5>I play soccer at a college level for Trinity College and play Gaelic Football for my local team, Aughrim. I also have a huge interest in the NBA but unfortunately not enough skill to play!.</h5>
                                                                <br />
                                                                <h5>I love travelling and have been to quite a few european cities over the last few years. I hope to one day travel a bit further afield to Asia and South America.</h5>
                                                        </div>
                                                        <div className=" col-3 align-self-center text-left">
                                                        <div className="row text-center justify-content-center zoom">
                                                                <Dot slide={0}><h3><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></h3><h4>About Me</h4></Dot>
                                                                </div><br></br>
                                                                <div className="row text-center justify-content-center zoom">
                                                                <Dot slide={1}><h3 className="text-blue"><FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon></h3><h4 className="text-blue">Education</h4></Dot>
                                                                </div><br></br>
                                                                <div className="row text-center justify-content-center zoom">
                                                                <Dot slide={2}><h3 className="text-center text-red"><FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon></h3><h4 className="text-red text-center">Work</h4></Dot>      
                                                                </div>
                                                        </div>    
                                                        
                                                </div>

                                        </Slide>
                                </Slider>
                                
                        </CarouselProvider>
                )
        }
}

export default Carousel  
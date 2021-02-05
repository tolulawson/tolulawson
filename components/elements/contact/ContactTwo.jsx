import React, { Component } from 'react';
import { useForm } from 'react-hook-form';

class ContactTwo extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            loading: false,
        };
    }
    render(){
        const handleChange = (e) => {
            this.setState({[e.target.name]: e.target.value});
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            this.setState({loading: true});
            const data = {
                name: this.state.name,
                email: this.state.email,
                subject: this.state.subject,
                message: this.state.message,
            }
            fetch('/api/send', {
                method: 'POST',
                body: JSON.stringify(data),
            })
                .then((response) => {
                    if(response.status === 200) {
                        this.setState({loading: false});
                        console.log(response);
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            
        }

        const { loading } = this.state;

        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35">
                        <div className="col-lg-6 order-2 order-lg-1 ">
                            <div className="section-title text-left mb--50">
                                <h2 className="title mb-3">Leave a message</h2>
                                <p className="description">Or email me at <a href='mailto:tolu@tolulawson.com'>tolu@tolulawson.com</a></p>
                            </div>
                            <div className="form-wrapper">
                                <form onSubmit={handleSubmit}>
                                    <label htmlFor="item01">
                                        <input
                                            type="text"
                                            name="name"
                                            id="item01"
                                            value={this.state.name}
                                            onChange={handleChange}
                                            placeholder="Your Name *"
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="text"
                                            name="email"
                                            id="item02"
                                            value={this.state.email}
                                            onChange={handleChange}
                                            placeholder="Your email *"
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="item03"
                                            value={this.state.subject}
                                            onChange={handleChange}
                                            placeholder="Write a Subject"
                                        />
                                    </label>
                                    <label htmlFor="item04">
                                        <textarea
                                            type="text"
                                            id="item04"
                                            name="message"
                                            value={this.state.message}
                                            onChange={handleChange}
                                            placeholder="Your Message"
                                        />
                                    </label>
                                    <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe" disabled={loading}>Send</button>
                                    <img className='ml-4' src="https://s2.svgbox.net/loaders.svg?ic=spinner&color=969393" width="32" height="32" hidden={!loading}/>
                                </form>
                            </div>
                        </div>
                        {/* <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img src="/assets/images/about/about-6.jpg" alt="trydo"/>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactTwo;
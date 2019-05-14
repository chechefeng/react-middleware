import React, {Component} from 'react'
import "./css/homepage.css"
export  default class Part3 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="section opal">
                <div className="container">
                    <div className="_logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                            <path
                                d="M15 0C6.7 0 0 6.7 0 15s6.7 15 15 15 15-6.7 15-15S23.3 0 15 0zm0 26C8.9 26 4 21.1 4 15S8.9 4 15 4s11 4.9 11 11-4.9 11-11 11z"></path>
                            <circle cx="18.7" cy="11.3" r="3.1"></circle>
                            <circle cx="18.7" cy="18.7" r="3.1"></circle>
                            <circle cx="11.3" cy="18.7" r="3.1"></circle>
                            <circle cx="11.3" cy="11.3" r="3.1"></circle>
                        </svg>
                        +
                        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.3 127.3">
                            <path opacity=".35" fill="#fff" d="M0 42.4v42.5h42.4v42.4h42.5V42.4z"></path>
                            <path className="st1" d="M0 84.9h42.4v42.4H0z"></path>
                            <path opacity=".75" fill="#fff" d="M84.9 42.4V0H42.4v84.9h84.9V42.4z"></path>
                            <path className="st1" d="M84.9 0h42.4v42.4H84.9z"></path>
                        </svg>
                    </div>
                    <h2 className="_title">Ahoy, <span>SendGrid</span>!</h2><p>Twilio to acquire the leading email API
                    platform, SendGrid.</p><a >Read more</a></div>
            </div>
        )
    }
}
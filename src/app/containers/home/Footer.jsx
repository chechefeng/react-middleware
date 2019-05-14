import React, { Component } from 'react';
import { Row, Col } from 'antd';

class Footer extends Component {
    render() {
        return (
            <Row>
                <Col>
                    <div className="footer">
                        <div className="footer__statement">We can’t wait to see what you build.</div>
                        <section className="section -flush ">
                            <div className="container">
                                <div className="footer__section">
                                    <header className="footer__header">Products</header>
                                    <ul className="footer__list">
                                        <li className="footer__list-item">
                                            <a  className="footer__link">Voice &amp; Video</a>
                                        </li>
                                        <li className="footer__list-item">
                                            <a  className="footer__link">Messaging</a>
                                        </li>
                                        <li className="footer__list-item">
                                            <a  className="footer__link">Authentication</a>
                                        </li>
                                        <li className="footer__list-item">
                                            <a  className="footer__link">Connected Devices</a>
                                        </li>
                                        <li className="footer__list-item">
                                            <a  className="footer__link">Engagement Cloud</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer__section">
                                    <header className="footer__header">Solutions</header>
                                    <ul className="footer__list">
                                        <li className="footer__list-item">
                                            <a className="footer__link">Account Security</a>
                                        </li>
                                        <li className="footer__list-item">
                                            <a className="footer__link">Text Marketing</a>
                                        </li>
                                        <li className="footer__list-item">
                                            <a  className="footer__link">Collaboration</a>
                                        </li>
                                        <li className="footer__list-item">
                                            <a className="footer__link">Commerce Communications</a>
                                        </li>
                                        <li className="footer__list-item">
                                            <a className="footer__link">Contact Center</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer__section">
                                    <header className="footer__header">Docs</header>
                                    <ul className="footer__list">
                                        <li className="footer__list-item">
                                            <a className="footer__link">Quickstarts</a>
                                        </li>
                                        <li className="footer__list-item">
                                            <a >Tutorials</a>
                                        </li>
                                        <li className="footer__list-item">
                                            <a className="footer__link">API Reference</a>
                                        </li>
                                        <li className="footer__list-item">
                                            <a  className="footer__link">Helper Libraries</a>
                                        </li>
                                        <li className="footer__list-item">
                                            <a  className="footer__link">API Status</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer__section">
                                    <header className="footer__header">Company</header>
                                    <ul className="footer__list">
                                        <li className="footer__list-item">
                                            <a  className="footer__link">About Twilio</a>
                                        </li>
                                        <li className="footer__list-item">
                                            <a className="footer__link">What is Twilio?</a>
                                        </li>
                                        <li className="footer__list-item">
                                            <a className="footer__link">Customers</a>
                                        </li>
                                        <li className="footer__list-item">
                                            <a  className="footer__link">Get Help</a>
                                        </li>
                                        <li className="footer__list-item">
                                            <a className="footer__link">Talk to an expert</a>
                                        </li>
                                        <li className="footer__list-item">
                                            <a  className="footer__link">Press &amp; Media</a>
                                        </li>
                                        <li className="footer__list-item">
                                            <a  className="footer__link">Investor Relations</a>
                                        </li>
                                        <li className="footer__list-item">
                                            <a  className="footer__link">Jobs at Twilio</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <footer className="footer__footer">
                            <div className="footer__logo" title="Twilio">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                                    <path d="M15 0C6.7 0 0 6.7 0 15s6.7 15 15 15 15-6.7 15-15S23.3 0 15 0zm0 26C8.9 26 4 21.1 4 15S8.9 4 15 4s11 4.9 11 11-4.9 11-11 11z"></path>
                                    <circle cx="18.7" cy="11.3" r="3.1"></circle>
                                    <circle cx="18.7" cy="18.7" r="3.1"></circle>
                                    <circle cx="11.3" cy="18.7" r="3.1"></circle>
                                    <circle cx="11.3" cy="11.3" r="3.1"></circle>
                                </svg>
                            </div>
                            <ul className="legal__list">
                                <li className="legal__list-item">
                                    <a  className="legal__link">Legal</a>
                                </li>
                                <li className="legal__list-item">
                                    <a  className="legal__link">Privacy</a>
                                </li>
                                <li className="legal__list-item">
                                    <a  className="legal__link">Twilio.org</a>
                                </li>
                                <li className="legal__list-item">
                                    <a  className="legal__link">Press &amp; Media</a>
                                </li>
                                <li className="legal__list-item">
                                    <a className="legal__link">SIGNAL</a>
                                </li>
                                <li className="legal__list-item">
                                    <a className="legal__link">Investors</a>
                                </li>
                                <li className="legal__list-item">
                                    <a  className="legal__link">Jobs</a>
                                </li>
                            </ul>
                            <ul className="footer__copyright legal__list">
                                <li className="legal__list-item">Copyright © 2018 Twilio, Inc. <br/>All RightsReserved.</li>
                            </ul>
                        </footer>
                    </div>            
                </Col>
            </Row>
        )
    } 
}

export default Footer;
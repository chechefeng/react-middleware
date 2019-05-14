import React, {Component} from 'react'
import "./css/homepage.css"
export  default class Part6 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="section two-column _reliability-security -label-left -stacked -gray-background">
                <div className="container">
                    <div className="angled-heading "><h2 className="_text h2">Reliable, Secure, Scalable</h2></div>
                    <div className="lead "><h2 className="_title  ">Built for developers.<br/>Trusted by businesses.
                    </h2></div>
                    <div className="content ">
                        <div>
                            <div className="_icon"><img src={require("./img/icon-success-rate-3x.png")}/>
                            </div>
                            <div className="_content-left"><h3>99.999% API Success Rate</h3><p>API success rate is the
                                true
                                indicator of your app experience. We won’t settle for errors that take down your
                                app.</p></div>
                        </div>
                        <div>
                            <div className="_icon"><img
                                src={require("./img/icon-success-rate-3x.png")}/>
                            </div>
                            <div className="_content-right"><h3>Security first</h3><p>The largest enterprises trust
                                Twilio
                                with their data. We’re ISO 27001 and GDPR Privacy Shield compliant.</p></div>
                        </div>
                        <div>
                            <div className="_icon"><img src={require("./img/icon-success-rate-3x.png")}/>
                            </div>
                            <div className="_content-right"><h3>Pricing</h3><p>Using Twilio, you only pay for what you
                                use.
                                As you scale, we work with you to design volume discounts and committed use discounts
                                that serve your needs.</p></div>
                        </div>
                    </div>
                    <div className="_cta text-center"><a className="button -big -red" >
                        Sign up and start building

                    </a><p className="sub-cta ">
                        Not ready yet?

                        <a  className="_link link-red-underline">
                            Talk to an expert.
                        </a></p></div>
                </div>
            </section>
        )
    }
}
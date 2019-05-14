import React, {Component} from 'react'
import "./css/homepage.css"
export  default class Part5 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <section className="section two-column _features">
                    <div className="container">
                        <div className="lead "><h2 className="_title  -underline -red">APIs to create what you imagine, without
                            compromise. </h2><p className="_copy ">Twilio was made for creators like you. We build our APIs
                            to be simple to use, powerful in production, and endlessly scalable.</p></div>
                        <div className="content ">
                            <div className="tout">
                                <div className="_icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 58"><title>
                                        icon-cloud-powered</title>
                                        <path
                                            d="M71.64,26.17c0-.2,0-.4,0-.6A14,14,0,0,0,45.18,19.4a7.45,7.45,0,0,0-11.53,5.7,10.36,10.36,0,0,0-5,15.46A9.57,9.57,0,0,0,36.8,45H70.92a8.84,8.84,0,0,0,8-4.87A9.54,9.54,0,0,0,71.64,26.17Z"
                                            style={{fill:"#e8e8e8"}}></path>
                                        <path
                                            d="M60.67,19.62c0-.28,0-.55,0-.81a18.95,18.95,0,0,0-35.9-8.32A10.12,10.12,0,0,0,9.16,18.18,13.93,13.93,0,0,0,2.33,39a13,13,0,0,0,11.1,6H59.69a12,12,0,0,0,10.83-6.56C74.89,29.46,69,20.57,60.67,19.62Z"
                                            style={{fill:"#f5f5f5"}}></path>
                                        <circle cx="40" cy="42" r="16" style={{fill:"#36d576"}}></circle>
                                        <path d="M48,36.67V38L37.33,48.67,32,43.33V42h1.33l4,4,9.34-9.33Z"
                                              style={{fill:"#fff"}}></path>
                                    </svg>
                                </div>
                                <div className="_content"><h3>Cloud powered</h3><p>We're built in the cloud. Our API is
                                    always available, continuously upgraded, and auto-scales to meet your needs.</p>
                                </div>
                            </div>
                            <div className="tout">
                                <div className="_icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 72"><title>
                                        icon-fully-featured</title>
                                        <path
                                            d="M8,12H68a4,4,0,0,1,4,4V48a4,4,0,0,1-4,4H12a4,4,0,0,1-4-4V12a0,0,0,0,1,0,0Z"
                                            transform="translate(80 64) rotate(-180)" style={{fill:"#565b73"}}></path>
                                        <polygon points="72 56 64 52 72 52 72 56" style={{fill:'#565b73'}}></polygon>
                                        <path
                                            d="M38,33l5-3-5-3Zm2-12a9,9,0,1,0,9,9A9,9,0,0,0,40,21Zm0,17a8,8,0,1,1,8-8A8,8,0,0,1,40,38Z"
                                            style={{fill:'#fff'}}></path>
                                        <polygon points="0 72 8 68 0 68 0 72" style={{fill:'#008cff'}}></polygon>
                                        <path
                                            d="M4,44H44a4,4,0,0,1,4,4V64a4,4,0,0,1-4,4H0a0,0,0,0,1,0,0V48A4,4,0,0,1,4,44Z"
                                            style={{fill:'#008cff'}}></path>
                                        <line x1="8" y1="53" x2="8" y2="59"
                                              style={{fill:"none",stroke:"#fff",strokeLinejoin:"round",strokeWidth:"2px"}}></line>
                                        <line x1="16" y1="51" x2="16" y2="61"
                                             style={{fill:"none",stroke:"#fff",strokeLinejoin:"round",strokeWidth:"2px"}}></line>
                                        <line x1="12" y1="50" x2="12" y2="62"
                                             style={{fill:"none",stroke:"#fff",strokeLinejoin:"round",strokeWidth:"2px"}}></line>
                                        <line x1="24" y1="51" x2="24" y2="61"
                                             style={{fill:"none",stroke:"#fff",strokeLinejoin:"round",strokeWidth:"2px"}}></line>
                                        <line x1="20" y1="53" x2="20" y2="59"
                                             style={{fill:"none",stroke:"#fff",strokeLinejoin:"round",strokeWidth:"2px"}}></line>
                                        <line x1="32" y1="53" x2="32" y2="59"
                                              style={{fill:"none",stroke:"#fff",strokeLinejoin:"round",strokeWidth:"2px",opacity:"0.5"}}></line>
                                        <line x1="28" y1="50" x2="28" y2="62"
                                             style={{fill:"none",stroke:"#fff",strokeLinejoin:"round",strokeWidth:"2px"}}></line>
                                        <line x1="40" y1="53" x2="40" y2="59"
                                              style={{fill:"none",stroke:"#fff",strokeLinejoin:"round",strokeWidth:"2px",opacity:"0.5"}}></line>
                                        <line x1="36" y1="51" x2="36" y2="61"
                                              style={{fill:"none",stroke:"#fff",strokeLinejoin:"round",strokeWidth:"2px",opacity:"0.5"}}></line>
                                        <polygon points="80 24 72 20 80 20 80 24" style={{fill:"#36d576"}}></polygon>
                                        <path
                                            d="M48,0H76a4,4,0,0,1,4,4V16a4,4,0,0,1-4,4H52a4,4,0,0,1-4-4V0A0,0,0,0,1,48,0Z"
                                            transform="translate(128 20) rotate(-180)" style={{fill:"#36d576"}}></path>
                                        <path
                                            d="M64,6.32a2.91,2.91,0,0,0-4.11,4.11L64,14.54l4.11-4.11A2.91,2.91,0,1,0,64,6.32Z"
                                            style={{fill:"#fff",fillRule:"evenodd"}}></path>
                                    </svg>
                                </div>
                                <div className="_content"><h3>Fully featured out of the box</h3><p>Start running straight
                                    from deploy. Enable your Twilio-powered app to do everything from text to speech,
                                    Natural Language Understanding, and more. The API is your oyster.</p></div>
                            </div>
                            <div className="tout">
                                <div className="_icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 65.19"><title>
                                        icon-intelligent-comms</title>
                                        <circle cx="40.11" cy="32.59" r="32.59" style={{fill:"none"}}></circle>
                                        <circle cx="40.11" cy="32.59" r="32.59" style={{fill:'#565b73'}}></circle>
                                        <path
                                            d="M59.12,6.47c-.77-.6-1.67-.38-2.71.68h0a2.78,2.78,0,0,1-2.78,2.78H47.35a9.28,9.28,0,0,0-4.52,1.17l-.26.14a6.23,6.23,0,0,0-3,3.94l-1.62,6.49a4.7,4.7,0,0,1-1.69,2.47A3.51,3.51,0,0,0,35,26.85v.42a8.9,8.9,0,0,0,.94,4l.64,1.27a8,8,0,0,0,5,4.12l2.65.76a9.25,9.25,0,0,1,2.46,1.11l8.89,5.69a9.24,9.24,0,0,0,2.25,1q13.66,4,14.78-8.36C73.7,24,68.87,14.19,59.12,6.47Z"
                                            style={{fill:"#233659"}}></path>
                                        <path
                                            d="M15.23,12c1.14-1.27,2.89-1.43,5.26-.46l2,1.5a5,5,0,0,1,2,4v4A7.58,7.58,0,0,1,23,25.48a6.79,6.79,0,0,1-2.47,2l-.45.23a6.76,6.76,0,0,0-3,3,6,6,0,0,0-.61,2.78V34a4.7,4.7,0,0,0,2.08,3.9l2.33,1.54a6.5,6.5,0,0,1,2.34,2.82l0,.07a5.16,5.16,0,0,1,.22,3.42,4.38,4.38,0,0,1-2.1,2.63c-5.8,3-7.22,2.93-8.16,1.79C6.8,42.42,3.78,24.86,15.23,12Z"
                                            style={{fill:"#233659"}}></path>
                                        <path
                                            d="M24.62,61.23q-1.74-.91,4.58-2.95h0a9.29,9.29,0,0,1,2.86-.45h4a9.29,9.29,0,0,0,3.64-.74l3-1.26a9.23,9.23,0,0,1,7.51.1q8.55,4,3.7,6.19A32.5,32.5,0,0,1,24.62,61.23Z"
                                            style={{fill:"#233659"}}></path>
                                        <path
                                            d="M5.77,29.92q-6.94,5-3.78,9.75c3.16,4.75,20.73,5.76,43.49.55S83.14,25,80.75,20.18q-2.39-4.82-11.61-5.36"
                                            style={{fill:'none',stroke:'#f22f46',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:"2px"}}></path>
                                        <rect x="36.52" y="46.74" width="4.44" height="4.08" rx="0.89" ry="0.89"
                                              transform="translate(-19.59 26.92) rotate(-31)" style={{fill:'#fff'}}></rect>
                                        <rect x="30.59" y="37.15" width="8.08" height="9.23" rx="0.89" ry="0.89"
                                              transform="translate(-16.24 22.91) rotate(-30)" style={{fill:'#fff'}}></rect>
                                        <rect x="28.27" y="32.45" width="4.44" height="4.08" rx="0.89" ry="0.89"
                                              transform="translate(-13.41 20.63) rotate(-31)" style={{fill:'#fff'}}></rect>
                                    </svg>
                                </div>
                                <div className="_content"><h3>Build intelligent communications</h3><p>Every text and call on
                                    Twilio helps fine tune the Super Network, our web of carrier connections all over
                                    the globe. This data is yours to use via a powerful web API that helps you optimize
                                    the quality and cost of your communications.</p></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
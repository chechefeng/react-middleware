import React, {Component} from 'react'
import "./css/homepage.css"
export  default class Part1 extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    componentWillMount() {
    }

    render() {
        return (


            <section className="section two-column hero -gray-background -shadow">
                <div className="container">
                    <div className="lead "><p className="_supertitle -red">
                        Build the future of communications
                    </p><h1 className="_title  ">Engage customers like never before on Voice, SMS, Video, and
                        WhatsApp. </h1><a className="button -big -red -prompt" >
                        Get a free API key

                    </a><p className="sub-cta ">
                        Questions?

                        <a  className="_link link-red-underline">
                            Talk to an expert.
                        </a></p></div>
                    <div className="content ">
                        <div className="people-carousel">
                            <div className="background initialized">
                                <div className="gradients">
                                    <div className="gradients-slide" style={{opacity: "0"}}>
                                        <div className="bg-3"></div>
                                    </div>
                                    <div className="gradients-slide" style={{opacity: "0"}}>
                                        <div className="bg-1"></div>
                                    </div>
                                    <div className="gradients-slide" style={{opacity: "0"}}>
                                        <div className="bg-2"></div>
                                    </div>
                                    <div className="gradients-slide" style={{opacity: "0"}}>
                                        <div className="bg-4"></div>
                                    </div>
                                    <div className="gradients-slide" style={{opacity: '1'}}>
                                        <div className="bg-3"></div>
                                    </div>
                                </div>
                                <div className="dots">
                                    <div className="dots-slide" style={{opacity: "1", transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                                        <div className="dots-3"></div>
                                    </div>
                                    <div className="dots-slide" style={{opacity: "1", transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                                        <div className="dots-1"></div>
                                    </div>
                                    <div className="dots-slide" style={{opacity: "1", transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                                        <div className="dots-2"></div>
                                    </div>
                                    <div className="dots-slide" style={{opacity: "1", transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                                        <div className="dots-1"></div>
                                    </div>
                                    <div className="dots-slide" style={{opacity: "1", transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                                        <div className="dots-3"></div>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="content-slide -green uk-padding"
                                         style={{opacity: "1", transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                                        <div className="_name">Jacinda Shelly</div>
                                        <div className="_text">Delivers quality care from anywhere with Twilio Video.</div>
                                        <div className="_link"><a
                                            target="_blank" className="logo-superphone">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110.86 26.51"><title>
                                                Artboard 53</title>
                                                <g>
                                                    <g>
                                                        <path d="M9.1,12.81a3,3,0,1,0,3,3A3,3,0,0,0,9.1,12.81Z"
                                                              style={{fill:" #565b73"}}></path>
                                                        <path
                                                            d="M0,0V26.51H26.51V0ZM13.39,20.07H12.08V18.88a4.29,4.29,0,1,1,0-6.18V6.41h1.32V20.07ZM16,15.76V20.1H14.73V11.43H16v1.22a4.35,4.35,0,0,1,3-1.22v1.32A3,3,0,0,0,16,15.76Zm5.74,2.82H20.26V20.1H19V18.6H17.47V17.33H19V15.81h1.25v1.48h1.52l0,0v1.27Z"
                                                            style={{fill:" #565b73"}}></path>
                                                    </g>
                                                    <path
                                                        d="M31,15.81v-.14a4.2,4.2,0,1,1,8.39,0v.14a4.19,4.19,0,0,1-4.19,4.43A4.24,4.24,0,0,1,31,15.81Zm7.47,0v-.14c0-2.28-1.43-3.66-3.27-3.66s-3.28,1.4-3.28,3.66v.14c0,2.24,1.39,3.64,3.3,3.64S38.49,18.05,38.49,15.81Z"
                                                        style={{fill:" #565b73"}}></path>
                                                    <path
                                                        d="M40.89,11.41h.87v1.68a3.28,3.28,0,0,1,3.07-1.82c1.84,0,3.09,1,3.09,3.46v5.34H47V14.68c0-1.84-.85-2.65-2.4-2.65a2.75,2.75,0,0,0-2.88,2.79v5.25h-.87Z"
                                                        style={{fill:" #565b73"}}></path>
                                                    <path
                                                        d="M52.87,15.86v-.14c0-2.67,1.75-4.47,4-4.47a3.35,3.35,0,0,1,3.18,2.05V6.43H61V20.07h-.87v-2a3.71,3.71,0,0,1-3.3,2.14C54.55,20.21,52.87,18.62,52.87,15.86Zm7.22-.07v-.12C60.09,13.28,58.8,12,57,12s-3.2,1.34-3.2,3.69v.14c0,2.37,1.34,3.64,3.07,3.64S60.09,18.18,60.09,15.79Z"
                                                        style={{fill:" #565b73"}}></path>
                                                    <path
                                                        d="M62.44,15.83V15.7c0-2.63,1.66-4.43,4-4.43,2.1,0,3.81,1.36,3.81,4.24v.32H63.36c0,2.33,1.15,3.65,3.2,3.65a2.46,2.46,0,0,0,2.72-1.8h.88a3.35,3.35,0,0,1-3.6,2.56C64.05,20.21,62.44,18.44,62.44,15.83Zm6.87-.73C69.21,13,68.11,12,66.42,12a3,3,0,0,0-3,3.09Z"
                                                        style={{fill:" #565b73"}}></path>
                                                    <path
                                                        d="M71.7,11.41h.88v1.64a3,3,0,0,1,2.83-1.78,2.46,2.46,0,0,1,2.65,1.94,3.37,3.37,0,0,1,3.09-1.94c1.68,0,2.91.92,2.91,3.39v5.41h-.88V14.59C83.18,12.75,82.4,12,81,12a2.64,2.64,0,0,0-2.69,2.58v5.48h-.88V14.59c0-1.84-.78-2.58-2.16-2.58a2.65,2.65,0,0,0-2.7,2.58v5.48H71.7Z"
                                                        style={{fill:" #565b73"}}></path>
                                                    <path
                                                        d="M85.49,17.75c0-2,1.93-2.63,4.05-2.63h1.82v-.78c0-1.64-.67-2.33-2.19-2.33a2.17,2.17,0,0,0-2.44,1.84h-.85c.2-1.82,1.68-2.58,3.34-2.58,1.82,0,3,.85,3,3.07v5.73h-.87V18.74a3.28,3.28,0,0,1-3,1.45C86.71,20.21,85.49,19.38,85.49,17.75Zm5.87-.46v-1.5H89.59c-1.82,0-3.23.39-3.23,1.93,0,1.11.69,1.76,2.12,1.76,1.59,0,2.88-.9,2.88-2.19Z"
                                                        style={{fill:" #565b73"}}></path>
                                                    <path
                                                        d="M94.31,11.41h.88v1.68a3.26,3.26,0,0,1,3.06-1.82c1.85,0,3.09,1,3.09,3.46v5.34h-.87V14.68c0-1.84-.88-2.65-2.4-2.65a2.75,2.75,0,0,0-2.88,2.79v5.25h-.88Z"
                                                        style={{fill:" #565b73"}}></path>
                                                    <path
                                                        d="M102.77,15.86v-.14c0-2.67,1.75-4.47,4-4.47A3.35,3.35,0,0,1,110,13.3V6.38h.87V20.07H110v-2a3.71,3.71,0,0,1-3.3,2.14C104.45,20.21,102.77,18.62,102.77,15.86Zm7.22-.07v-.12c0-2.39-1.3-3.64-3.12-3.64s-3.2,1.34-3.2,3.69v.14c0,2.37,1.34,3.64,3.07,3.64S110,18.18,110,15.79Z"
                                                        style={{fill:" #565b73"}}></path>
                                                </g>
                                            </svg>
                                        </a></div>
                                    </div>
                                    <div className="content-slide -red"
                                         style={{opacity: "1", transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                                        <div className="_name">Devlin O'Neil</div>
                                        <div className="_text">Serves guests without breaking a sweat using Voice.</div>
                                        <div className="_link">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104.68 20.08"><title>
                                                Artboard 51</title>
                                                <g>
                                                    <path
                                                        d="M10,0h0a10,10,0,1,0,10,10A10,10,0,0,0,10,0ZM17,14.68a3.63,3.63,0,0,1-3,1.85,4.12,4.12,0,0,1-1.58-.38A3.13,3.13,0,0,1,11,14.83,2.73,2.73,0,0,1,10.59,13a17.86,17.86,0,0,1,.69-2c.8-2.07,1.89-4.9,1-6.28A2.44,2.44,0,0,0,10,3.89a2.43,2.43,0,0,0-2.19.87C6.89,6.14,8,9,8.79,11a15.82,15.82,0,0,1,.68,2,2.69,2.69,0,0,1-.38,1.8,3.13,3.13,0,0,1-1.42,1.32,4.12,4.12,0,0,1-1.58.38,3.55,3.55,0,0,1-2.95-1.84L3,14.5A4.43,4.43,0,0,0,4.78,15a1.53,1.53,0,0,0,.9-.29c1.63-1.08,1.07-2.38,0-4.39A11.47,11.47,0,0,1,4.47,7.7a4.05,4.05,0,0,1,.4-3.47,3.76,3.76,0,0,1,1.8-1.15,10.53,10.53,0,0,1,3.16-.43h.42a10.53,10.53,0,0,1,3.16.43,3.76,3.76,0,0,1,1.8,1.15,4.05,4.05,0,0,1,.4,3.47,10.71,10.71,0,0,1-1.18,2.63c-1.11,2-1.66,3.31,0,4.39a1.56,1.56,0,0,0,.91.29,4.48,4.48,0,0,0,1.75-.51Z"
                                                        style={{fill:" #565b73"}}></path>
                                                    <path d="M28.83,16.4h-2.1V2.72h2.1Z" style={{fill:" #565b73"}}></path>
                                                    <path
                                                        d="M39.22,16.4H37.11v-.88a3.38,3.38,0,0,1-2.51,1.09c-2.13,0-3.28-1.41-3.28-3.47V7h2.1v5.71c0,1.15.55,1.91,1.75,1.91a2,2,0,0,0,1.94-1.49V7.05h2.11Z"
                                                        style={{fill:" #565b73"}}></path>
                                                    <path d="M43.93,16.4H41.82V2.72h2.11Z" style={{fill:" #565b73"}}></path>
                                                    <path
                                                        d="M54.3,16.4H52.2v-.88a3.35,3.35,0,0,1-2.51,1.09c-2.12,0-3.28-1.41-3.28-3.47V7h2.11v5.71c0,1.15.54,1.91,1.74,1.91a1.94,1.94,0,0,0,1.94-1.49V7.05h2.11Z"
                                                        style={{fill:" #565b73"}}></path>
                                                    <path d="M59,16.4H56.92V2.72H59Z" style={{fill:" #565b73"}}></path>
                                                    <path
                                                        d="M69.34,13.49a3.67,3.67,0,0,1-3.94,3.12c-2.61,0-4.42-2-4.42-4.86s1.83-4.91,4.38-4.91,4.06,1.87,4.06,4.61v.76H63c.07,1.64,1,2.63,2.36,2.63a1.85,1.85,0,0,0,2-1.35Zm-6.23-2.83h4.23a1.9,1.9,0,0,0-2-2.06A2.27,2.27,0,0,0,63.11,10.66Z"
                                                        style={{fill:" #565b73"}}></path>
                                                    <path
                                                        d="M81,6.86c1.9,0,3,1.34,3,3.47v6.09H82V10.66c0-1.14-.51-1.9-1.52-1.9a1.65,1.65,0,0,0-1.67,1.39V16.4H76.66V10.66c0-1.14-.51-1.9-1.52-1.9a1.65,1.65,0,0,0-1.67,1.39V16.4h-2.1V7.05h2.1v.76a2.87,2.87,0,0,1,2.31-.95A3,3,0,0,1,78.25,8.1,3.41,3.41,0,0,1,81,6.86Z"
                                                        style={{fill:" #565b73"}}></path>
                                                    <path
                                                        d="M90.34,16.61c-2.63,0-4.44-2-4.44-4.88s1.81-4.87,4.44-4.87,4.44,2,4.44,4.88S93,16.61,90.34,16.61Zm0-8C88.82,8.65,88,10,88,11.73s.82,3.07,2.33,3.07,2.34-1.31,2.34-3.07S91.86,8.65,90.34,8.65Z"
                                                        style={{fill:" #565b73"}}></path>
                                                    <path
                                                        d="M96.73,7.05h2.11v.89a3.34,3.34,0,0,1,2.54-1.08,3.14,3.14,0,0,1,3.3,3.47v6.09h-2.1V10.66a1.67,1.67,0,0,0-1.77-1.9,2,2,0,0,0-2,1.49V16.4H96.73Z"
                                                        style={{fill:" #565b73"}}></path>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="content-slide -blue"
                                         style={{opacity: "1", transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                                        <div className="_name">Nancy Lublin</div>
                                        <div className="_text">Delivers crisis support via SMS.</div>
                                        <div className="_link"><a
                                            target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112.01 34.16"><title>
                                                logo-crisis-text-line</title>
                                                <path
                                                    d="M15.75,13.89c-.39,0-.78,0-1.19,0v2.53c.39,0,.74,0,1.08,0a.53.53,0,0,0,.57-.56c0-.48,0-.95,0-1.42A.49.49,0,0,0,15.75,13.89Z"
                                                    style={{fill:"#565b73"}}></path>
                                                <path
                                                    d="M108,0,4.06,0A4,4,0,0,0,0,4.05v26a4.05,4.05,0,0,0,4.05,4.05l103.9,0a4.05,4.05,0,0,0,4-4v-26A4.05,4.05,0,0,0,108,0ZM12.12,20.39a1.81,1.81,0,0,1-1.42,1.73A4.26,4.26,0,0,1,8.06,22a1.72,1.72,0,0,1-1.18-1.7c0-2,0-3.91,0-5.87a2,2,0,0,1,1.81-2.15,4.41,4.41,0,0,1,2.22.14,1.63,1.63,0,0,1,1.2,1.47,19.55,19.55,0,0,1,0,2H10.36c0-.11,0-.23,0-.35,0-.39,0-.78,0-1.16,0-.58-.3-.81-.86-.8s-.76.26-.77.82c0,1.84,0,3.69,0,5.53,0,.61.3.88.84.87s.75-.22.78-.72a12.71,12.71,0,0,0,0-1.38c0-.27.09-.35.35-.34.47,0,.94,0,1.45,0C12.13,19.13,12.18,19.77,12.12,20.39Zm4.5,1.68a.36.36,0,0,1-.2-.23,4.41,4.41,0,0,1-.17-.95c0-.74,0-1.47,0-2.21,0-.58-.19-.78-.78-.82-.29,0-.59,0-.92,0v4.2h-1.8V12.45l.3,0h3.26a2.57,2.57,0,0,1,.55.06A1.2,1.2,0,0,1,18,13.63c.05.86,0,1.72,0,2.57a.9.9,0,0,1-.61.79l-.41.17a1.71,1.71,0,0,1,1.15,2,13.19,13.19,0,0,0,0,1.54c0,.45.14.91.22,1.41C17.83,22.08,17.22,22.09,16.62,22.07Zm4,0c-.56,0-1.1,0-1.64,0-.06,0-.15-.2-.15-.31,0-1.12,0-2.25,0-3.37,0-1.84,0-3.69,0-5.53,0-.33.08-.45.42-.43s.89,0,1.38,0Zm5.92-2.91c0,.39,0,.78,0,1.16a1.82,1.82,0,0,1-1.75,1.86,6,6,0,0,1-2.07-.1,1.74,1.74,0,0,1-1.45-1.8,10.59,10.59,0,0,1,0-1.38.36.36,0,0,1,.17-.26c.53,0,1.06,0,1.64,0,0,.5,0,1,0,1.42,0,.63.31.87.94.81a.64.64,0,0,0,.68-.64,6.83,6.83,0,0,0,0-1,1.19,1.19,0,0,0-.6-1c-.56-.36-1.11-.75-1.68-1.12A2.37,2.37,0,0,1,21.34,15a4.58,4.58,0,0,1,0-.74,2,2,0,0,1,1.82-2,3.57,3.57,0,0,1,2.23.24,1.66,1.66,0,0,1,1,1.39,12,12,0,0,1,0,1.35c-.54,0-1.07,0-1.6,0-.06,0-.16-.16-.17-.25,0-.27,0-.55,0-.82s-.23-.55-.64-.57-.74.15-.83.53a1.44,1.44,0,0,0,.7,1.73l1.54,1A2.35,2.35,0,0,1,26.58,19.17Zm2.48-2.81v5.72c-.57,0-1.11,0-1.64,0-.06,0-.13-.11-.16-.19a.53.53,0,0,1,0-.22c0-2.93,0-5.86,0-8.79,0-.33.07-.48.43-.44a6.81,6.81,0,0,0,1,0c.29,0,.38.07.38.37C29.05,14,29.06,15.17,29.06,16.36ZM35,19.21c0,.39,0,.8,0,1.19a1.84,1.84,0,0,1-1.69,1.8,4.24,4.24,0,0,1-2.18-.11,1.84,1.84,0,0,1-1.39-1.82q0-.68,0-1.35c0-.1.13-.26.2-.26.52,0,1,0,1.61,0,0,.5,0,1,0,1.42,0,.63.32.87.94.81.44,0,.64-.2.69-.64a7.79,7.79,0,0,0,0-1.08,1.12,1.12,0,0,0-.56-.92l-1.65-1.1A3,3,0,0,1,30,13.38a2.15,2.15,0,0,1,.94-.85,3.39,3.39,0,0,1,2.87,0,1.67,1.67,0,0,1,1,1.42,11.22,11.22,0,0,1,0,1.3H33c0-.33,0-.64,0-.94,0-.51-.21-.68-.69-.69s-.76.2-.81.68a1.45,1.45,0,0,0,.73,1.61c.53.3,1,.68,1.52,1A2.37,2.37,0,0,1,35,19.21Zm8.47-6.4c0,.34,0,.67,0,1H41.68v8.23H40c-.07,0-.15-.1-.18-.18a.93.93,0,0,1,0-.29V13.87H38.1V12.46l.33,0h4.64C43.37,12.43,43.46,12.52,43.44,12.81Zm5.13,9.12c0,.05-.12.15-.19.15H43.79V12.45h4.63v1.49H45.6v2.21h2.68c0,.48,0,.9,0,1.32,0,.07-.2.19-.31.19-.63,0-1.27,0-1.91,0h-.43v2.89h3C48.58,21,48.59,21.49,48.57,21.93Zm4.66.15c-.1,0-.23-.17-.27-.29-.3-.83-.58-1.67-.86-2.51l-.16-.42c-.33.95-.66,1.81-.92,2.7a.64.64,0,0,1-.79.54c-.43,0-.87,0-1.37,0,.08-.2.13-.36.2-.52.58-1.4,1.16-2.81,1.76-4.2a1,1,0,0,0,0-.85c-.53-1.21-1-2.43-1.55-3.64l-.16-.44c.64,0,1.23,0,1.82,0,.09,0,.2.16.24.28.26.73.51,1.48.84,2.23l.33-1c.15-.43.3-.85.43-1.28a.37.37,0,0,1,.4-.3c.54,0,1.08,0,1.69,0-.09.22-.15.38-.22.54-.52,1.24-1.06,2.47-1.56,3.72a.94.94,0,0,0,0,.62c.58,1.45,1.2,2.88,1.8,4.32.05.12.09.25.17.45C54.4,22.09,53.81,22.11,53.23,22.08Zm7.27-9.27c0,.33,0,.67,0,1.06H58.73v8.22c-.58,0-1.11,0-1.64,0-.06,0-.15-.1-.18-.18a.92.92,0,0,1,0-.29V13.88H55.16V12.44h5C60.41,12.43,60.53,12.5,60.5,12.81Zm7.71,9.25c-.1,0-.2,0-.29,0-1.25,0-2.5,0-3.74,0-.25,0-.35-.06-.35-.33,0-3,0-6,0-9a2.5,2.5,0,0,1,0-.25h1.76v8.12h2.59Zm2.25-4.75c0,1.47,0,2.94,0,4.41,0,.29-.08.4-.38.38a9.19,9.19,0,0,0-1,0c-.31,0-.4-.08-.4-.39,0-2.5,0-5,0-7.49,0-.5,0-1,0-1.49,0-.21.07-.29.28-.29.38,0,.77,0,1.16,0s.38.08.38.38C70.45,14.31,70.46,15.81,70.46,17.31Zm5.73,4.8a10.16,10.16,0,0,0-1.46,0c-.3,0-.4-.11-.46-.39q-.7-3-1.43-6a1.09,1.09,0,0,0-.13-.34l.15,6.72c-.53,0-1,0-1.52,0-.07,0-.18-.18-.19-.28,0-.61,0-1.22,0-1.83q0-3.54,0-7.07c0-.36.09-.48.46-.46s1,0,1.53,0c.27,0,.36.09.42.34.48,2,1,4,1.45,5.92l.09.34h0c0-2.08-.09-4.16-.15-6.23,0-.3.08-.37.35-.36.42,0,.84,0,1.29,0,0,.17,0,.31,0,.44,0,2.92,0,5.84,0,8.76C76.64,22,76.56,22.13,76.19,22.11Zm6-.15c0,.05-.14.13-.22.13-1.46,0-2.91,0-4.37,0-.08,0-.16-.14-.21-.23s0-.12,0-.18c0-2.94,0-5.89,0-8.83,0-.33.09-.42.42-.42q2,0,3.93,0c.3,0,.39.1.38.39s0,.72,0,1.13H79.25v2.2H81.9v1.51H79.26v2.9h3C82.23,21.05,82.23,21.5,82.22,22Zm5.23,3.22h-1.8V9.6h1.8Z"
                                                    style={{fill:"#565b73"}}></path>
                                            </svg>
                                        </a></div>
                                    </div>
                                    <div className="content-slide -red"
                                         style={{opacity: "1", transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                                        <div className="_name">David Ganey</div>
                                        <div className="_text">Uses Twilio SMS to close deals faster.</div>
                                        <div className="_link"><a>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.35 21.57"><title>
                                                Artboard 50</title>
                                                <path
                                                    d="M42,4.26a11.72,11.72,0,0,0-6.24-1.33H30.65V19.86H36a12.43,12.43,0,0,0,4.82-.75,6.07,6.07,0,0,0,3.12-2.65A9.21,9.21,0,0,0,45,11.54a12.32,12.32,0,0,0-.66-4.45A7.23,7.23,0,0,0,42,4.26Zm-1.42,10a3,3,0,0,1-1.23,1.89,5.2,5.2,0,0,1-3,.76h-1.9V5.58H36a5,5,0,0,1,3.4.85,4.23,4.23,0,0,1,1.23,1.8A13,13,0,0,1,41,11.16,9.86,9.86,0,0,1,40.58,14.28Zm6.72,5.49h3.78V12.58h4.54V9.74H51.08V5.58H58V2.84H47.3Zm13.24,0h3.78V2.84H60.54ZM81.35,2.84H77.47v9.74L70.28,2.84H67.16V19.77H71v-10l7.09,10h3.22ZM16.08,20.43c-.28-.19-.66-.38-1.51-1.89l-1.8-2.84-2.08-3.4L10.5,12c.1,0,.19-.09.29-.09,2.36-.85,3.78-2.93,3.78-6.06a5.06,5.06,0,0,0-1.8-4c-.19-.19-.38-.28-.47-.47C10.69.38,8.52,0,5.68,0H.29C0,0-.09.19.1.38s.28.38.28.94v17a2.88,2.88,0,0,1-.28,1c-.19.19-.1.38.28.38H4.26V12.58h1.8l1.23,2.18L8.8,17.4l.76,1.33c.85,1.51,1.7,2.46,3.12,2.65.19,0,.85.19,1.23.19h.28a3.25,3.25,0,0,0,1.52-.38.31.31,0,0,1,.18-.1C16.46,20.81,16.27,20.53,16.08,20.43ZM6.81,9.74H4.26V2.84H6.81a3.8,3.8,0,0,1,2.84.85,1.37,1.37,0,0,1,.57.85,4.07,4.07,0,0,1,.28,1.61C10.6,7,10.5,9.74,6.81,9.74ZM21.1,12.58h4.54V9.74H21.1V5.58H28V2.84H17.22V19.77H27.91V16.93H21V12.58Z"
                                                    style={{fill:" #565b73"}}></path>
                                            </svg>
                                        </a></div>
                                    </div>
                                    <div className="content-slide -green active"
                                         style={{opacity: '0.985421', transform: 'translate3d(0.583146px, 0px, 0px)'}}>
                                        <div className="_name">Mai Le</div>
                                        <div className="_text">Drives hyper-growth in 77 countries with Twilio.</div>
                                        <div className="_link"><a  className="logo-uber">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="165.8" height="34.7"
                                                 viewBox="34.2 383 165.8 34.7">
                                                <path
                                                    d="M60.2 383.9V403c0 6.4-2.8 9-9.4 9s-9.4-2.6-9.4-9v-19.9H35c-.6 0-.8.3-.8.8v19.4c0 10.7 6.8 14.4 16.7 14.4 9.9 0 16.7-3.7 16.7-14.4v-20.2h-6.4c-.8 0-1 .3-1 .8zm92.4 4.7c.5 0 .8-.2.9-.6l1.8-4.6c.1-.3 0-.4-.3-.4h-25.7c-2.4 0-3.3.7-3.3 2.4v29.7c0 1.4.7 2 2.5 2h23.9c.5 0 .8-.2.9-.6l1.8-4.6c.1-.3 0-.4-.3-.4h-21.9v-6c0-2.1 1.2-3 4.3-3h9.5c.5 0 .8-.2.9-.6l1.8-4.4c.1-.3 0-.4-.3-.4h-16.2v-8.5h19.7zm-45.2 10.6c2.8-1.5 3.9-4.2 3.9-7.5 0-7.5-6.1-8.6-12.5-8.6H84.3c-2.4 0-3.3.7-3.3 2.4v29.7c0 1.4.7 2 2.5 2h17.8c6.7 0 11.5-2.6 11.5-9.4.2-4.1-1.6-7.6-5.4-8.6zm-19.3-10.6h11.3c3.8 0 4.8 1.4 4.8 4.4 0 2.9-1 4.4-4.8 4.4H88.1v-8.8zm12.6 23.1H88.1v-6.2c0-2.1 1.1-3 4.3-3h8.3c4 0 5.1 1.5 5.1 4.7 0 3-1.1 4.5-5.1 4.5zm99.2 4.9l-7.6-13.1c3.8-1 6.9-3.5 6.9-9.9 0-8.3-5.1-10.5-13.6-10.5H171c-2.4 0-3.3.7-3.3 2.4v30.8c0 .6.3.8.8.8h6.2v-9.9c0-2.1 1.2-3 4.3-3h6.3l6.9 12.4c.2.3.4.6.9.6h6.5c.5-.1.5-.4.3-.6zm-13.3-17.7h-11.8v-10.3h11.8c4.4 0 5.4 1.7 5.4 5.2 0 3.4-1 5.1-5.4 5.1z"></path>
                                            </svg>
                                        </a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-wrapper">
                                <div className="slider slick-initialized slick-slider">
                                    <button className="slick-prev slick-arrow" aria-label="Previous" type="button" >
                                        Previous
                                    </button>
                                    <div className="slick-list draggable">
                                        <div className="slick-track" style={{opacity: '1', width: '4025px'}}>
                                            <div className="slick-slide" data-slick-index="0" aria-hidden="true"
                                                 style={{width: '805px', position: 'relative', left: '0px', top: '0px', zIndex: '998', opacity: '0', transition: 'opacity 500ms ease 0s'}}
                                                 tabIndex="-1">
                                                <div>
                                                    <div
                                                        style={{width:" 100%", display:" inline-block"}}>
                                                        <div className="slide">
                                                            <div className="headshot"
                                                                style={{opacity:' 1', transform:' matrix(1, 0, 0, 1, 0, 0)'}}>
                                                                <img
                                                                    src="/marketing/bundles/homepage/img/carousel/jacinda-shelly.png"
                                                                    alt="Jacinda Shelly"/></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slick-slide" data-slick-index="1" aria-hidden="true"
                                                 style={{width: '805px', position: 'relative', left: '-805px', top: '0px',zIndex: '998',opacity: '0', transition: 'opacity 500ms ease 0s'}}
                                                 tabIndex="-1">
                                                <div>
                                                    <div style={{width:" 100%", display:" inline-block"}}>
                                                        <div className="slide">
                                                            <div className="headshot"
                                                                style={{opacity:' 1', transform:' matrix(1, 0, 0, 1, 0, 0)'}}>
                                                                <img
                                                                    src="/marketing/bundles/homepage/img/carousel/devlin-oneil.png"
                                                                    alt="Devlin O'Neil"/></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slick-slide" data-slick-index="2" aria-hidden="true"
                                                 style={{width: '805px', position: 'relative', left: '-1610px', top: '0px', zIndex: '998', opacity: '0', transition: 'opacity 500ms ease 0s'}}
                                                 tabIndex="-1">
                                                <div>
                                                    <div style={{width:" 100%", display:" inline-block"}}>
                                                        <div className="slide">
                                                            <div className="headshot"
                                                                style={{opacity:' 1', transform:' matrix(1, 0, 0, 1, 0, 0)'}}>
                                                                <img
                                                                    src="/marketing/bundles/homepage/img/carousel/nancy-lublin.png"
                                                                    alt="Nancy Lublin"/></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slick-slide" data-slick-index="3" aria-hidden="true" style={{width: '805px', position: 'relative', left: '-2415px', top: '0px', zIndex: '998', opacity: '0', transition: 'opacity 500ms ease 0s'}}
                                                 tabIndex="-1">
                                                <div>
                                                    <div style={{width:" 100%", display:" inline-block"}}>
                                                        <div className="slide">
                                                            <div className="headshot"
                                                                style={{opacity:' 1', transform:' matrix(1, 0, 0, 1, 0, 0)'}}>
                                                                <img
                                                                    src="/marketing/bundles/homepage/img/carousel/david-ganey.png"
                                                                    alt="David Ganey"/></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slick-slide slick-current slick-active" data-slick-index="4"
                                                 aria-hidden="false"
                                                 style={{width: '805px', position: 'relative', left: '-3220px', top: '0px', zIndex: '999', opacity: '1'}}

                                            >
                                                <div>
                                                    <div style={{width:" 100%", display:" inline-block"}}>
                                                        <div className="slide">
                                                            <div className="headshot"
                                                                 style={{opacity: '0.990816', transform:' translate3d(0.367359px, 0px, 0px)'}}>
                                                                <img
                                                                    src="/marketing/bundles/homepage/img/carousel/mai-le.png"
                                                                    alt="Mai Le"/></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="slick-next slick-arrow" aria-label="Next" type="button" >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           
    )
    }
    }
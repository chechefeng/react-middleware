import React, {Component} from 'react'
import "./css/homepage.css"
export  default class Part4 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="section two-column _demo -stacked -border">
                <div className="container">
                    <div className="content ">
                        <div className="demo demo--expired" role="demo" data-step="1">
                            <header className="h1-small -red text-center">Take your ideas from localhost to the world
                            </header>
                            <h2 className="h2 text-center">Bringing your idea to life is easier with the right tools.
                                Deploy
                                it into reality with a few lines of code.</h2>
                            <div className="demo__intro text-center">Text the phrase <span role="keyword"
                                                                                           className="keyword"><span>kind lemur</span></span>
                                to <span role="phoneNumber" className="number"><span>(323) 992-0315</span></span>.
                            </div>
                            <div className="demo__container"><span className="demo__notification"><header>Notice: session expired</header><p>To generate a new keyword, please refresh this page.</p></span>
                                <div className="demo__description">
                                    <header>
                                        <div className="demo__links"><a  role="step" data-prev="">Prev</a><a
                                             role="step" data-next="">Next</a></div>
                                        <ul className="demo__pagination" role="pagination">
                                            <li data-step="1"></li>
                                            <li data-step="2"></li>
                                            <li data-step="3"></li>
                                            <li data-step="4"></li>
                                        </ul>
                                    </header>
                                    <div className="demo__instructions"><p>Let's write your first Twilio code.</p><p>Use
                                        your mobile phone to send an SMS with the phrase "<em role="keyword"><span>kind lemur</span></em>"
                                        to <em role="phoneNumber"><span>(323) 992-0315</span></em>. You should receive a
                                        reply which says "<a >Ahoy,
                                            world!</a>"</p><p>Awesome! Now let’s learn how to reply to messages.</p><p>
                                        Next: <a role="step" data-next="">Introduction to TwiML</a></p>
                                    </div>
                                    <div className="demo__instructions"><p>The code <span className="two-col-visible">to the left</span><span
                                        className="one-col-visible">below</span> is <a
                                        >TwiML</a>, the Twilio Markup Language. You use TwiML to tell
                                        Twilio how to respond to incoming text messages and phone calls.</p><p>The <a>&lt;Message&gt; TwiML
                                        element</a> replies to incoming text messages. Let’s edit this TwiML to
                                        personalize the message, like "Hi [your name]!" Spice the message up with an
                                        emoji. "Greetings human 🤖".</p><p>Send any message to your phone number and
                                        you’ll see your new reply.</p><p>Next: <a  role="step" data-next="">TwiML
                                        templating</a></p></div>
                                    <div className="demo__instructions"><p>When your app gets a text, Twilio asks your
                                        app
                                        how to respond and <a >includes
                                            data about the incoming message</a> like the message’s contents and the
                                        phone number it was sent from.</p><p>Try accessing that data in your TwiML. Use
                                        double curly braces to include the variable in your response. Here are a few you
                                        can try: Body, From, FromCountry.</p><p>When you build your
                                        Twilio app, you’ll use these fields with your own code to power personalized
                                        conversations with your users.</p><p>Next: <a data-next="">Beyond TwiML</a></p>
                                    </div>
                                    <div className="demo__instructions"><p>Congrats! You now know the basics of using
                                        TwiML.</p><p>TwiML is just one way to send text messages with Twilio. You can
                                        send outbound messages anytime you want using our <a >HTTP API
                                            or our SDK for your programming language</a>.</p><p><a >Sign
                                        up for your free Twilio account</a> and you’ll have your own Twilio number.
                                        Next, <a >play through TwilioQuest</a> to unlock the secrets of
                                        Twilio’s advanced features.</p><p>We can't wait to see what you build.</p></div>
                                </div>
                                <div className="demo__code">
                                    <ul className="code">
                                        <li className="code__line green">&lt;Response&gt;</li>
                                        <li className="code__line">
                                            <span className="red">&lt;Message&gt;</span>
                                            <span className="code__editable" contentEditable="true"
                                            role="code">Ahoy, world!</span>
                                            <span className="red">&lt;/Message&gt;</span>
                                        </li>
                                        <li className="code__line green">&lt;/Response&gt;</li>
                                    </ul>
                                    <ul className="demo__log" role="log">
                                        <li className="placeholder">Your logs will appear here...</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-padding-top text-center"><a className="button -red -big" >
                        Start building

                    </a></div>
                </div>
            </section>
        )
    }
}
import React, {Component} from 'react'
import "./css/homepage.css"
export  default class Part8 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="section form-card _fsr-form -stacked">
                <div className="container">
                    <div className="heading text-center"><h2 className="h1-small -red">
                        Talk to Sales
                    </h2><p className="h2">
                        Our experts love to answer questions.<br/>
                        Fill out the form below.

                    </p></div>
                    <div className="card">
                        <div className="_content col-left"><h2 className="_heading">We’re here to help</h2>
                            <ul className="_list">
                                <li>Find the right solution for you</li>
                                <li>Explain options for pricing</li>
                                <li>Connect you with helpful resources</li>
                            </ul>
                        </div>
                        <div className="_content col-right">
                            <div className="archetype-form__container archetype-form__container--form-480"
                                 role="form">
                                <div className="form__fields">
                                    <form id="480">
                                        <div id="formElement9031" className="form__group">
                                            <input type="text"
                                                   //id="firstName"
                                                   //name="field_9031"
                                                   //required=""
                                                  // data-parsley-required-message="This field is required"
                                                   className="empty"
                                            />
                                            <label>First Name</label>
                                        </div>
                                        <div id="formElement9032" className="form__group">
                                            <input type="text"
                                                   id="lastName"
                                                   name="field_9032"
                                                   required=""
                                                   data-parsley-required-message="This field is required"
                                                   className="empty"/><label>Last
                                            Name</label></div>
                                        <div id="formElement9033" className="form__group">
                                            <input type="email"
                                                   id="emailAddress"
                                                   name="field_9033"
                                                   required=""
                                                   data-parsley-required-message="This field is required"
                                                   className="empty"/>
                                            <label>Email</label>
                                        </div>
                                        <div id="formElement9034" className="form__group">
                                            <input type="text"
                                                   id="company"
                                                   name="field_9034"
                                                   required=""
                                                   data-parsley-required-message="This field is required"
                                                   className="empty"/>
                                            <label>Company</label>
                                        </div>
                                        <div id="formElement9035" className="form__group">
                                            <input type="text"
                                                   id="title"
                                                   name="field_9035"
                                                   required=""
                                                   data-parsley-required-message="This field is required"
                                                   className="empty"/><label>Job
                                            Title</label></div>
                                        <div id="formElement9036" className="form__group">
                                            <input type="tel"
                                                   id="phoneNumber"
                                                   name="field_9036"
                                                   className="empty"
                                                   data-parsley-pattern="^[0-9\)\(+._-\s]{8,15}$"
                                                   data-parsley-pattern-message="This should be a valid phone number"/>
                                            <label>Phone
                                                Number</label></div>
                                        <div id="formElement9037"
                                             className="form__group form__group--select form__group--country">
                                            <select
                                                id="country"
                                                name="field_9037"
                                                data-parsley-required=""
                                                data-parsley-required-message="This field is required" tabIndex="-1"
                                                style={{display: ' none'}}
                                                className="selectized">
                                                <option value=""></option>
                                            </select>
                                            <div className="selectize-control single">
                                                <div className="selectize-input items not-full has-options">
                                                    <input
                                                        type="text" autoComplete="off" tabIndex=""
                                                        id="country-selectized" placeholder="– Please Select –"
                                                        style={{width: '119.797px'}}/></div>
                                                <div className="selectize-dropdown single"
                                                     style={{
                                                         display: 'none',
                                                         width: '500px',
                                                         top: '34px',
                                                         left: '0px'
                                                     }}>
                                                    <div className="selectize-dropdown-content"></div>
                                                </div>
                                                <label>Country</label></div>
                                        </div>
                                        <div id="formElement9038"
                                             className="form__group form__group--select form__group--state"
                                             style={{display: ' none'}}>
                                            <select
                                                id="state"
                                                name="field_9038"
                                                tabIndex="-1"
                                                className="selectized">
                                                <option value="">北京</option>
                                                <option value="">天津</option>
                                                <option value="">上海</option>
                                            </select>
                                            <div className="selectize-control single">
                                                <div className="selectize-input items not-full has-options">
                                                    <input
                                                        type="text" autoComplete="off" tabIndex=""
                                                        id="state-selectized"
                                                        placeholder="-- Please Select --"
                                                        style={{width: "129.516px"}}/>
                                                </div>
                                                <div className="selectize-dropdown single"
                                                     style={{display: 'none', width: "0px", top: "34px", left: "0px"}}>
                                                    <div className="selectize-dropdown-content"></div>
                                                </div>
                                                <label>State</label></div>
                                        </div>

                                        <input
                                            type="hidden"
                                            id="utm_medium" name="field_9039" value=""/>
                                        <input
                                            type="hidden"
                                            id="utm_source" name="field_9040" value=""/>
                                        <input
                                            type="hidden"
                                            id="utm_campaign" name="field_9041"
                                            value=""/>
                                        <input
                                            type="hidden"
                                            id="utm_term" name="field_9042" value=""/>
                                        <input
                                            type="hidden"
                                            id="utm_content" name="field_9043" value=""/>
                                        <input
                                            type="hidden" id="C_DB__Annual_Sales1" name="field_9044"
                                            value=""/>
                                        <input
                                            type="hidden"
                                            id="C_DB__City1" name="field_9045" value=""/>
                                        <input
                                            type="hidden" id="C_DB__Company_Name1" name="field_9046"
                                            value=""/>
                                        <input
                                            type="hidden" id="C_DB__Country1" name="field_9047"
                                            value=""/>
                                        <input
                                            type="hidden" id="C_DB__Employee_Count1" name="field_9048"
                                            value=""/>
                                        <input type="hidden" id="C_DB__Fortune_10001"
                                               name="field_9049"
                                               value=""/>
                                        <input type="hidden"
                                               id="C_DB__Industry1"
                                               name="field_9050"
                                               value=""/>
                                        <input
                                            type="hidden" id="C_DB__Phone1" name="field_9051"
                                            value=""/>
                                        <input
                                            type="hidden" id="C_DB__State1" name="field_9052"
                                            value=""/>
                                        <input
                                            type="hidden" id="C_DB__Street_Address1" name="field_9053"
                                            value=""/>
                                        <input type="hidden" id="C_DB__Sub_Industry1"
                                               name="field_9054"
                                               value=""/>
                                        <input type="hidden"
                                               id="C_DB__Watch_Tags2"
                                               name="field_9055"
                                               value=""/>
                                        <input
                                            type="hidden" id="C_DB__Website1" name="field_9056"
                                            value=""/>
                                        <input
                                            type="hidden" id="C_DB__Zip1"
                                            name="field_9057" value=""/>
                                        <div id="formElement9058"
                                             className="form__group form__group--select form__group--product">
                                            <select id="product" name="field_9058" tabIndex="-1"
                                                    style={{display: ' none'}} className="selectized">
                                                <option value=""></option>
                                            </select>
                                            <div className="selectize-control single">
                                                <div
                                                    className="selectize-input items not-full has-options">
                                                    <input
                                                        type="text" autoComplete="off" tabIndex=""
                                                        id="product-selectized"
                                                        placeholder="-- Please Select a Product --"
                                                        style={{width: '200.891px'}}/>
                                                </div>
                                                <div className="selectize-dropdown single"
                                                     style={{
                                                         display: 'none',
                                                         width: '500px',
                                                         top: '34px',
                                                         left: ' 0px'
                                                     }}>
                                                    <div className="selectize-dropdown-content"></div>
                                                </div>
                                                <label>Product</label></div>
                                        </div>
                                        <div id="formElement9059"
                                             className="form__group form__group--button">
                                            <button type="submit" id="submit" className="button"
                                                    name="field_9059"
                                                    value="Let's Talk">
                                                Let's Talk
                                            </button>
                                        </div>


                                    </form>
                                </div>
                                <div className="form__success" role="success"><h3 className="form__success-title">
                                    Thank
                                    you</h3>
                                    <div className="form__success-message">
                                        Your message has been sent. We'll get back to you as soon as possible.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
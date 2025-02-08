const Contact = () => {
    return (

        <div className="rn-contact-area rn-section-gap section-separator" id="contact-me">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <h4 className="maintitle" style={{ color: "#F7024E" }}>CONTACT WITH ME</h4>
                        </div>
                    </div>
                </div>

                <div className="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm">
                    <div data-aos-delay="600" className="col-lg-12 contact-input">
                        <div className="contact-form-wrapper">
                            <div className="introduce">

                                <form className="rnt-contact-form rwt-dynamic-form row" id="contact-form" method="POST"
                                    action="mail.php">
                                    <div className="col-lg-6 row">

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label id="contact-name">Your Name</label>
                                                <input className="form-control form-control-lg" name="contact-name"
                                                    id="contact-name" type="text" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label id="contact-phone">Phone Number</label>
                                                <input className="form-control" name="contact-phone" id="contact-phone"
                                                    type="text" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label id="contact-email">Email</label>
                                                <input className="form-control form-control-sm" id="contact-email"
                                                    name="contact-email" type="email" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label id="subject">subject</label>
                                                <input className="form-control form-control-sm" id="subject" name="subject"
                                                    type="text" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row col-lg-6">
                                        <div className="form-group">
                                            <label id="contact-message">Your Message</label>
                                            <textarea name="contact-message" id="contact-message" cols={30}
                                                rows={14}></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <button name="submit" type="submit" id="submit" className="rn-btn">
                                            <span>SEND MESSAGE</span>
                                            <i data-feather="arrow-right"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
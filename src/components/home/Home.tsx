const Home = () => {
    return (
        <>
            <div id="home" className="rn-slider-area">
                <div className="slide slider-style-1">
                    <div className="container">
                        <div className="row row--30 align-items-center">
                            <div className="order-2 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30">
                                <div className="content">
                                    <div className="inner">
                                        <h1 className="title">Hi, I’m <span>Deepak</span><br />
                                            <span className="header-caption" id="page-top">
                                                <span className="cd-headline clip is-full-width">
                                                    <span>a </span>
                                                    <span className="cd-words-wrapper">
                                                        <b className="is-visible">Full Stack Developer.</b>
                                                        <b className="is-hidden">Frontend Developer.</b>
                                                        <b className="is-hidden">Backend Developer.</b>
                                                    </span>
                                                </span>
                                            </span>
                                        </h1>

                                        <div>
                                            <p className="description">With a comprehensive skill set in MongoDB, Express.js,
                                                React, and Node.js, I engineer robust and adaptable web solutions, ensuring
                                                seamless functionality and user satisfaction at every stage of development.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12">
                                            <div className="social-share-inner-left">
                                                <div>
                                                    <ul className="social-share d-flex liststyle">
                                                        <li className="facebook">
                                                            <a href="#">
                                                                Download CV
                                                                <i data-feather="download" style={{ color: "f7024e" }}></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="order-1 order-lg-2 col-lg-5">
                                <div className="thumbnail">
                                    <div className="inner">
                                        <img width="400px" src="/src/assets/images/slider/banner-01.png"
                                            alt="Personal Portfolio Images" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
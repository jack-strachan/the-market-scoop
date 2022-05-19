import React, {Component} from "react";
import Navbar from "../components/Navbar";
import phones from "../images/phones1.png";
import SvgTwitter from "../icons/Twitter";
import {Collapse} from "react-collapse/lib/Collapse";
import AnswerCollapse from "../components/AnswerCollapse";
import SvgFacebook from "../icons/Facebook";
import logo from "../images/logo.png";
import SvgCheck from "../icons/Check";
import SvgZap from "../icons/Zap";
import SvgTarget from "../icons/Target";
import SvgLock from "../icons/Lock";
import SvgSmile from "../icons/Smile";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import Modal from "../components/Modal";
import SignUpModal from "../components/Modal";
import Marquee from "react-fast-marquee";
import SplashTop from "../sections/SplashTop";
import Features from "../sections/Features";
import Plans from "../sections/Plans";
import Testimonials from "../sections/Testimonials";
import FAQ from "../sections/FAQ";
import Footer from "../sections/Footer";
import {NAV_TABS, TESTIMONIALS2} from "../consts/consts";
import NavbarMobile from "../components/NavbarMobile";
import NavMenuMobile from "../components/NavMenuMobile";
import TestimonialCard from "../components/TestimonialCard";

class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: "home",
            scrollPosition: 0,
            modalOpen: false,
            isPaidModal: true,
            mobile: false,
            tablet: false,
            mobileMenu: false,
            isCancel: false,
        };
        this.topRef = React.createRef();
        this.aboutRef = React.createRef();
        this.plansRef = React.createRef();
        this.testimonialsRef = React.createRef();
        this.faqRef = React.createRef();
    }

    scrollTo = (route) => {
        if (route === "top") {
            this.topRef.current.scrollIntoView({behavior: "smooth"});
        }
        if (route === "about") {
            this.aboutRef.current.scrollIntoView({behavior: "smooth"});
        }
        if (route === "plans") {
            this.plansRef.current.scrollIntoView({behavior: "smooth"});
        }
        if (route === "testimonials") {
            this.testimonialsRef.current.scrollIntoView({behavior: "smooth"});
        }
        if (route === "faq") {
            this.faqRef.current.scrollIntoView({behavior: "smooth"});
        }
    };

    componentDidMount() {
        window.addEventListener("scroll", this.listenToScroll);
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        this.setState({
            mobile: window.innerWidth <= 760,
            tablet: window.innerWidth >= 660 && window.innerWidth <= 1200,
        });
    }

    listenToScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        const aboutRef = this.aboutRef.current.offsetTop + window.innerHeight;
        const plansRef = this.plansRef.current.offsetTop + window.innerHeight;
        const faqRef = this.faqRef.current.offsetTop + window.innerHeight;
        this.setState({
            scrollPosition: winScroll,
            activeTab:
                winScroll < 100
                    ? "home"
                    : winScroll < aboutRef
                    ? "about"
                    : winScroll < plansRef
                        ? "plans"
                        : "faq",
        });
    };

    render() {
        return (
            <div style={{width: '100%', overflowX: 'hidden'}}>
                {this.state.mobile ? (
                    <div className="relative">
                        <NavMenuMobile
                            onClickClose={() => this.setState({mobileMenu: false})}
                            scrollTo={this.scrollTo}
                            mobileMenu={this.state.mobileMenu}
                        />
                        <NavbarMobile
                            onClickLogo={() => this.scrollTo("top")}
                            onClickMenu={() => this.setState({mobileMenu: true})}
                        />
                    </div>
                ) : (
                    <Navbar
                        scrollTo={this.scrollTo}
                        activeTab={this.state.activeTab}
                        tabs={NAV_TABS}
                        scrollPosition={this.state.scrollPosition}
                    />
                )}
                <div ref={this.topRef}>
                    <SplashTop
                        scrollToPlans={() => this.scrollTo("plans")}
                        mobile={this.state.mobile}
                    />
                </div>
                {!this.state.mobile &&
                <div className='row-ac-jc mt-60' style={{marginBottom: -30}}>
                    <div style={{opacity: .7, fontSize: 28, fontWeight: 600}}>
                        Sign up today and get your first week free!
                    </div>
                </div>
                }
                <div ref={this.aboutRef}>
                    <Features mobile={this.state.mobile}/>
                </div>
                <div ref={this.plansRef}>
                    <Plans
                        mobile={this.state.mobile}
                        openModal={(isCancel = false, isPaidModal = false) =>
                            this.setState({modalOpen: true, isPaidModal, isCancel})
                        }
                    />
                </div>
                <div ref={this.testimonialsRef}>
                    <Testimonials mobile={this.state.mobile}/>
                </div>
                <div ref={this.faqRef}>
                    <FAQ mobile={this.state.mobile}/>
                    <div
                        className='mb-40'
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <button
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            onClick={() =>
                                this.setState({
                                    modalOpen: true,
                                    isCancel: true,
                                })
                            }
                            className={"blue-button"}
                        >
                            Cancel my plan
                        </button>
                    </div>
                </div>
                <Footer mobile={this.state.mobile}/>
                <SignUpModal
                    toggle={() => this.setState({modalOpen: !this.state.modalOpen})}
                    isPaidModal={this.state.isPaidModal}
                    isOpen={this.state.modalOpen}
                    mobile={this.state.mobile}
                    isCancel={this.state.isCancel}
                />
            </div>
        );
    }
}

export default Splash;

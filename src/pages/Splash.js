import React, {Component} from "react";
import Navbar from "../components/Navbar";
import phones from '../images/phones1.png'
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
import {NAV_TABS} from "../consts/consts";
import NavbarMobile from "../components/NavbarMobile";
import NavMenuMobile from "../components/NavMenuMobile";

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
            mobileMenu: false
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
            tablet: (window.innerWidth >= 660 && window.innerWidth <= 1200)
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
            <div>
                {this.state.mobile ?
                    <div className='relative'>
                        <NavMenuMobile
                            onClickClose={() => this.setState({mobileMenu: false})}
                            scrollTo={this.scrollTo}
                            mobileMenu={this.state.mobileMenu}
                        />
                        <NavbarMobile
                            onClickLogo={() => this.scrollTo('top')}
                            onClickMenu={() => this.setState({mobileMenu: true})}
                        />
                    </div>
                    :
                    <Navbar scrollTo={this.scrollTo} activeTab={this.state.activeTab} tabs={NAV_TABS}
                            scrollPosition={this.state.scrollPosition}/>
                }
                <div ref={this.topRef}>
                    <SplashTop
                        scrollToPlans={() => this.scrollTo('plans')}
                        mobile={this.state.mobile}
                    />
                </div>
<<<<<<< HEAD
              </div>
            </ScrollAnimation>
            <img src={phones} className="phones" />
          </section>
        </div>
        <section
          ref={this.aboutRef}
          style={{ backgroundColor: "#1E2029", padding: "10% 15% 10% 15%" }}
          className="row-ac-jb"
        >
          <div className="mr-52">
            <h2 className="big-head mb-0">
              Another tagline should go right here
            </h2>
            <p className="o5 mt-16 mb-32">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              imperdiet orci non sem placerat commodo. Nam dui libero, molestie
              tempus ligula non, consectetur malesuada magna.
            </p>
            <button className="mr-16 blue-button">Get Started</button>
          </div>
          <div>
            <div className="row-ac">
              {CARDS_1.map((card, i) => (
                <ScrollAnimation
                  animateIn="fadeInUp"
                  delay={i === 0 ? 50 : 100}
                  style={{ flex: 1 }}
                >
                  <div className="splash-card">
                    {i === 0 ? (
                      <SvgZap
                        height={80}
                        width={80}
                        className="mb-20"
                        style={{ color: "#2DCA8C" }}
                      />
                    ) : (
                      <SvgTarget
                        height={80}
                        width={80}
                        className="mb-20"
                        style={{ color: "#FFBE3D" }}
                      />
                    )}
                    <div className="headline mb-8">{card.title}</div>
                    <div className="o5">{card.description}</div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
            <div className="row-ac">
              {CARDS_2.map((card, i) => (
                <ScrollAnimation
                  animateIn="fadeInUp"
                  delay={i === 0 ? 150 : 200}
                  style={{ flex: 1 }}
                >
                  <div className="splash-card">
                    {i === 0 ? (
                      <SvgLock
                        height={80}
                        width={80}
                        className="mb-20"
                        style={{ color: "#F54379" }}
                      />
                    ) : (
                      <SvgSmile
                        height={80}
                        width={80}
                        className="mb-20"
                        style={{ color: "#367DFF" }}
                      />
                    )}
                    <div className="headline mb-8">{card.title}</div>
                    <div className="o5">{card.description}</div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
        <section
          ref={this.plansRef}
          className="col-ac-jc relative"
          style={{ padding: "10% 15% 10% 15%" }}
        >
          <div className="gradient-bg" />
          <div className="text-center">
            <h1 className="big-head mb-0">Pick the plan thats best for you</h1>
            <p className="o5 mb-64">
              Upgrade, downgrade, or cancel at any time. All you need is a phone
              number to get started.
            </p>
          </div>
          <div className="row-plain">
            {PLANS.map((plan, i) => (
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={i === 0 ? 0 : 50}
                style={{ flex: 1, display: "flex" }}
              >
                <div className="plan-card">
                  <div>
                    <p className="headline mt-0 mb-12">{plan.title}</p>
                    <p className="big-head mt-0 mb-20">
                      {plan.price}
                      <span className="o5 big-subhead">{plan.term}</span>
                    </p>
                    <div>
                      <ul>
                        {plan.features.map((feature) => (
                          <li className="row-plain mb-8">
                            <div style={{ minWidth: 16, flex: 1 }}>
                              <SvgCheck fill={!feature.unlocked && "grey"} />
                            </div>
                            <div style={{ flex: 20 }}>
                              <p className="ml-16 mt-4">{feature.title}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-32">
                    <button
                      onClick={() =>
                        this.setState({
                          modalOpen: true,
                          isPaidModal: plan.title !== "Basic",
                          isCancel: false
                        })
                      }
                      className={
                        plan.title === "Basic" ? "grey-button" : "blue-button"
                      }
                    >
                      {plan.title === "Basic"
                        ? "Join Basic"
                        : "Become a Member"}
                    </button>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </section>
        {/*<section className='col-ac-jc' style={{padding: '10% 15% 10% 15%'}}>*/}
        {/*    <div className='text-center'>*/}
        {/*        <h1 className='big-head mb-0'>*/}
        {/*            Testimonials*/}
        {/*        </h1>*/}
        {/*        <p className='o5 mb-64'>*/}
        {/*            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet.*/}
        {/*        </p>*/}
        {/*    </div>*/}
        {/*</section>*/}
        <section
          ref={this.faqRef}
          className="col-ac-jc"
          style={{ padding: "10% 15% 10% 15%" }}
        >
          <div className="text-center">
            <h1 className="big-head mb-0">FAQs</h1>
            <p className="o5 mb-64">
              Dont see your answer here? Contact us at _______ with any other
              questions! We're more than happy to help.
            </p>
          </div>
          <ul>
            {FAQ.map((pair, i) => (
              <ScrollAnimation animateIn="fadeInUp" delay={i * 50}>
                <AnswerCollapse key={pair.a} q={pair.q} a={pair.a} />
              </ScrollAnimation>
            ))}
          </ul>
          <button
            onClick={() =>
              this.setState({
                modalOpen: true,
                isCancel: true
              })
            }
            className={"blue-button"}
          >
            Cancel my plan
          </button>
        </section>
        <section
          className="row-ac"
          style={{ padding: "5% 15%", backgroundColor: "#00000030" }}
        >
          <div>
            <div className="row-jb">
              <div style={{ maxWidth: 300 }}>
                <img src={logo} style={{ height: 45 }} />
                <div className="row-ac mt-16">
                  <SvgTwitter className="mr-12" />
                  <SvgFacebook />
=======
                <div ref={this.aboutRef}>
                    <Features mobile={this.state.mobile}/>
                </div>
                <div ref={this.plansRef}>
                    <Plans
                        mobile={this.state.mobile}
                        openModal={() => this.setState({modalOpen: true})}/>
                </div>
                <div ref={this.testimonialsRef}>
                    <Testimonials
                        mobile={this.state.mobile}
                    />
                </div>
                <div ref={this.faqRef}>
                    <FAQ mobile={this.state.mobile}/>
>>>>>>> 4adc1bbe03e3557091862fc5317f2f660dcba5d6
                </div>
                <Footer mobile={this.state.mobile}/>
                <SignUpModal
                    toggle={() => this.setState({modalOpen: !this.state.modalOpen})}
                    isPaidModal={this.state.isPaidModal}
                    isOpen={this.state.modalOpen}
                    mobile={this.state.mobile}
                />
            </div>
            <p className="body3-medium mt-32" style={{ color: "#FFFFFF50" }}>
              With investment, your capital is at risk. The value of your
              portfolio can go down as well as up and you may get back less than
              you invest. Past performance is no guarantee of future results.
              Any historical returns, expected returns, or probability
              projections may not reflect actual future performance. ‍ All
              content/groups/messaging created by Wall St Rank. (“Wall St Rank”)
              is for educational and information purposes only. It is not
              financial, investment, legal, or tax advice. Wall St Rank can not
              and does not make any guarantees about your ability to get results
              or earn any money with our ideas, information, tools, or
              strategies. The author is not a financial advisor nor is he
              responsible for any financial loss you may incur acting on the
              information provided through Wall St Rank. All information in this
              group/newsletter/article/email/tweets etc. is not financial advice
              to buy or sell any security. Please consult a financial advisor
              before making any financial decisions. Use caution and always
              consult your accountant, lawyer or professional advisor before
              acting on this or any information related to a lifestyle change or
              your business or finances. You alone are responsible and
              accountable for your decisions, actions and results in life, and
              by your registration here you agree not to attempt to hold us
              liable for your decisions, actions or results, at any time, under
              any circumstance.
            </p>
          </div>
        </section>
        <SignUpModal
          toggle={() => this.setState({ modalOpen: !this.state.modalOpen })}
          isPaidModal={this.state.isPaidModal}
          isOpen={this.state.modalOpen}
          isCancel={this.state.isCancel}
        />
      </div>
    );
  }
}

export default Splash;

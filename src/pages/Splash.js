import React, { Component } from "react";
import Navbar from "../components/Navbar";
import phones from "../images/phones 1.png";
import SvgTwitter from "../icons/Twitter";
import { Collapse } from "react-collapse/lib/Collapse";
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

const NAV_TABS = [
  {
    tab: "Home",
    route: "home",
  },
  {
    tab: "About",
    route: "about",
  },
  {
    tab: "Plans",
    route: "plans",
  },
  {
    tab: "Testimonials",
    route: "testimonials",
  },
  {
    tab: "FAQ",
    route: "faq",
  },
];

const SPLASH_STATS = [
  {
    top: "8.6k+",
    bottom: "Messages Sent",
  },
  {
    top: "3.4k+",
    bottom: "Members",
  },
  {
    top: "1.2k",
    bottom: "5 Star Reviews",
  },
];

const CARDS_1 = [
  {
    title: "Relevant Tips",
    description:
      "Receive relevant, insightful tips to help guide smarter investments.",
  },
  {
    title: "Hand Curated",
    description:
      "No fluff, all cream. Our team is dedicated to sifting through the junk so you don't have to.",
  },
];

const CARDS_2 = [
  {
    title: "Member Access",
    description:
      "Get exclusive access to the community group chats, open to members 24/7.",
  },
  {
    title: "Money Back Guarantee",
    description: "Don't enjoy the service? Get 7 days to try it out.",
  },
];

const PLANS = [
  {
    title: "Basic",
    price: "Free",
    term: "",
    features: [
      {
        title: "Access to the Market Scoop group chat",
        unlocked: true,
      },
      {
        title:
          "Weekly recap message with top anticipated news on the US Stock Market (upgrades, downgrades, earnings, mergers, announcements and more)",
        unlocked: true,
      },
      {
        title:
          "Weekly recap message with key information on the Crypto-Currency market",
        unlocked: true,
      },
    ],
  },
  {
    title: "Preferred",
    price: "$4.99",
    term: "/mo",
    features: [
      {
        title:
          "Daily message with crucial news on the US Stock Market and Crypto Market",
        unlocked: true,
      },
      {
        title: "Access to the Market Scoop group chat",
        unlocked: true,
      },
      {
        title:
          "Weekly recap message with top anticipated news on the US Stock Market (upgrades, downgrades, earnings, mergers, announcements and more)",
        unlocked: true,
      },
      {
        title:
          "Weekly recap message with key information on the Crypto-Currency market",
        unlocked: true,
      },
      {
        title: "Access to members only group chat channels",
        unlocked: true,
      },
      {
        title: "Catered messaging customized to your needs",
        unlocked: true,
      },
    ],
  },
  // {
  //     title: 'Premium',
  //     price: '$199',
  //     term: '/mo',
  //     features: [
  //         {
  //             title: 'Daily messages to any number',
  //             unlocked: true
  //         },
  //         {
  //             title: 'Catered services customized to your needs',
  //             unlocked: true
  //         },
  //         {
  //             title: '24/7 contact available',
  //             unlocked: true
  //         },
  //         {
  //             title: 'Switch numbers as many times as you like',
  //             unlocked: true
  //         },
  //         {
  //             title: 'Unlock referral rewards',
  //             unlocked: true
  //         },
  //     ]
  // }
];

const FAQ = [
  {
    q: "How long till I start receiving messages after I sign up?",
    a: "You will start receiving messages the next trading day.",
  },
  {
    q: "How can I upgrade from my free plan?",
    a: "Upgrading is easy! Just come back to this site and sign up for the paid plan. Your old number will be migrated upon signup.",
  },
  {
    q: "Do I still need to do my own research?",
    a: "Of course! This service aims to keep members informed with important news and key insights. Its never a good idea to trade blindly without doing the necessary research.",
  },
  {
    q: "Where can I access the members chat?",
    a: "Find us here ___.",
  },
];

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "home",
      scrollPosition: 0,
      modalOpen: false,
      isPaidModal: true,
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
      this.topRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (route === "about") {
      this.aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (route === "plans") {
      this.plansRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (route === "testimonials") {
      this.testimonialsRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (route === "faq") {
      this.faqRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
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
      <div style={{ height: "300vh" }}>
        <Navbar
          scrollTo={this.scrollTo}
          activeTab={this.state.activeTab}
          tabs={NAV_TABS}
          scrollPosition={this.state.scrollPosition}
        />
        <div className="relative" ref={this.topRef}>
          <div className="gradient-bg2" />
          <section
            className="col-ac-jc text-center"
            style={{ padding: "10% 25% 0% 25%" }}
          >
            <h1 className="splash-head mb-16">
              Tagline about the Market Scoop goes here
            </h1>
            <p className="o5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              imperdiet orci non sem placerat commodo. Nam dui libero, molestie
              tempus ligula non, consectetur malesuada magna.
            </p>
            <div className="row-ac-jc mt-20">
              <button
                onClick={() => this.scrollTo("plans")}
                className="mr-16 blue-button"
              >
                View Plans
              </button>
              <button
                onClick={() => this.scrollTo("plans")}
                className="ml-16 grey-button"
              >
                Start Free
              </button>
            </div>
          </section>
          <section className="row-ac-jb">
            <ScrollAnimation animateIn="fadeInUp" delay={150}>
              <div style={{ paddingLeft: "30%" }}>
                <h2 className="big-head mb-0">Stay on top of the market</h2>
                <p className="o5 mt-16 mb-20">
                  The #1 way to ensure you are an informed investor, keeping up
                  to date with all the latest news including earnings results on
                  the largest publicly traded companies, new product and service
                  launches, analyst upgrades, and management transitions.
                </p>
                <div className="row-ac mt-16">
                  {SPLASH_STATS.map((stat, i) => (
                    <div className="mr-28">
                      <div
                        className="big-stat mb-8"
                        style={{
                          color:
                            i === 0
                              ? "#FFBE3D"
                              : i === 1
                              ? "#367DFF"
                              : i === 2 && "#43F58B",
                        }}
                      >
                        {stat.top}
                      </div>
                      <div>{stat.bottom}</div>
                    </div>
                  ))}
                </div>
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
                </div>
                <p style={{ fontSize: 12 }} className="mt-32">
                  © The Market Scoop 2022
                </p>
              </div>
              <div className="mr-100">
                <p className="uppercase body2-medium o5">Links</p>
                <ul>
                  <li className="body1-emphasized o6 mb-4">Terms of Service</li>
                  <li className="body1-emphasized o6 mb-4">Privacy Policy</li>
                </ul>
              </div>
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

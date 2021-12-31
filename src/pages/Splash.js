import React, {Component} from "react";
import Navbar from "../components/Navbar";
import phones from '../images/phones 1.png'
import SvgTwitter from "../icons/Twitter";
import {Collapse} from "react-collapse/lib/Collapse";
import AnswerCollapse from "../components/AnswerCollapse";
import SvgFacebook from "../icons/Facebook";
import logo from "../images/logo.png";

const NAV_TABS = [
    {
        tab: 'Home',
        route: 'home'
    },
    {
        tab: 'About',
        route: 'about'
    },
    {
        tab: 'Plans',
        route: 'plans'
    },
    {
        tab: 'Testimonials',
        route: 'testimonials'
    },
    {
        tab: 'FAQ',
        route: 'faq'
    },
]

const SPLASH_STATS = [
    {
        top: '8.6k+',
        bottom: 'Messages Sent'
    },
    {
        top: '3.4k+',
        bottom: 'Members'
    },
    {
        top: '1.2k',
        bottom: '5 Star Reviews'
    },
]

const CARDS_1 = [
    {
        title: 'Catered Alerts',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiselit. Vivamus imperdiet orci non sem placerat.'
    },
    {
        title: 'Catered Alerts',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiselit. Vivamus imperdiet orci non sem placerat.'
    },
]

const CARDS_2 = [
    {
        title: 'Catered Alerts',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiselit. Vivamus imperdiet orci non sem placerat.'
    },
    {
        title: 'Catered Alerts',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiselit. Vivamus imperdiet orci non sem placerat.'
    },
]

const PLANS = [
    {
        title: 'Basic',
        price: 'Free',
        term: '',
        features: [
            {
                title: 'Access to the Market Scoop group chat',
                unlocked: true
            },
            {
                title: 'Weekly recap with top anticipated news on the US Stock Market (upgrades, downgrades, earnings, mergers, announcements and more)',
                unlocked: true
            },
            {
                title: 'Weekly recap with key information on the Crypto-Currency market',
                unlocked: true
            },
        ]
    },
    {
        title: 'Preferred',
        price: '$4.99',
        term: '/mo',
        features: [
            {
                title: 'Access to the Market Scoop group chat',
                unlocked: true
            },
            {
                title: 'Weekly recap with top anticipated news on the US Stock Market (upgrades, downgrades, earnings, mergers, announcements and more)',
                unlocked: true
            },
            {
                title: 'Weekly recap with key information on the Crypto-Currency market',
                unlocked: true
            },
            {
                title: 'Access to members only group chat channels',
                unlocked: true
            },
            {
                title: 'Daily message with crucial news on the US Stock Market and Crypto Market',
                unlocked: true
            },
            {
                title: 'Catered messaging customized to your needs',
                unlocked: true
            },
        ]
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
]

const FAQ = [
    {
        q: 'How long till I start receiving messages after I sign up?',
        a: 'You will start receiving messages the next trading day.'
    },
    {
        q: 'How can I upgrade from my free plan?',
        a: 'Upgrading is easy! Just come back to this site and sign up for the paid plan. Your old number will be migrated upon signup.'
    },
    {
        q: 'Do I still need to do my own research?',
        a: 'Of course! This service aims to keep members informed with important news and key insights. Its never a good idea to trade blindly without doing the necessary research.'
    },
    {
        q: 'Where can I access the members chat?',
        a: 'Find us here ___.'
    },
]

class Splash extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: 'home'
        }
        this.topRef = React.createRef();
        this.aboutRef = React.createRef();
        this.plansRef = React.createRef();
        this.testimonialsRef = React.createRef();
        this.faqRef = React.createRef();
    }

    scrollTo = (route) => {
        if (route === 'top') {
            this.topRef.current.scrollIntoView({behavior: 'smooth'})
        }
        if (route === 'about') {
            this.aboutRef.current.scrollIntoView({behavior: 'smooth'})
        }
        if (route === 'plans') {
            this.plansRef.current.scrollIntoView({behavior: 'smooth'})
        }
        if (route === 'testimonials') {
            this.testimonialsRef.current.scrollIntoView({behavior: 'smooth'})
        }
        if (route === 'faq') {
            this.faqRef.current.scrollIntoView({behavior: 'smooth'})
        }
    }

    render() {
        return (
            <div style={{height: '300vh'}}>
                <Navbar scrollTo={this.scrollTo} activeTab={this.state.activeTab} tabs={NAV_TABS}/>
                <div className='relative' ref={this.topRef}>
                    <div className='gradient-bg2'/>
                    <section className='col-ac-jc text-center' style={{padding: '5% 25% 0% 25%'}}>
                        <h1 className='splash-head mb-16'>
                            Tagline about the Market Scoop goes here
                        </h1>
                        <p className='o5'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet orci non sem
                            placerat
                            commodo. Nam dui libero, molestie tempus ligula non, consectetur malesuada magna.
                        </p>
                        <div className='row-ac-jc mt-20'>
                            <button className='mr-16 blue-button'>
                                View Plans
                            </button>
                            <button className='ml-16 grey-button'>
                                Start Free
                            </button>
                        </div>
                    </section>
                    <section className='row-ac-jb'>
                        <div style={{paddingLeft: '10%'}}>
                            <h2 className='big-head mb-0'>
                                Stay on top of the market
                            </h2>
                            <p className='o5 mt-16 mb-20'>
                                The #1 way to ensure you are an informed investor, keeping up to date with all the
                                latest news including earnings results on the largest publicly traded companies, new
                                product and service launches, analyst upgrades, and management transitions.
                            </p>
                            <div className='row-ac mt-16'>
                                {SPLASH_STATS.map((stat, i) =>
                                    <div className='mr-28'>
                                        <div className='big-stat mb-8'
                                             style={{color: i === 0 ? '#FFBE3D' : i === 1 ? '#367DFF' : i === 2 && '#43F58B'}}>
                                            {stat.top}
                                        </div>
                                        <div>
                                            {stat.bottom}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <img src={phones} className='phones'/>
                    </section>
                </div>
                <section ref={this.aboutRef} style={{backgroundColor: '#1E2029', padding: '10% 15% 10% 15%'}}
                         className='row-ac-jb'>
                    <div className='mr-52'>
                        <h2 className='big-head mb-0'>
                            Another tagline should go right here
                        </h2>
                        <p className='o5 mt-16 mb-32'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet orci non sem
                            placerat commodo. Nam dui libero, molestie tempus ligula non, consectetur malesuada magna.
                        </p>
                        <button className='mr-16 blue-button'>
                            Get Started
                        </button>
                    </div>
                    <div>
                        <div className='row-ac'>
                            {CARDS_1.map((card, i) =>
                                <div className='splash-card'>

                                    <div className='headline mb-8'>
                                        {card.title}
                                    </div>
                                    <div className='o5'>
                                        {card.description}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className='row-ac'>
                            {CARDS_2.map((card, i) =>
                                <div className='splash-card'>
                                    <div className='headline mb-8'>
                                        {card.title}
                                    </div>
                                    <div className='o5'>
                                        {card.description}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
                <section ref={this.plansRef} className='col-ac-jc relative' style={{padding: '10% 15% 10% 15%'}}>
                    <div className='gradient-bg'/>
                    <div className='text-center'>
                        <h1 className='big-head mb-0'>
                            Our Packages
                        </h1>
                        <p className='o5 mb-64'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet.
                        </p>
                    </div>
                    <div className='row-ac'>
                        {PLANS.map((plan, i) =>
                            <div className='plan-card'>
                                <p className='headline mt-0 mb-12'>
                                    {plan.title}
                                </p>
                                <p className='big-head mt-0 mb-20'>
                                    {plan.price}<span className='o5 big-subhead'>{plan.term}</span>
                                </p>
                                <div>
                                    <ul>
                                        {plan.features.map(feature =>
                                            <li className='row-ac'>
                                                <div style={{minWidth: 16}}>
                                                    <SvgTwitter color={!feature.unlocked && 'grey'}/>
                                                </div>
                                                <p className='ml-16'>
                                                    {feature.title}
                                                </p>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        )}
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
                <section ref={this.faqRef} className='col-ac-jc' style={{padding: '10% 15% 10% 15%'}}>
                    <div className='text-center'>
                        <h1 className='big-head mb-0'>
                            Frequently Asked Questions
                        </h1>
                        <p className='o5 mb-64'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet.
                        </p>
                    </div>
                    <ul>
                        {FAQ.map(pair =>
                            <AnswerCollapse key={pair.a} q={pair.q} a={pair.a}/>
                        )}
                    </ul>
                </section>
                <section className='row-ac' style={{padding: '5% 15%', backgroundColor: '#00000030'}}>
                    <div>
                        <div className='row-jb'>
                            <div style={{maxWidth: 300}}>
                                <img src={logo} style={{height: 45}}/>
                                <div className='row-ac'>
                                    <SvgTwitter/>
                                    <SvgFacebook/>
                                </div>
                                <p style={{fontSize: 12}} className='mt-32'>© The Market Scoop 2022</p>
                            </div>
                            <div className='mr-100'>
                                <p className='uppercase body2-medium o5'>Links</p>
                                <ul>
                                    <li className='body1-emphasized o6 mb-4'>
                                        Terms of Service
                                    </li>
                                    <li className='body1-emphasized o6 mb-4'>
                                        Privacy Policy
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p className='body3-medium mt-32' style={{color: '#FFFFFF50'}}>
                            With investment, your capital is at risk. The value of your portfolio can go down as well as
                            up
                            and you may get back less than you invest. Past performance is no guarantee of future
                            results.
                            Any historical returns, expected returns, or probability projections may not reflect actual
                            future performance.
                            ‍
                            All content/groups/messaging created by Wall St Rank. (“Wall St Rank”) is for educational
                            and
                            information purposes only.
                            It is not financial, investment, legal, or tax advice. Wall St Rank can not and does not
                            make
                            any guarantees about your ability to get results or earn any money with our ideas,
                            information,
                            tools, or strategies.

                            The author is not a financial advisor nor is he responsible for any financial loss you may
                            incur
                            acting on the information provided through Wall St Rank. All information in this
                            group/newsletter/article/email/tweets etc. is not financial advice to buy or sell any
                            security.
                            Please consult a financial advisor before making any financial decisions.

                            Use caution and always consult your accountant, lawyer or professional advisor before acting
                            on
                            this or any information related to a lifestyle change or your business or finances. You
                            alone
                            are responsible and accountable for your decisions, actions and results in life, and by your
                            registration here you agree not to attempt to hold us liable for your decisions, actions or
                            results, at any time, under any circumstance.
                        </p>
                    </div>
                </section>
            </div>
        )
    }
}

export default Splash

import React, {Component} from "react";
import ScrollAnimation from "react-animate-on-scroll";
import phones from "../images/splashphone.png";
import {SPLASH_STATS} from "../consts/consts";


class SplashTop extends Component {
    render() {
        return (
            <>
                <div className={this.props.mobile ? 'relative col-ac' : 'relative row-ae-jb'}>
                    <div className='gradient-bg2'/>
                    <section className={this.props.mobile ? 'col-ac-jc' : 'col-jc'}
                             style={{
                                 padding: this.props.mobile ? '10% 10% 10% 10%' : '10% 0% 0% 10%',
                             }}>
                        <div className=''>
                            <h1 className='splash-head mb-8'
                                style={{
                                    fontSize: this.props.mobile && 42,
                                    marginTop: this.props.mobile && 140,
                                    textAlign: this.props.mobile && 'center'
                                }}>
                                One Message,<br/> Per Day.
                            </h1>
                            <div style={{
                                textAlign: this.props.mobile && 'center',
                                marginRight: this.props.mobile ? 0 : 80
                            }}>
                                <p className='o5 mt-32 mb-8 uppercase'
                                   style={{fontSize: this.props.mobile ? 12 : 16, fontWeight: 'bold'}}>
                                    Giving you the latest market updates, trending sectors, key events, and much more.
                                </p>
                                <p className='o5 mt-16 mb-20' style={{fontSize: this.props.mobile && 14}}>
                                    The ONLY service sent via text message directly to your mobile device,
                                    <br/>
                                    giving you direct access to the biggest news across markets.
                                    <br/>
                                    (We also provide an option for email!)
                                </p>
                                <div className={this.props.mobile ? 'row-ac-jc' : 'row-ac mt-12'}>
                                    <button onClick={this.props.scrollToPlans}
                                            className={this.props.mobile ? 'mr-16 blue-button-mobile' : 'mr-16 blue-button'}>
                                        View Plans
                                    </button>
                                    <button onClick={this.props.scrollToPlans}
                                            className={this.props.mobile ? 'ml-16 grey-button-mobile' : 'ml-16 grey-button'}>
                                        Start Free
                                    </button>
                                </div>
                                {!this.props.mobile &&
                                <ScrollAnimation animateIn="fadeInUp" delay={150}>
                                    <div style={{paddingLeft: this.props.mobile ? '0%' : '0%', marginTop: 120}}
                                         className='mb-100'>
                                        <div className='relative mb-20'>
                                            <h1 className='big-head mb-12' style={{fontSize: this.props.mobile && 32}}>
                                                Never miss a beat.
                                            </h1>
                                            <div className='title-underline'/>
                                        </div>
                                        <p className='o5 mt-16 mb-20' style={{fontSize: this.props.mobile && 14}}>
                                            The #1 way to ensure you are an informed investor, giving you all the latest
                                            news
                                            announcements including earnings results on the largest publicly traded
                                            companies, new
                                            product and service launches, analyst upgrades, along with trending sectors,
                                            key
                                            meetings, and much more
                                        </p>
                                        <div className='row-ac mt-16' style={{marginBottom: this.props.mobile && 100}}>
                                            {SPLASH_STATS.map((stat, i) =>
                                                <div className='mr-28'>
                                                    <div className='big-stat mb-8'
                                                         style={{
                                                             color: i === 0 ? '#FFBE3D' : i === 1 ? '#367DFF' : i === 2 && '#43F58B',
                                                             fontSize: this.props.mobile && 32
                                                         }}>
                                                        {stat.top}
                                                    </div>
                                                    <div style={{
                                                        fontSize: this.props.mobile && 12,
                                                        height: this.props.mobile && 30
                                                    }}>
                                                        {stat.bottom}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </ScrollAnimation>
                                }
                            </div>
                        </div>
                    </section>
                    {!this.props.mobile &&
                    <section className={this.props.mobile ? 'col-ac-jc ph-60 mt-0' : 'row-ac-jb'}>
                        <div className='relative pt-64'>
                            <img src={phones} className='phones pt-100' style={{maxWidth: '35vw'}}/>
                        </div>
                    </section>
                    }
                {this.props.mobile &&
                <section className='col-ac-jc' style={{marginTop:-30}}>
                    <div className='relative pt-64'>
                        <img src={phones} className='phones' style={{maxWidth: '85vw'}}/>
                    </div>
                </section>
                }
                </div>
            </>
        );
    }
}

export default SplashTop

import React, {Component} from "react";
import ScrollAnimation from "react-animate-on-scroll";
import {CARDS, SPLASH_STATS} from "../consts/consts";

class Features extends Component {
    render() {
        return (
            <>
                {this.props.mobile &&
                <section
                    style={{backgroundColor: '#1E2029', padding: this.props.mobile ? '5% 0% 5% 0%' : '5% 15% 5% 15%'}}
                    className='row-ac-jc'>
                    <div>
                        <div className='col-ac-jc text-center mt-24'>
                            <div className='w-70p'  style={{opacity: .7, fontSize: 20, fontWeight: 600, marginBottom:-40}}>
                                Sign up today and get your first week free!
                            </div>
                        </div>
                        <>
                            <ScrollAnimation animateIn="fadeInUp" delay={150}>
                                <div style={{
                                    paddingLeft: this.props.mobile ? '0%' : '30%',
                                    padding: this.props.mobile && '20% 5% 0 5%'
                                }}>
                                    <div className='relative mb-20'>
                                        <h1 className='big-head mb-12' style={{fontSize: this.props.mobile && 32}}>
                                            Never miss a beat.
                                        </h1>
                                        <div className='title-underline'/>
                                    </div>
                                    <p className='o5 mt-16 mb-20' style={{fontSize: this.props.mobile && 14}}>
                                        The #1 way to ensure you are an informed investor, keeping up to date with all
                                        the
                                        latest news including earnings results on the largest publicly traded companies,
                                        new
                                        product and service launches, analyst upgrades, and management transitions.
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
                        </>
                    </div>
                </section>
                }
                <div className={this.props.mobile ? 'flex-wrap row-ac mv-60 mt-40' : 'feature-grid'}
                     style={{padding: '5% 10% 10% 10%'}}>
                    {CARDS.map((card, i) =>
                        <ScrollAnimation animateIn="fadeInUp"
                                         delay={i === 0 ? 50 : i === 1 ? 100 : i === 2 ? 150 : 200}
                                         style={{flex: !this.props.mobile && 1, height: '100%'}} duration={2}>
                            <div className='splash-card' style={{
                                minHeight: this.props.mobile && 'min-content',
                                marginBottom: this.props.mobile && 20
                            }}>
                                {this.props.mobile ? card.iconMobile : card.icon}
                                <div className='headline mb-8' style={{fontSize: this.props.mobile && 24}}>
                                    {card.title}
                                </div>
                                <div className='o5' style={{fontSize: this.props.mobile && 14}}>
                                    {card.description}
                                </div>
                            </div>
                        </ScrollAnimation>
                    )}
                </div>
            </>
        );
    }
}

export default Features

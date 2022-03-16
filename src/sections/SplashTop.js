import React, {Component} from "react";
import ScrollAnimation from "react-animate-on-scroll";
import phones from "../images/phones1.png";
import {SPLASH_STATS} from "../consts/consts";


class SplashTop extends Component {
    render() {
        return (
            <div className='relative'>
                <div className='gradient-bg2'/>
                <section className={this.props.mobile ? 'col-ac-jc' : 'col-jc'}
                         style={{padding: this.props.mobile ? '20% 12% 20% 12%' : '10% 25% 0% 12%'}}>
                    <h1 className='splash-head mb-8 font-1'
                        style={{
                            fontSize: this.props.mobile && 42,
                            marginTop: this.props.mobile && 140,
                            textAlign: this.props.mobile && 'center'
                        }}>
                        One Message,<br/> Per Day.
                    </h1>
                    <div className='row-ac mt-12'>
                        <button onClick={this.props.scrollToPlans} className={this.props.mobile ? 'mr-16 blue-button-mobile' : 'mr-16 blue-button'}>
                            View Plans
                        </button>
                        <button onClick={this.props.scrollToPlans} className={this.props.mobile ? 'ml-16 grey-button-mobile' :  'ml-16 grey-button'}>
                            Start Free
                        </button>
                    </div>
                </section>
                <section className={this.props.mobile ? 'col-ac-jc ph-60 mt-20' : 'row-ac-jb'}>
                    {!this.props.mobile &&
                    <ScrollAnimation animateIn="fadeInUp" delay={150}>
                        <div style={{paddingLeft: this.props.mobile ? '0%' : '30%'}}>
                            <div className='relative mb-20'>
                                <h1 className='big-head mb-12' style={{fontSize: this.props.mobile && 32}}>
                                    Never miss a beat.
                                </h1>
                                <div className='title-underline'/>
                            </div>
                            <p className='o5 mt-16 mb-20' style={{fontSize: this.props.mobile && 14}}>
                                The #1 way to ensure you are an informed investor, keeping up to date with all the
                                latest news including earnings results on the largest publicly traded companies, new
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
                    }
                    <img src={phones} className='phones'/>
                </section>
            </div>
        );
    }
}

export default SplashTop

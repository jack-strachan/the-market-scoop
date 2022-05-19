import React, {Component} from "react";
import Marquee from "react-fast-marquee";
import {TESTIMONIALS, TESTIMONIALS2} from "../consts/consts";
import TestimonialCard from "../components/TestimonialCard";

class Testimonials extends Component {
    render() {
        return (
            <section className='col-ac-jc' style={{padding: this.props.mobile ? '20% 0% 5% 0%' : '10% 0% 5% 0%'}}>
                <div className='text-center col-ac'>
                    <div className='relative mb-80 col-ac'>
                        <h1 className='big-head mb-12' style={{fontSize: this.props.mobile && 32}}>
                            See what the people{this.props.mobile && <br/>} are saying
                        </h1>
                        <div className='title-underline'/>
                        <p className='o5 mt-32 mb-20'
                           style={{fontSize: this.props.mobile && 14, width: this.props.mobile && '40%'}}>
                            Used by finance professionals, top traders, and retail investors alike. Hear what some of
                            our customers have to say.
                        </p>
                    </div>
                    <Marquee gradientColor={[18, 20, 29]} pauseOnHover>
                        {TESTIMONIALS.map(testimonial =>
                            <TestimonialCard testimonial={testimonial} mobile={this.props.mobile}/>
                        )}
                    </Marquee>
                    <Marquee gradientColor={[18, 20, 29]} pauseOnHover direction={'right'} style={{marginTop: 40}}>
                        {TESTIMONIALS2.map(testimonial =>
                            <TestimonialCard testimonial={testimonial} mobile={this.props.mobile}/>
                        )}
                    </Marquee>
                </div>
            </section>
        )
    }
}

export default Testimonials

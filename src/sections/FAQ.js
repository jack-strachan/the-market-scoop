import React, {Component} from "react";
import ScrollAnimation from "react-animate-on-scroll";
import AnswerCollapse from "../components/AnswerCollapse";
import {FAQs} from "../consts/consts";

class FAQ extends Component {
    render() {
        return (
            <section className='col-ac-jc' style={{padding: this.props.mobile ? '25% 5% 20% 5%' : '5% 15% 10% 15%'}}>
                <div className='text-center'>
                    <h1 className='big-head mb-0' style={{fontSize: this.props.mobile && 32}}>
                        FAQs
                    </h1>
                    <p className='o5 mb-64' style={{fontSize:this.props.mobile && 14, margin:this.props.mobile && '0px 28px 0px 28px'}}>
                        Dont see your answer here? Contact us at _______ with any other questions! We're more than
                        happy to help.
                    </p>
                </div>
                <ul>
                    {FAQs.map((pair, i) =>
                        <ScrollAnimation animateIn="fadeInUp" delay={i * 50}>
                            <AnswerCollapse key={pair.a} q={pair.q} a={pair.a} mobile={this.props.mobile}/>
                        </ScrollAnimation>
                    )}
                </ul>
            </section>
        )
    }
}

export default FAQ

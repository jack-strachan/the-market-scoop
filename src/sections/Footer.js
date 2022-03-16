import React, {Component} from "react";
import logo from "../images/logofinal.png";
import SvgTwitter from "../icons/Twitter";
import SvgFacebook from "../icons/Facebook";

class Footer extends Component {
    render() {
        return (
            <section className='row-ac' style={{padding: this.props.mobile ? '20% 5%' : '5% 15%', backgroundColor: '#00000030'}}>
                <div>
                    <div className={this.props.mobile ? 'row-ac-jb ph-20' : 'row-jb'}>
                        <div style={{maxWidth: 300}}>
                            <img src={logo} style={{height: 45}}/>
                            <div className='row-ac mt-16'>
                                <SvgTwitter className='mr-12'/>
                                <SvgFacebook/>
                            </div>
                            <p style={{fontSize: 12}} className='mt-32'>© The Market Scoop 2022</p>
                        </div>
                        <div className={this.props.mobile ? 'ml-20' : 'mr-100'}>
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
        )
    }
}

export default Footer

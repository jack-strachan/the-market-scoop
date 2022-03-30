import React, {Component} from "react";
import Close from "../icons/Close";
import logo from '../images/logofinal.png'

function wait(timeout) {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    });
}


class NavMenuMobile extends Component {
    render() {
        return (
            <div style={{
                height: this.props.mobileMenu ? '100vh' : 0,
                backgroundColor: 'rgba(14,29,57,0.81)',
                position: 'fixed',
                left: 0,
                right: 0,
                top: 0,
                zIndex: 9999,
                transition: 'height 150ms ease',
                backdropFilter: 'blur(5px)',
            }}>
                {this.props.mobileMenu &&
                <>
                    <div className='row-ac-je absolute w-100p' style={{zIndex: 100, height: 60}}>
                        <div style={{zIndex: 9999, paddingRight: 10}}
                             onClick={this.props.onClickClose}>
                            <Close width={32} height={32} viewBox={'0 0 24 24'}/>
                        </div>
                    </div>
                    <div className='col-ac-jc' style={{height: '95vh'}}>
                        <img src={logo} className='w-50p mb-40'
                             onClick={() => {
                                 this.props.scrollTo('top')
                                 wait(100).then(() => {
                                         this.props.onClickClose()
                                     }
                                 )
                             }}
                             style={{zIndex: 999, position: 'relative'}}/>
                        <p className='font-1 mv-20 mobile-nav-item' style={{fontSize: 24, fontWeight: 600}}
                           onClick={() => {
                               wait(100).then(() => {
                                       this.props.onClickClose()
                                   }
                               )
                               this.props.scrollTo('about')
                           }}>
                            About
                        </p>
                        <p className='font-1 mv-20 mobile-nav-item' style={{fontSize: 24, fontWeight: 600}}
                           onClick={() => {
                               wait(100).then(() => {
                                       this.props.onClickClose()
                                   }
                               )
                               this.props.scrollTo('plans')
                           }}>
                            Plans
                        </p>
                        <p className='font-1 mv-20 mobile-nav-item' style={{fontSize: 24, fontWeight: 600}}
                           onClick={() => {
                               wait(100).then(() => {
                                       this.props.onClickClose()
                                   }
                               )
                               this.props.scrollTo('testimonials')
                           }}>
                            Testimonials
                        </p>
                        <p className='font-1 mv-20 mobile-nav-item' style={{fontSize: 24, fontWeight: 600}}
                           onClick={() => {
                               this.props.scrollTo('faq')
                               wait(100).then(() => {
                                       this.props.onClickClose()
                                   }
                               )
                           }}>
                            FAQ
                        </p>
                    </div>
                </>

                }
            </div>
        )
    }
}

export default NavMenuMobile

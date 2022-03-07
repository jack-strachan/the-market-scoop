import React, {Component} from "react";
import SvgTwitter from "../icons/Twitter";
import SvgFacebook from "../icons/Facebook";

import logo from '../images/logofinal.png'
import logosmall from '../images/logo-small.png'

const wait = (timeout) => {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    });
}


class Navbar extends Component {
    state = {
        hoveringNav: false,
        mobileNavOpen: false
    }

    hoverNav = () => {
        if (this.props.scrollPosition >= 100) {
            wait(350).then(() => this.setState({hoveringNav: true}))
        }
    }

    render() {
        return (
            <nav className='nav'
                 style={{
                     height: ((this.props.scrollPosition <= 100) || this.state.hoveringNav) ? 80 : 40,
                     borderBottom: this.props.scrollPosition <= 100 ? '3px solid #3078F6' : '3px solid #003459',
                     backgroundColor: this.props.scrollPosition >= 100 && '#00000060'
                 }}
                 onMouseEnter={this.hoverNav}
                 onMouseLeave={() => this.setState({hoveringNav: false})}>
                <div style={{flex: 1}}>
                    {((this.props.scrollPosition <= 100) || this.state.hoveringNav) ?
                        <img src={logo} style={{height: 60}}/>
                        :
                        <img src={logosmall} className='mt-4' style={{height: 20}}/>
                    }
                </div>
                <ul style={{flex: 2}}>
                    {this.props.tabs.map(tab =>
                        <li className=' tab pointer' key={tab.tab} style={{
                            height: this.props.scrollPosition < 100 ? 80 : ((this.props.scrollPosition <= 100) || !this.state.hoveringNav) && 43
                        }}
                            onClick={() => this.props.scrollTo(tab.route)}>
                            <div className='title-emphasized' style={{color:this.props.activeTab === tab.route && 'white'}}>
                                {tab.tab}
                            </div>
                            <div style={{height: this.props.activeTab === tab && 4}} className='nav-border'/>
                        </li>
                    )}
                </ul>
                <div style={{flex: 1}} className='row-ac-je'>
                    <SvgTwitter className='mr-16'/>
                    <SvgFacebook/>
                </div>
            </nav>
        )
    }
}

export default Navbar

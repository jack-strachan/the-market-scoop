import React, {Component} from "react";
import SvgTwitter from "../icons/Twitter";
import SvgFacebook from "../icons/Facebook";

import logo from '../images/logo.png'

class Navbar extends Component {
    render() {
        return (
            <nav className='nav'>
                <div style={{flex: 1}}>
                    <img src={logo} style={{height:45}}/>
                </div>
                <ul style={{flex: 2}}>
                    {this.props.tabs.map(tab =>
                        <li className='pointer' key={tab.tab} style={{opacity: this.props.activeTab !== tab && .4}} onClick={() => this.props.scrollTo(tab.route)}>
                            <div className='title-emphasized'>
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

import React, {Component} from "react";
import logosmall from '../images/logo-small.png'
import Hamburger from "../icons/Hamburger";


class NavbarMobile extends Component {
    render() {
        return (
            <div className='row-ac-jb w-100p' style={{
                zIndex: 1000,
                height: 60,
                position: 'fixed',
                backgroundColor: '#00000020',
                backdropFilter: 'blur(4px)',
            }}>
                <img src={logosmall} style={{width: 80, paddingLeft: '5%'}}
                     onClick={this.props.onClickLogo}/>
                <div style={{zIndex: 9999, paddingRight: '2%'}} onClick={this.props.onClickMenu}>
                    <Hamburger width={42} height={42} viewBox={'0 0 24 24'}/>
                </div>
            </div>
        )
    }
}

export default NavbarMobile

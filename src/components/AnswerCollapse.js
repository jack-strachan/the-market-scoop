import {Component} from "react";
import {Collapse} from "react-collapse/lib/Collapse";

class AnswerCollapse extends Component {
    state = {
        isOpened: false
    }

    render() {
        return (
            <div className='answer-collapse w-100' style={{border: this.props.last && 'none'}}>
                <div className='row-ac-jb' style={{fontSize:this.props.mobile && 14}} onClick={() => this.setState({isOpened: !this.state.isOpened})}>
                    <h3><span className='yellow'>Q:</span> {this.props.q}</h3>
                </div>
                <div className='answerslist'>
                    <Collapse isOpened={this.state.isOpened}>
                        <div>
                            <p className='m-0 pb-12'>
                                <span style={{fontWeight:700, color:'white'}}>A:</span> {this.props.a}
                            </p>
                        </div>
                    </Collapse>
                </div>
            </div>
        );
    }
}

export default AnswerCollapse

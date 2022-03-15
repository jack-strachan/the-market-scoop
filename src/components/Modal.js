import {motion} from "framer-motion";
import React, {Component} from "react";
import Modal from "react-modal";
import Pay from "./Pay";
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import SvgClose from "../icons/Close";

class SignUpModal extends Component {
    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={this.props.toggleMuffinModal}
                // style={customStyles}
                contentLabel="Example Modal"
                className="Modal"
                overlayClassName="Overlay"
            >
                <motion.div
                    initial={{opacity: 0, transform: "scale(1) translateY(-100%)"}}
                    animate={{opacity: 1, transform: "scale(1) translateY(-0%)"}}
                    className="modal-body relative"
                    style={{backgroundColor: "black"}}
                >
                    <div className='modal-body-inner'>
                        <div>
                            <div onClick={this.props.toggle} style={{cursor: "pointer"}}>
                                <SvgClose/>
                            </div>
                            <Pay isPaidModal={this.props.isPaidModal}/>
                        </div>
                    </div>
                </motion.div>
            </Modal>
        );
    }
}

export default SignUpModal;

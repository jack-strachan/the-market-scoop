import {motion} from "framer-motion";
import React, {Component} from "react";
import Modal from "react-modal";

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
                <motion.div initial={{opacity: 0, transform: 'scale(1) translateY(-100%)'}}
                            animate={{opacity: 1, transform: 'scale(1) translateY(-0%)'}}
                            className='modal-body relative'>
                    <div onClick={this.props.toggle}>
                        close
                    </div>
                    hi
                </motion.div>
            </Modal>
        )
    }
}

export default SignUpModal

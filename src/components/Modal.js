import { motion } from "framer-motion";
import React, { Component } from "react";
import Modal from "react-modal";
import Pay from "./Pay";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

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
          initial={{ opacity: 0, transform: "scale(1) translateY(-100%)" }}
          animate={{ opacity: 1, transform: "scale(1) translateY(-0%)" }}
          className="modal-body relative"
          style={{ height: 300, width: 400, backgroundColor: "black" }}
        >
          <div>
            <div>
              <h3 onClick={this.props.toggle}>X</h3>
              <Pay isPaidModal={this.props.isPaidModal} />
            </div>
          </div>
        </motion.div>
      </Modal>
    );
  }
}

export default SignUpModal;

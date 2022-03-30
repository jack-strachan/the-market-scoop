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
          style={{
            minHeight: 450,
            width: 400,
            backgroundColor: "#2a2a2a",
            boxShadow: "1px 3px 1px #9E9E9E",
            borderRadius: 20,
          }}
        >
          <div>
            <div style={{ padding: 20, borderRadius: 10 }}>
              <h3 onClick={this.props.toggle} style={{ cursor: "pointer" }}>
                X
              </h3>
              <Pay
                isPaidModal={this.props.isPaidModal}
                isCancel={this.props.isCancel}
              />
            </div>
          </div>
        </motion.div>
      </Modal>
    );
  }
}

export default SignUpModal;

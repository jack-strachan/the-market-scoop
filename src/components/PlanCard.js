import React, { Component } from "react";
import SvgCheck from "../icons/Check";

class PlanCard extends Component {
  render() {
    const plan = this.props.plan;
    return (
      <div className="plan-card">
        <div>
          <p
            className="headline mt-0 mb-12"
            style={{
              fontSize: this.props.mobile && 22,
              marginBottom: this.props.mobile && 0,
            }}
          >
            {plan.title}
          </p>
          <p
            className="big-head mt-0 mb-20"
            style={{ fontSize: this.props.mobile && 38 }}
          >
            {plan.price}
            <span
              className="o5 big-subhead"
              style={{ fontSize: this.props.mobile && 30 }}
            >
              {plan.term}
            </span>
          </p>
          <div>
            <ul>
              {plan.features.map((feature) => (
                <li className="row-plain mb-8">
                  <div style={{ minWidth: 16, flex: 1 }}>
                    <SvgCheck fill={!feature.unlocked && "grey"} />
                  </div>
                  <div style={{ flex: 20 }}>
                    <p
                      className="ml-16 mt-4"
                      style={{ fontSize: this.props.mobile && 14 }}
                    >
                      {feature.title}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-32">
          <button
            onClick={() => {
              this.props.openModal(false, plan.title === "Preferred");
            }}
            className={plan.title === "Basic" ? "grey-button" : "blue-button"}
          >
            {plan.title === "Basic" ? "Join Basic" : "Become a Member"}
          </button>
        </div>
      </div>
    );
  }
}

export default PlanCard;

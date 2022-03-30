import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import SvgCheck from "../icons/Check";
import { PLANS } from "../consts/consts";
import PlanCard from "../components/PlanCard";

class Plans extends Component {
  state = {
    viewingFree: false,
  };

  render() {
    return (
      <section
        className="col-ac-jc relative"
        style={{
          padding: this.props.mobile ? "25% 0 25% 0" : "10% 60px 10% 60px",
        }}
      >
        <div className="gradient-bg" />
        <div
          className="text-center"
          style={{ width: this.props.mobile && "80%" }}
        >
          <h1
            className="big-head mb-0"
            style={{ fontSize: this.props.mobile && 32 }}
          >
            Pick the plan thats best for you
          </h1>
          <p
            className={this.props.mobile ? "o5 mb-20" : "o5 mb-64"}
            style={{ fontSize: this.props.mobile && 14 }}
          >
            Upgrade, downgrade, or cancel at any time. All you need is a phone
            number to get started.
          </p>
        </div>
        {this.props.mobile ? (
          <>
            <div className="row-ac-jc">
              <div className="row-ac">
                <div
                  onClick={() => this.setState({ viewingFree: true })}
                  className={
                    this.state.viewingFree ? "button-tab-active" : "button-tab"
                  }
                  style={{
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                >
                  Free
                </div>
                <div
                  onClick={() => this.setState({ viewingFree: false })}
                  className={
                    !this.state.viewingFree ? "button-tab-active" : "button-tab"
                  }
                  style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                >
                  Premium
                </div>
              </div>
            </div>
            <div
              className={this.props.mobile ? "flex-wrap w-100p" : "row-plain"}
            >
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={50}
                style={{ flex: 1, display: "flex" }}
              >
                {this.state.viewingFree ? (
                  <PlanCard
                    plan={PLANS[0]}
                    openModal={this.props.openModal}
                    mobile={this.props.mobile}
                  />
                ) : (
                  <PlanCard
                    plan={PLANS[1]}
                    openModal={this.props.openModal}
                    mobile={this.props.mobile}
                  />
                )}
              </ScrollAnimation>
            </div>
          </>
        ) : (
          <div
            className={this.props.mobile ? "row-plain flex-wrap" : "row-plain"}
          >
            {PLANS.map((plan, i) => (
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={i === 0 ? 0 : 50}
                style={{ flex: 1, display: "flex", maxWidth: 450 }}
              >
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
                        style={{ fontSize: this.props.mobile && 34 }}
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
                                className="ml-20 mt-4"
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
                      onClick={() =>
                        this.props.openModal(plan.title === "Become a Member")
                      }
                      className={
                        plan.title === "Basic" ? "grey-button" : "blue-button"
                      }
                    >
                      {plan.title === "Basic"
                        ? "Join Basic"
                        : "Become a Member"}
                    </button>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Plans;

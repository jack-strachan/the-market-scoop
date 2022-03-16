import React, {Component} from "react";

class TestimonialCard extends Component {
    render() {
        const testimonial = this.props.testimonial
        return (
            <div className='testimonial-card' style={{background: testimonial.border, padding: 1, margin: this.props.mobile && '6px 12px 0px 12px'}}>
                <div className='testimonial-card-inner' style={{padding: this.props.mobile && 8}}>
                    <div style={{minHeight: 100}}>
                        <p className='o9' style={{
                            maxWidth: this.props.mobile ? 200 : 400,
                            marginHorizontal: this.props.mobile ? 20 : 120,
                            paddingHorizontal: this.props.mobile ? 60 : 100,
                            fontSize: this.props.mobile && 14
                        }}>{testimonial.review}</p>
                    </div>
                    <p className='body1-emphasized mb-4'>{testimonial.user}</p>
                    <p className='o5 body2-medium mt-0'>{testimonial.location}</p>
                </div>
            </div>
        );
    }
}

export default TestimonialCard

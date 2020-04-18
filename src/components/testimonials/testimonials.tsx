import * as React from 'react';
import { Component } from 'react';

import IDataService from '../../services/interface/data-service-interface';
import ITestimonialsProps from './interface/testimonials-props';
import ITestimonialsState from './interface/testimonials-state';

import './testimonials.css';

export default class Testimonials extends Component<ITestimonialsProps, ITestimonialsState> {
	constructor(props: ITestimonialsProps) {
		super(props);

		this.state = {
			data: this.props.data,
		}
	}

	public render() {
		return <div className="testimonials-container">
			<h2 className="centre-text">TESTIMONIALS</h2>
			<h3 className="centre-text">WHAT OUR CUSTOMERS ARE SAYING</h3>
			<div className="row">
				{ this.state.data && this.state.data.map((item: IDataService, testimonialIndex: number) => <div key={ `testimonial-${ testimonialIndex }` } className="col-md-6">
					<div className="testimonial-box" >
						{ item.link &&
							<iframe src={ `https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F${ item.link }%3A0&width=500` } width="500" height="316" scrolling="no" frameBorder={ 0 } allowTransparency={ true } allow="encrypted-media" />
						}
					</div>
				</div> )}
			</div>
		</div>
	}
}

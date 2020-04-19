import * as React from 'react';
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import './contact.css';

export default class Contact extends Component<{}, {}> {
	public render() {
		return <div className="contact-container">
			<h2 className="centre-text">CONTACT US</h2>
			<div className="contact-area">
				<ul>
					<li><FontAwesomeIcon icon={ faPhone } /><span>07816 920771 / 01623 431440</span></li>
					<li><FontAwesomeIcon icon={ faEnvelope } /><span>abelectrical29@hotmail.com</span></li>
					<li><a href='#' onClick={ this.handleFacebookClick }><FontAwesomeIcon icon={ faFacebook } /><span>abelectricalnottinghamshire</span></a></li>
					<li><FontAwesomeIcon icon={ faHome } /><div className="address-container">
						<div>A. B. Electrical &amp; Maintenance</div>
						<div>27 Greenbank Drive</div>
						<div>Sutton-in-Ashfield</div>
						<div>Nottinghamshire</div>
						<div>NG17 2DY</div>
						<div>United Kingdom</div>
					</div></li>
				</ul>
				<iframe width="100%" height="355" frameBorder="0" scrolling="no" marginHeight={ 0 } marginWidth={ 0 } src="http://maps.google.co.uk/?ie=UTF8&amp;ll=53.1343522,-1.2652543&amp;spn=0.005694,0.016512&amp;t=m&amp;z=17&amp;output=embed" /><br />
			</div>
		</div>
	}

	private handleFacebookClick = () => window.open('https://www.facebook.com/abelectricalnottinghamshire', '_blank');
}
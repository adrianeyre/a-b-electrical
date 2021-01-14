import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import IContactProps from './interface/contact-props';

import './contact.css';

const Contact: FC<IContactProps> = (props: IContactProps) => {
	const handleFacebookClick = () => window.open('https://www.facebook.com/abelectricalnottinghamshire', '_blank');

	return <div className="contact-container">
		<h2 className="centre-text">CONTACT US</h2>
		<div className="contact-area">
			<ul>
				<li><h3>ANDREW BONSER</h3></li>
				<li><h4>PROPRIETOR</h4></li>
				<li><FontAwesomeIcon icon={ faPhone } /><span><a href="tel:07816920771">07816 920771</a> / <a href="tel:01623431440">01623 431440</a></span></li>
				<li><FontAwesomeIcon icon={ faEnvelope } /><span><a href="mailto:abelectrical29@hotmail.com">abelectrical29@hotmail.com</a></span></li>
				<li><a href='#' onClick={ handleFacebookClick }><FontAwesomeIcon icon={ faFacebook } /><span>abelectricalnottinghamshire</span></a></li>
				<li><FontAwesomeIcon icon={ faHome } />
					<div className="address-container">
						<div>A. B. Electrical &amp; Maintenance</div>
						<div>27 Greenbank Drive</div>
						<div>Sutton-in-Ashfield</div>
						<div>Nottinghamshire</div>
						<div>NG17 2DY</div>
						<div>United Kingdom</div>
					</div>
				</li>
			</ul>
			{ props.page }
			<iframe width="100%" height="355" frameBorder="0" scrolling="no" marginHeight={ 0 } marginWidth={ 0 } src="http://maps.google.co.uk/?ie=UTF8&amp;ll=53.1343522,-1.2652543&amp;spn=0.005694,0.016512&amp;t=m&amp;z=17&amp;output=embed" /><br />
		</div>
	</div>
}

export default Contact;

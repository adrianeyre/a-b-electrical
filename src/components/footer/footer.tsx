import * as React from 'react';
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './footer.css';

export default class Footer extends Component<{}, {}> {
	private readonly thisYear: number;

	constructor() {
		super({});

		const todaysDate = new Date();
		this.thisYear = todaysDate.getFullYear();
	}

	public render() {
		return <div className="footer-container">
			<div className="centre-text">
				<span>&#169;{ this.thisYear } A B Electrical &amp; Maintenance |</span>
				<span className="extra-text"> All rights reserved | NAPIT REGISTERED &#38; TRUSTMARK |</span>
				<span> <a href="https://github.com/adrianeyre/a-b-electrical" target="_blank"><FontAwesomeIcon icon={ faGithub } /> Website Design</a></span>
			</div>
		</div>
	}
}
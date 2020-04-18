import * as React from 'react';
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './footer.css';

export default class Footer extends Component<{}, {}> {
	public render() {
		return <div className="footer-container">
			<div className="centre-text">
				&#169;2020 A B Electrical &amp; Maintenance | <a href="https://github.com/adrianeyre/a-b-electrical" target="_blank"><FontAwesomeIcon icon={ faGithub } /> Website Design</a>
			</div>
		</div>
	}
}
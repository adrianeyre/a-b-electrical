import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import packageJson from '../../../package.json';

const Footer: FC = () => {
	const { version, author } = packageJson;
	const todaysDate = new Date();
	const thisYear = todaysDate.getFullYear();

	return <div className="footer-container">
		<footer className="centre-text">
			<span>&#169;{ thisYear } A B Electrical &amp; Maintenance |</span>
			<span> Version { version } |</span>
			<span className="extra-text"> All rights reserved | NAPIT REGISTERED &#38; TRUSTMARK |</span>
			<span> <a href="https://github.com/adrianeyre/a-b-electrical" target="_blank"><FontAwesomeIcon icon={ faGithub } /> Website Design</a></span>
		</footer>
	</div>
}

export default Footer;

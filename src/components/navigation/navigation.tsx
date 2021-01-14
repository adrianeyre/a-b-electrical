import React, { FC, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import IDataService from '../../services/interface/data-service-interface';
import Links from '../links/links';
import INavigationProps from './interface/navigation-props';

import './navigation.css';

const Navigation: FC<INavigationProps> = (props: INavigationProps) => {
	const [isCollasped, setIsCollasped] = useState<boolean>(true);

	const toggleNav = () => setIsCollasped(!isCollasped);

	const colaspeNavbar = (link?: string) => {
		setIsCollasped(true);

		if (!link) return;
		props.scrollToAnchor(link);
	}

	return <div className="navigation-container">
		<Navbar expanded={ !isCollasped } expand="lg" fixed="top">
			<div className="logo"><img src="/images/logos/logo.png" /></div>
			<span className="top-bar-links"><Links data={ props.linksData } showModal={ props.showModal } scrollToAnchor={ props.scrollToAnchor } /></span>
			<div className="nav-area">
				<div className="top-nav-area">
					<div className="contact-info">
						<span className="telephone"><FontAwesomeIcon icon={ faPhone } /> <a href="tel:07816920771">07816 920771</a></span> |
						<span className="email"><FontAwesomeIcon icon={ faEnvelope } /> <a href="mailto:abelectrical29@hotmail.com">abelectrical29@hotmail.com</a></span>
					</div>
					<hr />
				</div>
				<div className="bottom-nav-area">
					<Navbar.Toggle onClick={ toggleNav } aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							{ props.data && props.data.map((item: IDataService, navIndex: number) => <Nav.Link key={ `navigation-${ navIndex }` }>
								{ item.link && <a onClick={ () => colaspeNavbar(item.link) }>{ item.title }</a> }
							</Nav.Link>) }
							
							<Nav.Link className="burger-links">
								<div className="telephone"><FontAwesomeIcon icon={ faPhone } /> <a href="tel:07816920771">07816 920771</a></div>
								<div className="email"><FontAwesomeIcon icon={ faEnvelope } /> <a href="mailto:abelectrical29@hotmail.com">abelectrical29@hotmail.com</a></div>
								<Links data={ props.linksData } showModal={ props.showModal } scrollToAnchor={ props.scrollToAnchor } />
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</div>
			</div>
			
		</Navbar>
	</div>
}

export default Navigation;

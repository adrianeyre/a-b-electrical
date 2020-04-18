import * as React from 'react';
import { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import IDataService from '../../services/interface/data-service-interface';
import Links from '../links/links';
import INavigationProps from './interface/navigation-props';
import INavigationState from './interface/navigation-state';

import './navigation.css';

export default class Navigation extends Component<INavigationProps, INavigationState> {
	constructor(props: INavigationProps) {
		super(props);

		this.state = {
			data: this.props.data,
			linksData: this.props.linksData,
			isCollasped: true,
		}
	}

	public render() {
		return <div className="navigation-container">
			<Navbar expanded={ !this.state.isCollasped } expand="lg" fixed="top">
				<div className="logo"><img src="/images/logos/logo.png" /></div>
				<span className="top-bar-links"><Links data={ this.state.linksData } showModal={ this.props.showModal } scrollToAnchor={ this.props.scrollToAnchor } /></span>
				<div className="nav-area">
					<div className="top-nav-area">
						<div className="contact-info">
							<span className="telephone"><FontAwesomeIcon icon={ faPhone } /> 07816 920771</span> |
							<span className="email"><FontAwesomeIcon icon={ faEnvelope } /> abelectrical29@hotmail.com </span>
						</div>
						<hr />
					</div>
					<div className="bottom-nav-area">
						<Navbar.Toggle onClick={ this.toggleNav } aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="mr-auto">
								{ this.state.data && this.state.data.map((item: IDataService, navIndex: number) => <Nav.Link key={ `navigation-${ navIndex }` }>
									{ item.link && <a onClick={ this.colaspeNavbar.bind(this, item.link) }>{ item.title }</a> }
								</Nav.Link>) }
								
								<Nav.Link className="burger-links"><Links data={ this.state.linksData } showModal={ this.props.showModal } scrollToAnchor={ this.props.scrollToAnchor } /></Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</div>
				</div>
				
			</Navbar>
		</div>
	}

	private toggleNav = () => this.setState({ isCollasped: !this.state.isCollasped });

	private colaspeNavbar = (link: string) => {
		this.setState({ isCollasped: true });
		this.props.scrollToAnchor(link);
	}
}

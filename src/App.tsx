import * as React from 'react';
import { Component } from 'react';
import { Element, animateScroll as scroll, scroller } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import DataService from './services/data-service'
import CookieParser from './services/cookie-parser';
import ICookieParser from './services/interface/cookie-interface';
import IDataService from './services/interface/data-service-interface';
import IModalType from './services/interface/modal-type-interface';
import Image from './components/image/image';
import Text from './components/text/text';
import Navigation from './components/navigation/navigation';
import Blocks from './components/blocks/blocks'
import Contact from './components/contact/contact'
import Bottom from './components/bottom/bottom';
import Modal from './components/modal/modal';
import Footer from './components/footer/footer';
import Testimonials from './components/testimonials/testimonials';
import ImageList from './components/image-list/image-list';

import './App.scss';

interface IAppState {
	data: any;
	height: number;
	width: number;
	showModal: boolean;
	modalData?: IDataService;
	modalType?: IModalType;
	message?: string;
	type?: string;
	sidebarStyle: React.CSSProperties;
}

declare global {
	// tslint:disable-next-line
	interface Document {
		documentMode?: any;
	}
}

export default class App extends Component<{}, IAppState> {
	private dataService: DataService;
	private cookieParser: CookieParser;
	private dataFiles = ['menu', 'about', 'links', 'blocks', 'service', 'testimonials', 'images'];

	constructor(props: {}) {
		super(props);

		this.dataService = new DataService();
		this.cookieParser = new CookieParser();

		this.scrollToAnchor = this.scrollToAnchor.bind(this);
		this.scrollToTop = this.scrollToTop.bind(this);

		const cookieData: ICookieParser = this.cookieParser.getCookies();
		this.cookieParser.removeCookies();

		this.state = {
			data: {},
			height: 0,
			width: 0,
			showModal: false,
			message: cookieData.message,
			type: cookieData.type,
			sidebarStyle: {
				position: /*@cc_on!@*/false || !!window.document.documentMode ? 'relative' : 'sticky',
			},
		};
	}

	public async componentDidMount() {
		const data = {};

		await this.dataFiles.forEach(async (filename: string) =>  {
			data[filename] = await this.dataService.getData(`${ filename }.json`) as IDataService[];
			this.setState(({ data }));
		})

		window.addEventListener('scroll', this.listenToScroll);
		window.addEventListener('resize', this.listenToResize);
	}

	public componentWillUnmount() {
		window.removeEventListener('scroll', this.listenToScroll);
		window.removeEventListener('resize', this.listenToResize);
	}

	public render() {
		if (Object.keys(this.state.data).length !== this.dataFiles.length) return <div className="loading-container">
			<div className="loading-box">
				<div className="loading-text">Loading <FontAwesomeIcon icon={ faSpinner } spin={ true } /></div>
			</div>
		</div>

		return <div>
			{ this.state.showModal && <div className="modal">
				<Modal data={ this.state.modalData } modalType={ this.state.modalType } closeModal={ this.closeModal }/>
			</div> }

			<div className="container">
				<div className="menu">
					<Navigation
						data={ this.state.data.menu }
						linksData={ this.state.data.links }
						scrollToAnchor={ this.scrollToAnchor }
						showModal={ this.showModal }
					/>
				</div>

				<div className="main">
					<Element className="block" name="about">
						<Image imageName="kitchen.jpg" />
						<Text data={ this.state.data.about } imageName="kitchen.jpg" imagePosition="right" imageRadius="10px" page={ <ImageList data={ this.state.data.images } /> }/>
						<Blocks data={ this.state.data.blocks } scrollToAnchor={ this.scrollToAnchor } showModal={ this.showModal } />
					</Element>

					<Element className="block" name="contact">
						<Text page={ <Contact page={ <ImageList data={ this.state.data.images } /> } /> } imageName="contact.png" imagePosition="left" imageRadius="10px" />
					</Element>

					<Element className="block" name="service">
						<Text data={ this.state.data.service } imageName="info.png" imagePosition="right" imageRadius="10px" />
					</Element>

					<Element className="block" name="testimonials">
						<Testimonials data={ this.state.data.testimonials } />
					</Element>
				</div>

				{ this.state.height > 0.01 && <div className="bottom">
					<Bottom scrollToTop={ this.scrollToTop }/>
				</div> }
			</div>
			<Footer />
		</div>
	}

	private showModal = (modalType: IModalType, modalData?: IDataService, ) => {
		this.setState({ showModal: true, modalData, modalType });
	}

	private closeModal = () => this.setState({ showModal: false });

	private listenToScroll = () => {
		const winScroll = document.body.scrollTop || document.documentElement.scrollTop
		const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
		this.setState({ height: winScroll / height })
	}

	private listenToResize = () => this.setState({ width: window.innerWidth })

	private scrollToTop = () => scroll.scrollToTop();

	private scrollToAnchor = (anchor: string) => scroller.scrollTo(anchor, {
		duration: 800,
		delay: 0,
		smooth: 'easeInOutQuart',
		offset: 0
	})
}

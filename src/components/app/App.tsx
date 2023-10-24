import { useState, useEffect } from 'react';
import { Element, animateScroll as scroll, scroller } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import DataService from '../../services/data-service'
import CookieParser from '../../services/cookie-parser';
import ICookieParser from '../../services/interface/cookie-interface';
import IDataService from '../../services/interface/data-service-interface';
import IModalType from '../../services/interface/modal-type-interface';
import Image from '../image/image';
import Text from '../text/text';
import Navigation from '../navigation/navigation';
import Blocks from '../blocks/blocks'
import Contact from '../contact/contact'
import Bottom from '../bottom/bottom';
import Modal from '../modal/modal';
import Footer from '../footer/footer';
import Testimonials from '../testimonials/testimonials';
import ImageList from '../image-list/image-list';

import styles from '@/styles/app.module.scss'

declare global {
	// tslint:disable-next-line
	interface Document {
		documentMode?: any;
	}
}

const App = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [data, setData] = useState<any>();
	const [sidebarStyle, setSidebarStyle] = useState<any>();
	const [showModal, setShowModal] = useState<boolean>(false);
	const [modalData, setModalData] = useState<IDataService>();
	const [modalType, setModalType] = useState<IModalType>();
	const [height, setHeight] = useState<number>(0);
	const [width, setWidth] = useState<number>(0);
	const [message, setMessage] = useState<any>();
	const [type, setType] = useState<any>();

	const dataService = new DataService();
	const cookieParser = new CookieParser();
	cookieParser.removeCookies();

	const dataFiles = ['menu', 'about', 'links', 'blocks', 'service', 'testimonials', 'images']
	
	async function callData() {
		const data: any = {};

		for(const filename of dataFiles) {
			data[filename] = await await dataService.getData(`${ filename }.json`) as IDataService[];
		}

		setData(data);
		setLoading(false);
	};

	useEffect(() => {
		callData();
		
		const updatedSidebarStyle = {
			position: /*@cc_on!@*/false || !!window.document.documentMode ? 'relative' : 'sticky',
		}

		setSidebarStyle(updatedSidebarStyle);

		window.addEventListener('scroll', listenToScroll);
		window.addEventListener('resize', listenToResize);

		const cookieData: ICookieParser = cookieParser.getCookies();
		setMessage(cookieData.message)
		setType(cookieData.type);

		return () => {
			window.removeEventListener('scroll', listenToScroll);
			window.removeEventListener('resize', listenToResize);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const openModal = (modalType: IModalType, modalData?: IDataService, ) => {
		setModalType(modalType);
		setModalData(modalData);
		setShowModal(true);
	}

	const closeModal = () => setShowModal(false);

	const listenToScroll = () => {
		const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

		setHeight(winScroll / height)
	}

	const listenToResize = () => setWidth(window.innerWidth);

	const scrollToTop = () => scroll.scrollToTop();

	const scrollToAnchor = (anchor: string) => scroller.scrollTo(anchor, {
		duration: 800,
		delay: 0,
		smooth: 'easeInOutQuart',
		offset: 0
	});

	if (loading) return <div className={styles.loadingContainer}>
		<div className='loadingContainer'>
			<div className={styles.loadingBox}>
				<div className={styles.loadingText}>Loading <FontAwesomeIcon icon={ faSpinner } spin={ true } /></div>
			</div>
		</div>
	</div>

	return <div>
		{ showModal && <div className="modal">
			<Modal data={ modalData } modalType={ modalType } closeModal={ closeModal }/>
		</div> }

		<div className="container">
			<div className="menu">
				<Navigation
					data={ data.menu }
					linksData={ data.links }
					scrollToAnchor={ scrollToAnchor }
					showModal={ openModal }
				/>
			</div>

			<div className="main">
				<Element className="block" name="about">
					<Image imageName="kitchen.jpg" />
					<Text data={ data.about } imageName="kitchen.jpg" imagePosition="right" imageRadius="10px" page={ <ImageList data={ data.images } /> }/>
					<Blocks data={ data.blocks } scrollToAnchor={ scrollToAnchor } showModal={ openModal } />
				</Element>

				<Element className="block" name="contact">
					<Text page={ <Contact page={ <ImageList data={ data.images } /> } /> } imageName="contact.png" imagePosition="left" imageRadius="10px" />
				</Element>

				<Element className="block" name="service">
					<Text data={ data.service } imageName="info.png" imagePosition="right" imageRadius="10px" />
				</Element>

				<Element className="block" name="testimonials">
					<Testimonials data={ data.testimonials } />
				</Element>
			</div>

			{ height > 0.01 && <div className="bottom">
				<Bottom scrollToTop={ scrollToTop }/>
			</div> }
		</div>
		<Footer />
	</div>
}

export default App;

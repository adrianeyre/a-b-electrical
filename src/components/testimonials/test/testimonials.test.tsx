import React from 'react';
import { shallow } from 'enzyme';

import Testimonials from '../testimonials';

describe('Testimonials', () => {
	it('Should render correctly', () => {
		const testimonialsComponent = shallow(<Testimonials />);

		expect(testimonialsComponent).toMatchSnapshot();
	});
});

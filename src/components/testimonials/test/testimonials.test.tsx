/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';

import Testimonials from '../testimonials';

describe('Testimonials', () => {
	it('Should render correctly', () => {
		const testimonialsComponent = render(<Testimonials />);

		expect(testimonialsComponent).toMatchSnapshot();
	});
});

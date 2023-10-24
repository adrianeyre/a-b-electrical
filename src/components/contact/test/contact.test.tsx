/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';

import Contact from '../contact';

describe('Contact', () => {
	it('Should render correctly', () => {
		const contactComponent = render(<Contact />);

		expect(contactComponent).toMatchSnapshot();
	});
});

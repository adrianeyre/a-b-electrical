import { shallow } from 'enzyme';

import Contact from '../contact';

describe('Contact', () => {
	it('Should render correctly', () => {
		const contactComponent = shallow(<Contact />);

		expect(contactComponent).toMatchSnapshot();
	});
});

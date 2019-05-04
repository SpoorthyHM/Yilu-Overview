import React from 'react';
import { shallow} from 'enzyme';
import Overview from './Overview';

describe('<Overview />', () => {
    it('should render correctly', () => {
        const component = shallow(<Overview />);
        expect(component).toMatchSnapshot();
    });
  
})
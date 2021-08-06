// example from https://medium.com/@kaiz.hudda/how-to-setup-jest-enzyme-in-your-existing-react-app-in-5-mins-bf21841f4738
import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
describe('Footer', () => {
  it('should render the Footer Component correctly', () => {
    //expect(wrapped).toMatchSnapshot();
  });
  it('renders the Titles children', () => {
    //expect(wrapped.find('h1').text()).toEqual(title);
  });
});

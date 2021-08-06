// main App test function - will need to update when basic UI is in place
import { mount } from 'enzyme';
import React from 'react';
import App from './App';

describe('App', () => {
  describe('#Text', () => {
    it('should render the the text "This is the Body Text" in our first <p> text tag', () => {
      const app = mount(<App/>);
// # ToDo: Implement an appropriate test
//      const text = app.find('p').at(0).text();
//      expect(text).toEqual('This is the Body Text');
    });
  });
});

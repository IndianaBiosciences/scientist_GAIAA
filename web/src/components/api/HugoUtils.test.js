import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { getHugoApiData, getHugoGeneInfo } from './HugoUtils';

const testCallback = () => null;

test('getHugoApiData', () => {
  let path = "/fetch/symbol/INPP5D";
  let result = getHugoApiData(path);
  console.log('result: ', result)
  expect(result).toEqual("object");
});

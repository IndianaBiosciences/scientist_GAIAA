import React from 'react';
import { render } from '@testing-library/react';
import Networks from './Networks';

const networks = new Networks;

test('Networks', () => {
  expect(typeof networks).toEqual("object");
  expect(networks.getAll()).toHaveLength(2);
  expect(networks.getData('null-test')).toBeNull();
  expect(networks.getName('test-tim')).toEqual('Tim INPP4D Test');
  expect(networks.getData('null-test')).toBeNull();
  expect(networks.getData('test-tim')).toBeDefined();
  expect(networks.getStyle('null-test')).toBeNull();
  expect(networks.getStyle('test-tim')).toBeDefined();
});

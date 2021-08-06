import React from 'react';
import { render } from '@testing-library/react';
import Targets from './Targets';

const targets = new Targets;

test('Targets', () => {
  expect(typeof targets).toEqual("object");
  const allTargets = targets.allTargets();
  expect(allTargets.length).toEqual(4);
});

import React from 'react';
import { render } from '@testing-library/react';
import Molecules from './Molecules';

const molecules = new Molecules;

test('Molecules', () => {
  expect(typeof molecules).toEqual("object");
  const allMolecules = molecules.all();
  expect(allMolecules.length).toEqual(1814);
});

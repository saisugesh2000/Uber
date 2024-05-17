import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { useNavigation } from '@react-navigation/native';
import Later from '../src/Later';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('First component', () => {
  it('renders correctly', () => {
    useNavigation.mockReturnValue({ navigate: jest.fn() });

    const tree = renderer.create(<Later />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
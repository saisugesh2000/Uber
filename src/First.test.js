

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { useNavigation } from '@react-navigation/native';
import First from '../src/First';

// Mock @expo/vector-icons
jest.mock('@expo/vector-icons', () => ({
    AntDesign: 'AntDesign', // Mock the specific icon component you're using
}));

// Mock useNavigation hook
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('First component', () => {
  it('renders correctly', () => {
    // Mock useNavigation behavior
    useNavigation.mockReturnValue({ navigate: jest.fn() });

    // Render the Login component
    const tree = renderer.create(<First/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});


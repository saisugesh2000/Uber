import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { useNavigation } from '@react-navigation/native';
import Account from '../src/Account';
// Mock @expo/vector-icons
jest.mock('@expo/vector-icons', () => ({
  FontAwesome: 'FontAwesome', // Mock the specific icon component you're using
}));

// Mock useNavigation hook
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));


describe('Account component', () => {
  it('renders correctly', () => {
    // Mock useNavigation behavior
    useNavigation.mockReturnValue({ navigate: jest.fn() });

    // Render the Login component
    const tree = renderer.create(<Account />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

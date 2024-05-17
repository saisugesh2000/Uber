import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { useNavigation } from '@react-navigation/native';
import Login from '../src/Login';

// Mock @expo/vector-icons
jest.mock('@expo/vector-icons', () => ({
  FontAwesome: 'FontAwesome', // Mock the specific icon component you're using
}));

// Mock useNavigation hook
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('Login component', () => {
  it('renders correctly', () => {
    // Mock useNavigation behavior
    useNavigation.mockReturnValue({ navigate: jest.fn() });

    // Render the Login component
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

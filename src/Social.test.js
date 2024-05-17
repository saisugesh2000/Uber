import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { useNavigation } from '@react-navigation/native';
import Social from '../src/Social';

// Mock @expo/vector-icons
jest.mock('@expo/vector-icons', () => ({
    AntDesign: ' AntDesign', // Mock the specific icon component you're using
}));

jest.mock('expo-checkbox', () => ({
  CheckBox: jest.fn(({ onValueChange }) => (
    <input type="checkbox" onChange={onValueChange} />
  )),
}));




// Mock useNavigation hook
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('Social component', () => {
  it('renders correctly', () => {
    // Mock useNavigation behavior
    useNavigation.mockReturnValue({ navigate: jest.fn() });

    // Render the Login component
    const tree = renderer.create(<Social />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

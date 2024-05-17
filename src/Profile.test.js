import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { useNavigation } from '@react-navigation/native';
import {Profile} from '../src/Profile';
import CheckBox from 'expo-checkbox';

// Mock @expo/vector-icons
jest.mock('@expo/vector-icons', () => ({
    AntDesign: 'AntDesign', // Mock the specific icon component you're using
}));

// Mock useNavigation hook
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

import { View } from 'react-native';
jest.mock('expo-checkbox', () => ({
  CheckBox: jest.fn(() => ({
    setNativeProps: jest.fn(),
  })),
}));


describe('Profile component', () => {
  it('renders correctly', () => {
    // Mock useNavigation behavior
    useNavigation.mockReturnValue({ navigate: jest.fn() });

    // Render the Login component
    const tree = renderer.create(<Profile />).toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
  });
});

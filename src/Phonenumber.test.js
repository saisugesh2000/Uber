import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { useNavigation } from '@react-navigation/native';
import Phonenumber from '../src/Phonenumber';

// Mock @expo/vector-icons
jest.mock('@expo/vector-icons', () => ({
  AntDesign: 'AntDesign',
}));

jest.mock('@react-navigation/native', () => ({
useNavigation: jest.fn(),
}));


describe('Phonenumber component', () => {
  it('renders correctly', () => {
    // Mock useNavigation behavior
    useNavigation.mockReturnValue({ navigate: jest.fn() });

    // Render the Login component
    const tree = renderer.create(<Phonenumber/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

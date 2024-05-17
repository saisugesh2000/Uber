import React, { useState } from 'react';
import { View, TouchableOpacity, Modal, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // or any other icon library you prefer

const Dropdown = ({ onSelectItem }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState('');

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleItemSelect = (countryCode, image) => {
    setSelectedCountryCode(countryCode);
    onSelectItem({ image, countryCode }); // Pass both image and country code back to parent
    toggleDropdown(); // Close dropdown after item selection
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleDropdown}>
        <Icon name="caret-down" size={24} color="#EDF6FF" />
      </TouchableOpacity>

      <Modal visible={showDropdown} animationType="slide">
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => handleItemSelect('+91', require('../assets/Flag.jpeg'))}>
            <Image style={{ height: 30, width: 40 }} source={require('../assets/Flag.jpeg')} />
            <Text>+91</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleItemSelect('+1', require('../assets/US.jpeg'))}>
            <Image style={{ height: 30, width: 40 }} source={require('../assets/US.jpeg')} />
            <Text>+1</Text>
          </TouchableOpacity>
          {/* Add more dropdown items as needed */}
          <TouchableOpacity onPress={toggleDropdown}>
            <Text>Close Dropdown</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      {/* Display the selected country code */}
      {selectedCountryCode !== '' && <Text>Selected Country Code: {selectedCountryCode}</Text>}
    </View>
  );
};

export default Dropdown;

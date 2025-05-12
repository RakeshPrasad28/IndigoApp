import React from 'react';
import { Image, Text, View, useWindowDimensions, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // For the hamburger icon
import { useNavigation } from '@react-navigation/native'; // To control navigation
import { styles } from './styles'; // Assuming you have a styles file
import Colors from '@utils/Colors'; // For your color palette

const Header = () => {
  const { width, height } = useWindowDimensions();
  const Styles = styles(); // Assuming styles is a function that generates styles
  const navigation = useNavigation(); // Access the navigation prop to control the drawer

  const openDrawer = () => {
    navigation.toggleDrawer(); // Toggle the drawer (open/close)
  };

  return (
    <View style={Styles.headerContainer}>
      <View style={[Styles.headerInnerContainer, { paddingVertical: 2 }]}>
        {/* Hamburger Icon for toggling the drawer */}
        <TouchableOpacity onPress={openDrawer}>
          <Ionicons 
            name="menu" // Hamburger icon
            size={34} // Icon size
            color={Colors.CLR_WHITE} // Icon color
            style={{ marginLeft: 10 }} // Adjust the icon position
          />
        </TouchableOpacity>
        
        {/* Indigo logo */}
        <Image
          source={require('@assets/Images/logo_white.png')}
          style={{
            width: width > height ? width * 0.15 : width * 0.2,
            height: 50,
            paddingVertical: 3,
          }}
          resizeMode="contain"
        />
      </View>

      <View style={Styles.headerInnerContainer}>
        {/* Username */}
        <View style={Styles.usernameContainer}>
          <Text style={Styles.usernameText}>
            Hi,{' '}
            <Text style={Styles.usernameInnerText}>
              Ravi Kumar Patkar(18220)
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

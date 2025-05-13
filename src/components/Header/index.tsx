import React, { FC } from 'react';
import { Image, Text, View, useWindowDimensions, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import { useNavigation } from '@react-navigation/native'; 
import { styles } from './styles'; 
import Colors from '@utils/Colors'; 
import { DrawerNavigationProp } from '@react-navigation/drawer';

interface HeaderProps {
  hideHamburgerIcon?: boolean;
}

type RootDrawerParamList = {
  CALENDAR_SCREEN: undefined;
  ASSESSMENT_SCREEN: undefined;
};

const Header:FC<HeaderProps> = ({hideHamburgerIcon=false}) => {
  const { width, height } = useWindowDimensions();
  const Styles = styles(); 

  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamList>>();

  const openDrawer = () => {
    navigation.toggleDrawer(); 
  };

  return (
    <View style={Styles.headerContainer}>
      <View style={[Styles.headerInnerContainer, { paddingVertical: 2 }]}>
        {/* Hamburger Icon for toggling the drawer */}
        {!hideHamburgerIcon && <TouchableOpacity onPress={openDrawer}>
          <Ionicons 
            name="menu" 
            size={34} 
            color={Colors.CLR_WHITE} 
            style={{ marginLeft: 10 }} 
          />
        </TouchableOpacity>}
        
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

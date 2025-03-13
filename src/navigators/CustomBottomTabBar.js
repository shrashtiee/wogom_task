import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from '../components/VectorIcon'
import colorConstant from '../utility/colorConstant';

const CustomBottomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const { options } = descriptors[route.key];
        const iconName = getIconName(route.name, isFocused);
        const color = isFocused ? colorConstant.WHITE_COLOR : colorConstant.GREY_COLOR;

        return (
          <TouchableOpacity
            key={route.name}
            onPress={() => navigation.navigate(route.name)}
            style={styles.tabButton}
          >
            <Icon iconName={iconName} iconSize={24} color={color} iconType={'FontAweSome'} />
            <Text style={[styles.label, isFocused && styles.activeLabel]}>
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const getIconName = (routeName, isFocused) => {
  switch (routeName) {
    case 'Home':
      return isFocused ? 'home' : 'home';
    case 'Profile':
      return isFocused ? 'user' : 'user';
    default:
      return 'ellipse-outline';
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colorConstant.BUTTON_COLOR,
    height: 80,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: 10,
    elevation: 5,
    shadowColor: colorConstant.BLACK_COLOR,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    paddingHorizontal: 20,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: colorConstant.GREY_COLOR,
    marginTop: 4,
  },
  activeLabel: {
    color: colorConstant.WHITE_COLOR,
    fontWeight: 'bold',
  },
});

export default CustomBottomTabBar;

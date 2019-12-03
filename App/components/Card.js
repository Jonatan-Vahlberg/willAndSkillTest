import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = ({children, style = {}}) => {
  return <View style={[generateStyles().card, style]}>{children}</View>;
};

const generateStyles = () => {
  return StyleSheet.create({
    card: {
      paddingHorizontal: 10,
      paddingVertical: 20,
      backgroundColor: '#fff',
      borderBottomColor: '#232323',
      borderBottomWidth: 0.3,
      elevation: 2,
      marginVertical: 10,
      marginHorizontal: 20,
      borderRadius: 5,
    },
  });
};
export default Card;

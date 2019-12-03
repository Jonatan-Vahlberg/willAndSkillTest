import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {isUndefiendOrNull} from '../functions';

const Yield = ({name = '', value = 0, color = '#000'}) => {
  const {container, box} = generateStyles(color);
  if (isUndefiendOrNull(value)) return null;
  return (
    <View style={container}>
      <View style={box} />
      <Text>{` ${name}: ${value}`}</Text>
    </View>
  );
};

const generateStyles = color => {
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },

    box: {
      backgroundColor: color,
      height: 15,
      width: 15,
      borderRadius: 5,
    },
  });
};

export default Yield;

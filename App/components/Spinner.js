import React from 'react';
import {ActivityIndicator} from 'react-native';

const Spinner = ({color, size}) => {
  return <ActivityIndicator color={color} size={size} />;
};

Spinner.defaultProps = {
  color: '#0070F3',
  size: 'large',
};

export default Spinner;

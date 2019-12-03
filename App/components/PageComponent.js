import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

class PageComponent extends React.Component {
  render() {
    const {style, children} = this.props;
    return (
      <View style={[this.generateStyles().pageContainer, style]}>
        {children}
      </View>
    );
  }

  generateStyles = () => {
    return StyleSheet.create({
      pageContainer: {
        width,
        height: '100%',
        backgroundColor: '#DCDCDC',
      },
    });
  };
}

PageComponent.defaultProps = {
  children: null,
  style: {},
};

export default PageComponent;

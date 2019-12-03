import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {isUndefiendOrNull} from '../functions';

class InstrumentHeader extends React.Component {
  render() {
    const {
      company,
      country,
      currency,
      isin,
      kind,
      name,
    } = this.props.instrument;

    const {container} = this.generateStyles();
    return (
      <View style={container}>
        <Text>Instrument: {name}</Text>
        {!isUndefiendOrNull(company) && <Text>{company.description}</Text>}
        <Text>
          Country and Currency: {country} - {currency}
        </Text>
        <Text>ISIN number: {isin}</Text>
      </View>
    );
  }

  generateStyles = () => {
    return StyleSheet.create({
      container: {
        borderTopWidth: 0.3,
        borderTopColor: 'rgba(0,0,0,0.6)',
        paddingTop: 5,
      },
    });
  };
}

export default InstrumentHeader;

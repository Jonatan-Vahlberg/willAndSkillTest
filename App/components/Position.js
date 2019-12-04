import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {breakoutDate, breakoutTime, isUndefiendOrNull} from '../functions';
import Instrument from './Instrument';
import Card from './Card';

class Position extends React.Component {
  render() {
    const {
      acquisition_price,
      allocation,
      change_percent,
      created_at,
      instrument,
      kind,
    } = this.props;

    const {container} = this.generateStyles();

    return (
      <Card>
        <Text>Price: {acquisition_price}</Text>
        <Text>Type: {kind}</Text>
        <Text>Allocation: {allocation}</Text>
        {!isUndefiendOrNull(change_percent) && <Text>{change_percent}</Text>}
        <Text>
          {breakoutDate(created_at)} {breakoutTime(created_at)}
        </Text>
        <Instrument instrument={instrument} />
      </Card>
    );
  }

  generateStyles = () => {
    return StyleSheet.create({
      container: {
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginVertical: 5,
      },
      subContainer: {
        backgroundColor: '#141414',
      },
    });
  };
}

export default Position;

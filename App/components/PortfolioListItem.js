import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Card from './Card';

class PortfolioListItem extends React.Component {
  render() {
    const {
      alias,
      provider,
      name,
      kind,
      total_value,
      market_value,
      cash,
      account_number,
      currency,
    } = this.props.portfolio;

    const {card, nameStyle} = this.generateStyles();

    return (
      <TouchableOpacity
        onPress={() =>
          Actions.detail({
            title: name,
            portfolioStub: this.props.portfolio,
          })
        }>
        <Card>
          <Text style={nameStyle}>{name}</Text>
          <Text>A/C: {account_number}</Text>
          <Text>
            {provider} {kind}
          </Text>
          <Text>
            Value: {cash} {currency}
          </Text>
        </Card>
      </TouchableOpacity>
    );
  }

  generateStyles = () => {
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
      nameStyle: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 5,
      },
    });
  };
}

export default PortfolioListItem;

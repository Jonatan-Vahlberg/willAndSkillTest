import React from 'react';
import {View, Text, Dimensions, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {isUndefiendOrNull, breakoutTime, breakoutDate} from '../functions';
import {getSelectedPortfolio, deselectPortfolio} from '../actions';
import Spinner from '../components/Spinner';
import Position from '../components/Position';
import PageComponent from '../components/PageComponent';
import {Actions} from 'react-native-router-flux';

const {width} = Dimensions.get('window');

class DetailPage extends React.Component {
  componentDidMount() {
    const {
      token,
      portfolioStub: {alias},
    } = this.props;
    this.props.getSelectedPortfolio(token, alias);
    this.props.navigation.setParams({
      onRight: () => this.props.getSelectedPortfolio(token, alias),
    });
  }

  componentWillUnmount() {
    this.props.deselectPortfolio();
  }

  render() {
    const {portfolioStub, portfolio} = this.props;
    const selectedPortfolio = isUndefiendOrNull(portfolio)
      ? portfolioStub
      : portfolio;
    const {
      alias,
      provider,
      kind,
      total_value,
      market_value,
      cash,
      account_number,
      currency,
      created_at,
    } = selectedPortfolio;

    const {container, bigText} = this.generateStyles();

    return (
      <PageComponent>
        <View style={container}>
          <Text style={bigText}>Account number: {account_number}</Text>
          <Text style={bigText}>
            {provider} {kind}
          </Text>
          <Text style={bigText}>
            Value: {cash} {currency}
          </Text>
          <Text style={bigText}>
            Total value: {total_value} {currency}
          </Text>
          <Text style={bigText}>
            Market value: {market_value} {currency}
          </Text>
          <Text style={bigText}>
            Portfolio created: {breakoutDate(created_at)}{' '}
            {breakoutTime(created_at)}
          </Text>
          <Text style={bigText}>Positions</Text>
        </View>
        {portfolio !== null ? (
          this.renderDetailData()
        ) : (
          <View>
            <Spinner />
          </View>
        )}
      </PageComponent>
    );
  }

  renderDetailData() {
    const {positions} = this.props.portfolio;
    const {noPositionsContainer, noPositionsText} = this.generateStyles();
    return (
      <React.Fragment>
        <ScrollView>
          {positions.length > 0 ? (
            positions.map((position, index) => (
              <Position key={index} {...position} />
            ))
          ) : (
            <View style={noPositionsContainer}>
              <Text style={noPositionsText}>
                No positions in this portfolio
              </Text>
            </View>
          )}
        </ScrollView>
      </React.Fragment>
    );
  }

  generateStyles = () => {
    return StyleSheet.create({
      container: {
        width,
        backgroundColor: '#fff',
        borderBottomColor: 'rgba(0,0,0,0.5)',
        borderBottomWidth: 1.8,
        paddingHorizontal: 10,
        paddingVertical: 20,
      },
      noPositionsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
      },
      noPositionsText: {
        fontSize: 18,
        color: '#820000',
      },
      bigText: {
        fontSize: 16.5,
        fontWeight: '600',
      },
    });
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.user.token,
    portfolio: state.portfolios.selectedPortfolio,
  };
};

export default connect(mapStateToProps, {
  getSelectedPortfolio,
  deselectPortfolio,
})(DetailPage);
